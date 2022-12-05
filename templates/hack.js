const myContent = `<style>
  .callheader {
    background-color: black;
    font-family: Roboto, sans-serif;
    color: white;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 0.375rem;
    font-size: 18px;
    text-decoration: none;
  }

  .coluna {
    display: inline-block;
    width: 46%;
    justifify-content: space-between;

  }
  .coluna2 {
    display: inline-block;
    width: 48%;
    justifify-content: space-between;
    margin-left:10px;

  }
  
</style>
<div class="callheader">Fast Hacking</div>

<div class="coluna">
<form>
  <div class="form-group">
    <label>Info</label>
    <div class="form-fields">
      <input id="sizes" type="number" name="sizes">
    </div>
  </div>
</form>
<form>
  <div class="form-group">
    <label><b>Daze</b></label>
    <div class="form-fields">
      <input id="jog1" type="number" name="sizes">
    </div>
  </div>
</form>
<form>
  <div class="form-group">
    <label><b>Burning</b></label>
    <div class="form-fields">
      <input id="jog2" type="number" name="sizes">
    </div>
</form>
</div>
</div>



<div class="coluna2">
<form>
  <div class="form-group">
    <label><b>Info</b></label>
    <div class="form-fields">
      <input id="sizes" type="number" name="sizes">
    </div>
  </div>
</form>
<form>
  <div class="form-group">
    <label><b>Daze</b></label>
    <div class="form-fields">
      <input id="jog1" type="number" name="sizes">
    </div>
  </div>
</form>
<form>
  <div class="form-group">
    <label><b>Burning</b></label>
    <div class="form-fields">
      <input id="jog2" type="number" name="sizes">
    </div>
</form>
</div>
</div>


<button class="banana-set-size" role="button">Banana</button>
`;
const macro = this;
new Dialog({
  title: "GURPS Tracker",
  content: myContent,
  buttons: {},
  render: async (html) => listeners(html)
}).render(true);

async function listeners(html) {
  if (macro.getFlag("world", "sizes")) html.find("#sizes").val(macro.getFlag("world", "sizes"));
  else html.find("#sizes").val(0);

  if (macro.getFlag("world", "jog1")) html.find("#jog1").val(macro.getFlag("world", "jog1"));
  else html.find("#jog1").val(0);

  if (macro.getFlag("world", "jog2")) html.find("#jog2").val(macro.getFlag("world", "jog2"));
  else html.find("#jog2").val(0);

  if (macro.getFlag("world", "jog3")) html.find("#jog3").val(macro.getFlag("world", "jog3"));
  else html.find("#jog3").val(0);

  if (macro.getFlag("world", "jog4")) html.find("#jog4").val(macro.getFlag("world", "jog4"));
  else html.find("#jog4").val(0);

  if (macro.getFlag("world", "jog5")) html.find("#jog5").val(macro.getFlag("world", "jog5"));
  else html.find("#jog5").val(0);


  html.click(async function (event) {
      if (event.target.className === "banana-set-size") {
          const size = html.find("#sizes").val(); 
          const jog1 = html.find("#jog1").val(); 
          const jog2 = html.find("#jog2").val(); 
          const jog3 = html.find("#jog3").val(); 
          const jog4 = html.find("#jog4").val(); 
          const jog5 = html.find("#jog5").val(); 

          await macro.setFlag("world", "sizes", size);
          await macro.setFlag("world", "jog1", jog1);
          await macro.setFlag("world", "jog2", jog2);
          await macro.setFlag("world", "jog3", jog3);
          await macro.setFlag("world", "jog4", jog4);

          html.find("#sizes").val(size)
          html.find("#jog1").val(jog1)
          html.find("#jog2").val(jog2)
          html.find("#jog3").val(jog3)
          html.find("#jog4").val(jog4)
          html.find("#jog5").val(jog5)
          await aplica(size, jog1, jog2, jog3, jog4, jog5);
          

      }
  });
}


