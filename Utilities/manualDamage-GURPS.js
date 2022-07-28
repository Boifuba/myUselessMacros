function manualDamage(damage, type) {
  GURPS.executeOTF(`/r [${damage} ${type}]`);
}
new Dialog({
  title: `Manual Damage`,
  content: `<fieldset>
  <legend> Escolha seus interesses </ legend>
  <div>
    <input type = "checkbox" id = "codificação" name = "interesse" value = "codificação" checked>
    <label for = "coding"> Codificação </ label>
  </ div>
  <div>
    <input type = "checkbox" id = "música" name = "interesse" value = "música">
    <label for = "music"> Música </ label>
  </ div>
</ fieldset>
            <div><label for="damageType">type</label><input id="damageType" type="text" /></div>`,
  buttons: {
    confirm: {
      label: "Confirm",
      callback: async (html) => {
        manualDamage(html.find('#damageAmount').val(), html.find('#damageType').val());
      }
    }
  }
}, {
  width: 400
}).render(true);