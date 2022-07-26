if (canvas.tokens.controlled.length === 0)
  return ui.notifications.error("Selecione o seu token");

const targets = Array.from(game.user.targets);
const tokenD = canvas.tokens.controlled[0];

let applyChanges = false;
new Dialog({
  title: `Ajudante de Mago Preguiçoso`,
  content: `
    <form>
      <div class="form-group">
        <label>Innate Attack: </label>
        <select id="innate-attack" name="innate-attack">
          <option value="noInnate">Escolha o Ataque Mágico</option>
          <option value="cAirJet">Air Jet</option>
          <option value="breath">Breath</option>
          <option value="gaze">Gaze</option>
          <option value="cLightning">Lightning Bolt</option>
          </select>
      </div>
      <div class="form-group">
        <label>Spells:</label>
        <select id="cast-spell" name="cast-spell">
          <option value="noSpell">Escolha a Magia</option>
          <option value="mjet">Jet Air</option>
          <option value="light">Continual Light</option>
          <option value="lightning">Lightning</option>
          <option value="grease">Grease</option>
          </select>
      </div>
    </form>
    `,
  buttons: {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Lançar`,
      callback: () => (applyChanges = true),
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Vazar`,
    },
  },
  default: "yes",
  close: (html) => {
    if (applyChanges) {
      let updates = [];
      for (let token of canvas.tokens.controlled) {
        let innateAttack =
          html.find('[name="innate-attack"]')[0].value || "none";
        let castSpell = html.find('[name="cast-spell"]')[0].value || "none";

        //********************************************************
        //******************** NENHUM INATE **********************
        //********************************************************

        switch (innateAttack) {
          case "noInate":
          default:
            console.log("Nenhum Innate Attack Escolhido");
            break;

          //********************************************************
          //******************** LANÇA AIR JET *********************
          //********************************************************

          case "cAirJet":
            const targetsAj = Array.from(game.user.targets);

            targets.forEach((target) => {
              new Sequence()
                .effect()
                .file(
                  "modules/jb2a_patreon/Library/2nd_Level/Gust_Of_Wind/GustOfWind_01_White_VeryFast_1200x200.webm"
                )
                .atLocation(token)
                .stretchTo(target, { attachTo: true })
                .wait(1500)

                .effect()
                .file(
                  "modules/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_White_200x200.webm"
                )
                .atLocation(target)
                .duration(5000)
                .play();
            });
            GURPS.executeOTF(
              "S:Innate*Attack*Beam | DX-4 | S:Innate*Attack*Breath-2 | S:Innate*Attack*Gaze-2 | S:Innate*Attack*Projectile-2"
            );
            break;
          //********************************************************
          //******************** LANÇA BREATH **********************
          //********************************************************
          case "breath":
            GURPS.executeOTF(
              "S:Innate*Attack*Breath | DX-4 | S:Innate*Attack*Beam-2 | S:Innate*Attack*Gaze-2 | S:Innate*Attack*Projectile-2"
            );

            break;

          //********************************************************
          //******************** LANÇA GAZE ************************
          //********************************************************            
          case "gaze":
            GURPS.executeOTF(
              "S:Innate Attack*Gaze | DX-4 | S:Innate*Attack*Breath-2 | S:Innate*Attack*Beam-2 | S:Innate*Attack*Projectile-2"
            );

            break;
          //********************************************************
          //******************** LANÇA LIGHTING BOLT ***************
          //********************************************************
          case "cLightning":
            const targetsLb = Array.from(game.user.targets);
            targets.forEach((target) => {
              new Sequence()
                .effect()
                .file(
                  "modules/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x400.webm"
                )
                .atLocation(token)
                .stretchTo(target, { attachTo: true })
                .scale(1)
                .wait(1500)

                .effect()
                .file(
                  "modules/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Regular_Blue_400x400.webm"
                )
                .atLocation(target)
                .duration(5000)
                .belowTokens()

                .play();
            });
            GURPS.executeOTF(
              "S:Innate*Attack*Projectile | DX-4 | S:Innate*Attack*Breath-2 | S:Innate*Attack*Gaze-2 | S:Innate*Attack*Beam-2"
            );
            Sequencer.EffectManager.endEffects({ name: "*M-lightning*" });
            break;

        }

        // Macros de Magia
        switch (castSpell) {
          case "mjet":
            let effectsMJ = Sequencer.EffectManager.getEffects({
              name: "*M-Jet*",
            });

            if (effectsMJ.length) {
              Sequencer.EffectManager.endEffects({ name: "*M-Jet*" });
            } else {
              new Sequence()
                .effect()
                .file(
                  "modules/jb2a_patreon/Library/7th_Level/Whirlwind/Whirlwind_01_BlueGrey_02_400x400.webm"
                )
                .scale(0.5)
                .atLocation(tokenD)
                .attachTo(tokenD, { bindVisibility: false })
                .belowTokens()
                .persist()
                .name("M-Jet")

                .play();
            }

            break;
          //********************************************************
          //******************** CONTINUAL LIGHT *******************
          //********************************************************
          case "light":
            let effectsCl = Sequencer.EffectManager.getEffects({
              name: "*M-Continual Light*",
            });

            if (effectsCl.length) {
              Sequencer.EffectManager.endEffects({
                name: "*M-Continual Light*",
              });
            } else {
              new Sequence()
                .effect()
                .file(
                  "modules/jb2a_patreon/Library/Generic/Marker/MarkerLightOutro_01_Regular_Yellow_400x400.webm"
                )
                .scale(2.0)
                .atLocation(tokenD)
                .attachTo(tokenD, { bindVisibility: false })
                .belowTokens()
                .opacity(0.3)
                .persist(true, { persistTokenPrototype: true })
                .name("M-Continual Light")

                .play();
            }

            const cDimLight = 4;
            const cBrightLight = 3;
            const cAnimationType = "torch";
            /*
valid animation types are:
"none", "torch", "pulse", "chroma", "wave", "fog", "sunburst", "dome", "emanation", "hexa", "ghost", "energy", "roiling" (requires negative light value), "hole" (requires negative light value)
*/

            let dataUpdate = {
              "light.dim": !token.data.light.dim ? cDimLight : 0,
              "light.bright": !token.data.light.bright ? cBrightLight : 0,
              "light.color": "#fffedb",
              "light.alpha": 0.4,
              "light.animation": {
                type: cAnimationType,
                speed: 1,
                intensity: 5,
              },
            };
            token.document.update(dataUpdate);

            break;

          //*****************************************************************************
          //******************** GREASE *************************************************
          //*****************************************************************************
          case "grease":
            const effectsG = Sequencer.EffectManager.getEffects({
              name: "*Grease*",
            });

            const templateObject =
              canvas.templates.placeables[
              canvas.templates.placeables.length - 1
              ];
            //await templateObject.document.update({ fillColor: "" });
            templateObject.document.update({ fillColor: "" });
            if (effectsG.length) {
              Sequencer.EffectManager.endEffects({ name: "*Grease*" });
              let templateIds = canvas.templates.placeables[canvas.templates.placeables.length - 1].id;
              canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [templateIds]);
            } else {
              new Sequence()
                .effect()
                .file("jb2a.fire_bolt.green02")
                .atLocation(tokenD)
                .stretchTo({
                  x: templateObject.data.x,
                  y: templateObject.data.y,
                })
                .waitUntilFinished(-500)

                .effect()
                .file(
                  "modules/jb2a_patreon/Library/1st_Level/Grease/Grease_Dark_Grey_600x600.webm"
                )
                .scaleToObject(1.3)
                .attachTo(templateObject)
                .persist()
                .scaleIn(0.1, 200, { ease: "easeOutQuint", delay: 100 })
                .fadeOut(1000, { ease: "easeInQuad" })
                .belowTokens()
                .name("Grease")

                .play();
            }

            break;
          //********************************************************
          //******************** LIGHTNING       *******************
          //********************************************************
          case "lightning":
            const effectsL = Sequencer.EffectManager.getEffects({
              name: "*M-lightning*",
            });
            if (effectsL.length) {
              Sequencer.EffectManager.endEffects({ name: "*M-lightning*" });
            } else {
              new Sequence()
                .effect()
                .file(
                  "modules/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_03_Regular_Blue_400x400.webm"
                )
                .scale(0.5)
                .atLocation(tokenD)
                .attachTo(tokenD, { bindVisibility: false })
                .belowTokens()
                .persist(true, { persistTokenPrototype: true })
                .name("M-lightning")

                .play();
            }
            break;

          case "fireball":
            break;

          case "circle":
            GURPS.executeOTF("/:Magic Circle");

            break;

          case "noSpell":
          default:
            console.log("Sem magia escolhida");
        }
      }
    }
  },
}).render(true);