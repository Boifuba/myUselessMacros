let tokenD = canvas.tokens.controlled[0];
if (!tokenD) { return; }
const effects = Sequencer.EffectManager.getEffects({ name: "*torch_wood*", object: tokenD  });

if(effects.length){
Sequencer.EffectManager.endEffects({ name: "*torch_wood*", object: tokenD  });
Sequencer.EffectManager.endEffects({ name:  "*fume*", object: tokenD  });
Sequencer.EffectManager.endEffects({ name: "*flame*", object: tokenD });
}else{
    
let tokenD = canvas.tokens.controlled[0];

new Sequence()
    .effect()
        .file("Luzes/tocha.png") 
        .scale(0.25)
        .atLocation(tokenD)
        .zeroSpriteRotation(true)
        .attachTo(tokenD, { bindVisibility: false} )
        .name("torch_wood")
        .persist()
        .spriteOffset({ x: 10, y: 0})
        .zeroSpriteRotation(true)
    .play()
    new Sequence()
    .effect()
        .file("modules/jb2a_patreon/Library/Generic/Smoke/Fumes_01_Fire_Orange_400x400.webm") 
        .scale(0.3)
        .atLocation(tokenD)
        .attachTo(tokenD, { bindVisibility: false} )
        .name("fume")
        .persist()
        .zeroSpriteRotation()
        .spriteOffset({ x: 90, y: -78 })
  
    .play()
        new Sequence()
    .effect()
        .file("modules/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Orange_400x400.webm") 
        .scale(0.3)
        .atLocation(tokenD)
        .attachTo(tokenD, { bindVisibility: false} )
        .name("flame")
        .persist()
        .size({ width: 300, height: 380 })
        .spriteOffset({ x: 42, y: -31 })
        .zeroSpriteRotation()    
    .play()
    
}
        
        
const cDimLight = 2;
const cBrightLight = 1;
const cAnimationType = "torch";
/*
valid animation types are:
"none", "torch", "pulse", "chroma", "wave", "fog", "sunburst", "dome", "emanation", "hexa", "ghost", "energy", "roiling" (requires negative light value), "hole" (requires negative light value)
*/

let dataUpdate = {
   'light.dim': !token.data.light.dim ? cDimLight : 0,
   'light.bright': !token.data.light.bright ? cBrightLight : 0,
   'light.color': '#FFBE33',
   'light.alpha': 0.5,
   'light.animation': {"type": cAnimationType, "speed": 9, "intensity": 8 }
};
token.document.update(dataUpdate);