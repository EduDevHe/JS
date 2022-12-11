/* Var possui um escopo global, ou seja, valores armazenados
neste tipo de variável podem ser acessados em qualquer lugar do
código */

var name = "Eduardo";

if (true) {
  console.log("value of name in if condition:", name);
  var varInIf = "var in if condition";
}

function showVar() {
  return console.log("value of:", name);
}

function showVarInIf() {
  return console.log("value of:", varInIf);
}

showVar();
showVarInIf();
