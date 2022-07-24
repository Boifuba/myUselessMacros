let tokenD = canvas.tokens.controlled[0];
if (!tokenD) { return; }
const effects = Sequencer.EffectManager.getEffects({ name: "*M-Continual Light*", object: tokenD  });



if(effects.length){
Sequencer.EffectManager.endEffects({ name: "*M-Continual Light*" });
}else{
    
new Sequence()
    .effect()
        .file("modules/jb2a_patreon/Library/Generic/Marker/MarkerLightOutro_01_Regular_Yellow_400x400.webm") 
        .scale(2.0)
        .atLocation(tokenD)
        .attachTo(tokenD, { bindVisibility: false} )
        .belowTokens()
        .opacity(0.7)
        .persist(true, { persistTokenPrototype: true })
        .name("M-Continual Light")
      
    .play()
    
}
        
        
const cDimLight = 0;
const cBrightLight = 4;
const cAnimationType = "torch";
/*
valid animation types are:
"none", "torch", "pulse", "chroma", "wave", "fog", "sunburst", "dome", "emanation", "hexa", "ghost", "energy", "roiling" (requires negative light value), "hole" (requires negative light value)
*/

let dataUpdate = {
   'light.dim': !token.data.light.dim ? cDimLight : 0,
   'light.bright': !token.data.light.bright ? cBrightLight : 0,
   'light.color': '#fffedb',
   'light.alpha': 0.5,
   'light.animation': {"type": cAnimationType, "speed": 0.5, "intensity": 1 }
};
token.document.update(dataUpdate);
canvas.scene.updateEmbeddedDocuments("Token", updates);