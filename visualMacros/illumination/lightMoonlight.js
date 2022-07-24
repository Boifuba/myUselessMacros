let tokenD = canvas.tokens.controlled[0];
if (!tokenD) { return; }
const effects = Sequencer.EffectManager.getEffects({ name: "*M-moonlight*", object: tokenD });



if (effects.length) {
    Sequencer.EffectManager.endEffects({ name: "*M-moonlight*", object: tokenD });
    Sequencer.EffectManager.endEffects({ name: "*moonstone*", object: tokenD });
    Sequencer.EffectManager.endEffects({ name: "*m-glare*", object: tokenD });

} else {

    new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Blue_Few02_400x400.webm")
        .scale(1.0)
        .atLocation(tokenD)
        .attachTo(tokenD, { bindVisibility: false })
        .belowTokens()
        .opacity(0.7)
        .persist(true, { persistTokenPrototype: true })
        .name("M-moonlight")
        .play()
    
        new Sequence()
        .effect()
        .file("Luzes/moonstone.png")
        .scale(0.25)
        .atLocation(tokenD)
        .zeroSpriteRotation(true)
        .attachTo(tokenD, { bindVisibility: false })
        .name("moonstone")
        .persist()
        .spriteOffset({ x: -0, y: 0 })
        .zeroSpriteRotation(true)
        .play()


        new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Marker/MarkerLightNoPulse_01_Regular_Blue_400x400.webm")
        .scale(0.4)
        .atLocation(tokenD)
        .zeroSpriteRotation(true)
        .attachTo(tokenD, { bindVisibility: false })
        .name("m-glare")
        .persist()
        .spriteOffset({ x: -32, y: 20 })
        .zeroSpriteRotation(true)
        .play()
}


const cDimLight = 1;
const cBrightLight = 2;
const cAnimationType = "torch";
/*
valid animation types are:
"none", "torch", "pulse", "chroma", "wave", "fog", "sunburst", "dome", "emanation", "hexa", "ghost", "energy", "roiling" (requires negative light value), "hole" (requires negative light value)
*/

let dataUpdate = {
    'light.dim': !token.data.light.dim ? cDimLight : 0,
    'light.bright': !token.data.light.bright ? cBrightLight : 0,
    'light.color': '#c5eff7',
    'light.alpha': 0.5,
    'light.animation': { "type": cAnimationType, "speed": 1.5, "intensity": 10 }
};
token.document.update(dataUpdate);