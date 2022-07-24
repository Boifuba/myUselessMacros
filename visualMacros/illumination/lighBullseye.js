let tokenD = canvas.tokens.controlled[0];
if (!tokenD) { return; }
const effects = Sequencer.EffectManager.getEffects({ name: "*M-BullseyeLantern*", object: tokenD });

if (effects.length) {
    Sequencer.EffectManager.endEffects({ name: "*M-BullseyeLantern*", object: tokenD });

} else {

    let tokenD = canvas.tokens.controlled[0];

    new Sequence()
        .effect()
        .file("Luzes/lanterna-focal.png")
        .scale(0.25)
        .atLocation(tokenD)
        .zeroSpriteRotation(true)
        .attachTo(tokenD, { bindVisibility: false })
        .name("M-BullseyeLantern1")
        .persist()
        .spriteOffset({ x: 10, y: 0 })
        .zeroSpriteRotation(true)
        .play()
    new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Smoke/Fumes_02_Steam_White_400x400.webm")
        .scale(0.1)
        .atLocation(tokenD)
        .attachTo(tokenD, { bindVisibility: false })
        .name("M-BullseyeLantern2")
        .persist()
        .zeroSpriteRotation()
        .spriteOffset({ x: -12, y: -10 })

        .play()



}

const cDimLight = 2;
const cBrightLight = 8;
const cAnimationType = "torch";
const cAngle = 52.5;

let dataUpdate = {
    'light.angle': !token.data.angle ? cAngle : 0,
    'light.dim': !token.data.light.dim ? cDimLight : 0,
    'light.bright': !token.data.light.bright ? cBrightLight : 0,
    'light.color': '#FFBE33',
    'light.alpha': 0.5,
    'light.animation': { "type": cAnimationType, "speed": 9, "intensity": 8 }
};
tokenD.document.update(dataUpdate);