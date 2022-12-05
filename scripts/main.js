import GurpsWiring from "/systems/gurps/module/gurps-wiring.js";
import { UniversalFileHandler } from "/systems/gurps/module/file-handlers/universal-file-handler.js";

function hookUp(html) {
  GurpsWiring.hookupGurps(html);
  GurpsWiring.hookupGurpsRightClick(html);
  const links = html.find(".gurpslink");
  links.each((_, li) => {
    li.setAttribute("draggable", "true");
    li.addEventListener("dragstart", (ev) => {
      let display = "";
      if (!!ev.currentTarget?.dataset.action)
        display = ev.currentTarget.innerText;
      return ev.dataTransfer?.setData(
        "text/plain",
        JSON.stringify({
          otf: li.getAttribute("data-otf"),
          displayname: display,
        })
      );
    });
  });
}

function getFilteredOtfs(rowsProcessed, key) {
  return rowsProcessed
    .filter((r) => r.name.includes(key))
    .map(
      (r) => `<p>
        ${GURPS.gurpslink(r.reference)}
        ${GURPS.gurpslink(r.otf)}
    </p>`
    )
    .join("\n");
}

async function skillsImport() {
  const template = await getTemplate(
    "modules/gurps-instant-defaults/templates/chooseSkillsFile.hbs"
  );
  const file = await UniversalFileHandler.getFile({
    template,
    extensions: [".skl"],
  });
  const text = await file.text();
  const skills = [];
  const skillNames = new Set();
  JSON.parse(text).rows.forEach((skill) => {
    if (!skillNames.has(skill.name)) {
      skills.push(skill);
      skillNames.add(skill.name);
    }
  });
  const htmls = skills.map((skill) => {
    const defaults = skill.defaults ?? [];
    const options = [`S:${skill.name}`].concat(
      ...defaults.map((d) =>
        d.type === "skill"
          ? `S:${d.name}${d.modifier}`
          : `${d.type}${d.modifier}`
      )
    );
    const otf = `["${skill.name}" ${options.join(" | ")}]`;
    const reference = skill.reference
      .split(",")
      .map((r) => `[PDF:${r}]`)
      .join();
    return `<tr><td>${otf}</td><td>${reference}</td></tr>`;
  });
  JournalEntry.create({
    name: file.name.slice(0, file.name.lastIndexOf(".")),
    content: `<table>${htmls.join("\n")}</table>`,
  });
}

async function skillChooser() {
  const compendium = game.packs.get("gurps-instant-defaults.Defaults");
  const journal = (await compendium.getDocuments())[0];
  const page = await journal.pages.getName("Instant Defaults");
  const content = $(page.text.content);
  const otfRows = [...content.find("tr")].filter((e) =>
    e.innerText.trim().startsWith('["')
  );

  const rowsProcessed = otfRows.map((r) => ({
    otf: r.children[0].innerText,
    reference: r.children[1].innerText,
  }));
  rowsProcessed.forEach(
    (r) =>
      (r.name = r.otf
        .trim()
        .match(/^\["(?<name>[^"]+)"/)
        .groups.name.toLowerCase())
  );

  const dialogHtml = await new Promise((resolve) => {
    new Dialog(
      {
        title: "Skill Chooser",
        content: `<input id="filter">
    <div id="result">${getFilteredOtfs(rowsProcessed, "")}</div>`,
        buttons: {},
        render: (html) => {
          hookUp(html);
          resolve(html);
        },
      },
      { height: 500 }
    ).render(true);
  });
  const resultElement = dialogHtml.find("#result")[0];
  dialogHtml.find("#filter").on("input", function (e) {
    resultElement.innerHTML = getFilteredOtfs(rowsProcessed, e.target.value);
    hookUp($(resultElement));
  });
}

window.InstantDefaults = { skillChooser, skillsImport };
