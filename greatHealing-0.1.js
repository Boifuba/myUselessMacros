function greatHealing(fatigue) {
    GURPS.executeOTF(`/r [Sp:"Major Healing" *Costs ${fatigue}]`)
   }
   
   new Dialog({
     title: `Great Rilings xablauster`,
     content: `<div><label for="fatigue">Fatigue</label><input id="fatigue" type="text" /></div>`,
     buttons: {
       confirm: {
         label: "Confirm",
         callback: async (html) => greatHealing(html.find('#fatigue').val())
       }
     }
   }).render(true);