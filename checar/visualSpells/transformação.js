let notTransformed = 'dragupload/uploaded/tokens/2.png';
let transformed = 'dragupload/uploaded/tokens/boss.png';

let img = token.data.img === notTransformed ? transformed : notTransformed;

new Sequence()
    .effect()
    .file("modules/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Orange_400x400.webm")
    .atLocation(token)
    .scaleToObject(2.5)
    .randomRotation()
    //.wait(1500)

    .effect()
    .file("modules/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Orange_400x400.webm")
    .atLocation(token)
    //.strecthTo*(token)
    .belowTokens()
    .scale(0.8)
    .spriteOffset({ x: -10, y: -70 })
    .attachTo(token, { followRotation: false })
    .persist()
    .effect()
    .file("modules/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_05_Regular_Orange_400x400.webm")
    .atLocation(token)
    .attachTo(token, { followRotation: false })
    .scale(0.4)
    .persist()
    .wait(1500)
    .thenDo(() => {
        token.document.update({ img });


    })

    .play()