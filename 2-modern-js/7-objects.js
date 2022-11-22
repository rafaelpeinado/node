const mystery = "answer";

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 42,
};

// se executar no node e digitar obj.mystery, ele imprimirá undefined
// para imprimir o valor 42 temos que digitar obj.answer

