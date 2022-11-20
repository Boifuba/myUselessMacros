const icon = "icons/magic/symbols/rune-sigil-green.webp";

//MINOR HEALING


function minorHealing(energy) {
  if ((energy > 3)) {
    ui.notifications.error("The value need to be equal or lower than 3");
    dialogEditor.render(true);
        
 
//  energy = Object.keys(energy).length === 0 {
//       ui.notifications.error("Choose a value between 1-3");
      
      

    } else {
      
      
      GURPS.executeOTF(`/r [/hp +${energy}  @target]`)
      GURPS.executeOTF(`/r [/fp -${energy}]`)
    }
  }


  //MAJOR HEALING


function majorHealing(energy) {
  if (energy = Object.keys(energy).length === 0) {
    ui.notifications.error("You need some energy to cast this spell!");
    dialogEditor.render(true);

  } else {
    let realHealing = energy * 2
    GURPS.executeOTF(`/r [/hp +${realHealing}  @target]`)
    GURPS.executeOTF(`/r [/fp -${energy}]`);
  }
}

//GREATER HEALING

function greaterHealing(energy) {

  GURPS.executeOTF(`/r [/hp reset  @target]`)
  GURPS.executeOTF(`/r [/fp -20]`)
}

let dialogContent =
  ` 

body#principal {
background-color: black;
}
  <body id="principal>
  <form>
    <div class="form-group">
      <label>Fatigue Points:</label>
      <input id="energy" name="energy" type="number" value="1" min="1" max="20">
    </div>    
<div class="form-group"></div>`
  ;

//let applyChanges = false
let dialogButtons = {

  minorHealing: {

    label: `Minor Healing`,
    callback: async (html) => minorHealing(html.find('#energy').val())
  },
  majorHealing: {

    label: `Major Healing`,
    callback: async (html) => majorHealing(html.find('#energy').val())
  },
  greaterHealing: {

    label: `Greater Healing`,
    callback: async (html) => greaterHealing(html.find('#energy').val())
  }
}

let dialogEditor = new Dialog({
  title: `Instant Healings`,
  content: dialogContent,
  buttons: dialogButtons,
  default: "yes",
})

dialogEditor.render(true);