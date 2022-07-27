let tokenD = canvas.tokens.controlled[0];
if (!tokenD) { return; }
const effects = Sequencer.EffectManager.getEffects({ name: "*lantern*", object: tokenD });

if (effects.length) {
    Sequencer.EffectManager.endEffects({ name: "*lantern*", object: tokenD });
    Sequencer.EffectManager.endEffects({ name: "*lantern-glow*", object: tokenD });
} else {

    let tokenD = canvas.tokens.controlled[0];

    new Sequence()
        .effect()
        .file("Luzes/lanterna.png")
        .scale(0.25)
        .atLocation(tokenD)
        .zeroSpriteRotation(true)
        .attachTo(tokenD, { bindVisibility: false })
        .name("lantern")
        .persist()
        .spriteOffset({ x: -10, y: 0 })
        .zeroSpriteRotation(true)
   
   

        
   
    .effect()
        .file("modules/jb2a_patreon/Library/Generic/Marker/MarkerLightOutro_01_Regular_Yellow_400x400.webm") 
        .scale(2.0)
        .atLocation(tokenD)
        .attachTo(tokenD, { bindVisibility: false} )
        .belowTokens()
        .opacity(0.1)
        .persist(true, { persistTokenPrototype: true })
        .name("lantern-glow")
      
    .play()
    

}


const cDimLight = 1;
const cBrightLight = 2;
const cAnimationType = "torch";
const cAngle = 360;


let dataUpdate = {
    'light.angle': !token.data.angle ? cAngle : 0,
    'light.dim': !token.data.light.dim ? cDimLight : 0,
    'light.bright': !token.data.light.bright ? cBrightLight : 0,
    'light.color': '#FFBE33',
    'light.alpha': 0.5,
    'light.animation': { "type": cAnimationType, "speed": 2, "intensity": 8 }
};
tokenD.document.update(dataUpdate);