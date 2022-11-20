Hooks.on("updateActor", async (actor, data) => {
    console.log('Is this Working?')

    const newValue = getProperty(data, "system.hp.value");
    const maxHp = getProperty(data, "system.hp.max");


    if(newValue !== undefined && newValue >= 1 && newValue < maxHP) {
      console.log('Seems working');

  }})