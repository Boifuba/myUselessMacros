/* AE Builder
docs: https://gitlab.com/peginc/swade/-/wikis/active-effects#attribute-keys
*/

const version = 'v1.7';
const icon = "icons/magic/symbols/rune-sigil-green.webp";

if (canvas.tokens.controlled[0] === undefined && Array.from(game.user.targets)[0] === undefined) {
  ui.notifications.error("Please, select or target a token."); // No Token is Selected
} else {
  main();
}

function main() {
  let tokenD = canvas.tokens.controlled[0];



  let dialog_content = `

  <form>
      <div class="form-group">
        <label>Fatigue Points:</label>
        <input id="energy" name="energy" type="text" value="How many Points? ">
      </div>    
  <div class="form-group">
  
  
  <td style="text-align: center;"><input type="checkbox" id="minortick" style="margin-left:15px; margin-right:6px" value=yes<label>Minor Healing</label></td>
  
  <td style="text-align: center;"><input type="checkbox" id="majortick" style="margin-left:15px; margin-right:6px" value=yes<label>Major Healing</label></td> 
  
  <td style="text-align: center;"><input type="checkbox" id="greatertick" style="margin-left:15px; margin-right:6px" value=yes<label>Greater Healing</label></td>
   
`;

  let applyChanges = false;
  let dialogButtons = {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Cast Spells`,
      callback: async (html) => applySpell(html.find('#energy').val())
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel Spell`
    }
  }

  // título   
  new Dialog({
    title: `Não sei que coisa vai ser isso`,
    content: dialog_content,
    buttons: dialogButtons,
    default: "yes",
  }).render(true);
}

//async function applySpell(html) {
//  let energy = html.find('[name="energy"]')[0].value;
//}


const minH = document.querySelector('#minortick');
console.log(minH.checked);
const majH = document.querySelector('#majortick');
console.log(majH.checked);
const gH = document.querySelector('#greatertick');
console.log(gH.checked);


//minor healing

if (console.log(minH) === true) {
  ui.notifications.error("Escolha uma magia");

  } else {

function applySpell(energy) {
    
    GURPS.executeOTF(`/r [/hp +${realHealing}  @target]]`)
    GURPS.executeOTF(`/r [/fp -${energy}]`)
  }
}
// function applySpell(energy) {
//   let realHealing = energy *2
//    GURPS.executeOTF(`/r [/hp +${realHealing}  @target]]`)
//    GURPS.executeOTF(`/r [/fp -${energy}]`)
//   }