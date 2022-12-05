  const myContent = `<style>
      .callheader {
        background-color: black;
        font-family: Roboto, sans-serif;
        color: white;
        text-align: center;
        vertical-align: middle;
        line-height: 50px;
        height: 50px;
        margin-bottom: 10px;
        border-radius: 0.375rem;
        font-size: 18px;
        text-decoration: none;
      }
    </style>
    <div class="callheader">Colored Borders</div>

  
    <button class="veasy" role="button">Very Easy</button>
    <button class="easy" role="button">Easy</button>
    <button class="medium" role="button">Medium</button>
    <button class="hard" role="button">Hard</button>
    <button class="vhard" role="button">Very Hard</button>


  `;


  let error = false;



  const macro = this;
  new Dialog({
      title: "Difficult Check",
      content: myContent,
      buttons: {},
      render: async (html) => listeners(html)
  }).render(true);

  async function listeners(html) {
    
      html.click(async function (event) {
          if (event.target.className === "easy") {
              console.log("funciona")
          }
      });

  }