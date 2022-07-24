const updates = canvas.tokens.controlled.map(i => {
  const dimSight = Number(i.document.data.dimSight);
  const change = event.ctrlKey ? dimSight + 0.8 : event.altKey ? dimSight -1 : 0;
  return {_id: i.id, dimSight: Math.max(change, 0)};
});
await canvas.scene.updateEmbeddedDocuments("Token", updates);