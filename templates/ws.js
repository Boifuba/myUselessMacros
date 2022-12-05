// =============================================
const objk = {
  ADV: {
    "01": {
      nome: "legal",
    },
    "02": {
      nome: "bacana",
    },
    "03": {
      nome: "cool",
    },
    "04": {
      nome: "xarope",
    },
  },
  DIS: {
    "01": {
      nome: "mal humano",
    },
    "02": {
      nome: "vacilao",
    },
    "03": {
      nome: "cuzao",
    },
    "04": {
      nome: "falso",
    },
  },
};

let list = [];
const stringTeste = "asdasd";

const ehString = (s) => {
  if (typeof s == "string") list.push(s);
  else if (typeof s == "object") {
    for (const s1 of Object.keys(s)) {
      ehString(s[s1]);
    }
  }
};

ehString(objk);
console.log(list);

// =============================================
