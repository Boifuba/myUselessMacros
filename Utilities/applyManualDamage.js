function manualDamage(damage, type) {
  GURPS.executeOTF(`/r [${damage} ${type}]`);
}
new Dialog({
  title: `Manual Damage`,
  content: 
`<form>
<style>
form#form-group {
  background-color: red;
}
</style>
 <form>
      <div class="form-group">
        <label>Damage Type: </label>
        <select id="damageType" name="damageType">
          <option value="burn">Burning</option>
          <option value="cor">Corrosion</option>
          <option value="cr">Crushing</option>
          <option value="imp">Impaling</option>
          <option value="pi-">Smal piercing</option>
          <option value="pi">Piercing</option>
          <option value="pi+">Large Piercing</option>
          <option value="pi+">Large Piercing</option>
          <option value="pi++">Huge Piercing</option>
          <option value="tox">Toxic</option>
          <option value="sh">Shield</option>
             
          
          
          </select>
      </div>
     
  </form>  
  
  <form>
<div class="form-group">
  <label>Damage Amount:</label>
  <input id="damageAmount" name="damageAmount"  value="" min="1" max="20">
  </div>   
  `,
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