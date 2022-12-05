ui.notifications.notify(token.name + " TOMA ESSA TRAP NA CARA FDP");
let tokenD = canvas.tokens.controlled[0];

new Sequence()
  //meu cu
    
    .effect()
        .atLocation(canvas.tokens.get('ytmfbiffk5e5v1lf'))
        .stretchTo(tokenD)
        .file("jb2a.breath_weapons02.loop.cone.fire.orange.02")
        .wait(1000)
    //.effect()
      //  .file("jb2a.flames.02.orange") 
      //  .scale(0.5)
       // .spriteOffset({ x: -10, y: -70 })
      //  .atLocation(tokenD)
    .effect()
        .file("jb2a.flames.orange.03.1x1.0")
        .scale(1.0)
        .atLocation(tokenD)
        .spriteOffset({ x: -10, y: -70 })
        .fadeIn(300)
        .fadeOut(1000)
        .persist()
      
  
            
    .play()