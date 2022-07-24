function majorHealing(energy) {
  let realHealing = energy *2
   GURPS.executeOTF(`/r [/hp +${realHealing}  @target]]`)
   GURPS.executeOTF(`/r [/fp -${energy}]`)
  }
  
  new Dialog({
    title: `Minor Healing`,
    content: `<div>
              <label for="energy">Energy:</label><br><br>
              <input id="energy" type="text" maxlength="2" size="4" /><br>
              
              <small>
              <p>
              Heal is energy x 2</small><br></p>
              </div>
             `,
    buttons: {
      confirm: {
        label: "Confirm",
        callback: async (html) => minorHealing(html.find('#energy').val())
      }
    }
  }).render(true);