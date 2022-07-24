let effect = async function() {
  const effect = _token.actor.effects.contents;
  for (let i = 0; i < effect.length; i++) {
    let condition = effect[i].data.label;
    let status = effect[i].data.disabled;
    let effect_id = effect[i].data._id;
    console.log(`condition: [${condition}] status: [${status}] effect_id: [${effect_id}]`)
    if (status === false) {
        await _token.actor.deleteEmbeddedDocuments("ActiveEffect", [effect_id]);
    }
  }
}

effect();