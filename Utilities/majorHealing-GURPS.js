function minorHealing(energy) {
 GURPS.executeOTF(`/r [/hp +${energy} @target]]`)
 GURPS.executeOTF(`/r [/fp -${energy}]`)
}

new Dialog({
  title: `Minor Healing`,
  content: `<div><label for="energy">Energy</label><input id="energy" type="text" /></div>`,
  buttons: {
    confirm: {
      label: "Confirm",
      callback: async (html) => minorHealing(html.find('#energy').val())
    }
  }
}).render(true);