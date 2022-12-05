/*
  GM Menu
  
  icons: icons/sundries/documents/document-writing-pink.webp
  
  Fill the constant macros with the names of your macros, when you click the button it will run the macro.

  Dialog Window will not close until the X button is pressed.
*/
const managerType = 'Gerenciador de Macros';

(()=>{
  const tables = [
    "Critical Hit",
    "Critical Miss",
    "Alterar Tamanho",
    "Jogar Moeda",
    "Aplicar Dano",
    "Abrir Quest Log",
    "Gerenciador de Iluminação",
    "Gerenciado de Armas",
    "Healing Tool",
    "Critical Magic"

  ];

    let buttons = {}, dialog, content = `<div sytle="width:100%;text-align:center;><h2>Choose Macro</h2></div>`;
  
  
  tables.forEach((str)=> {
    let table = game.tables.getName(str);
    if(!table) return;

    buttons[str] = {
      label : `
        <div style="display:flex;flex-direction:row;justify-content:center;align-items:center;">
          
        <div style="display:flex;justify-content:left;flex-grow:1;">
        <img src="${table.data.img}" width="50" height="50" style="background-color:#5c5c5c;;border-radius: 10px;margin: 3px 3px 3px;"/></div> 

        <div style="display:flex;justify-content:left;flex-grow:1"><label>${str}</label></div>
        </div>`,
      callback : () => {
        game.tables.getName(str).draw();
       dialog.render(true);
      }
    }
  });
  dialog = new Dialog({title : `${managerType}`,content, buttons}).render(true);
})();




