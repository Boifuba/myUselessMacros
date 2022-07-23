function manualDamage(damage, type) {
  GURPS.executeOTF(`/r [${damage} ${type}]`);
}
new Dialog({
  title: `Manual Damage`,
  content: `<div><label for="damageAmount">damage</label><input id="damageAmount" type="text" /></div>
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