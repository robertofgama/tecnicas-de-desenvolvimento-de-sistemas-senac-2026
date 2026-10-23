// 1
// const numero = 8;
// if (numero % 2 === 0) {
//   console.log(numero + " é par");
// } else {
//   console.log(numero + " é impar");
// }

// 3
// const quantidade = 10;
// const estoque = 20;

// if (quantidade <= 0) {
//   console.log("Quantidade Inválida");
// } else if (quantidade > estoque) {
//   console.log("Temos somente " + estoque + " em estoque");
// } else {
//   console.log("Item Adicionado");
// }

// 04
const status = "enviado";

if (status === "enviado") {
  console.log("Pedido recebido, aguardando faturamento");
} else if ("rascunho") {
  console.log("Pedido ainda não enviado");
} else if ("faturado") {
  console.log("Nota fiscal emitida");
} else if ("entregue") {
  console.log("Pedido concluído");
} else {
  console.log("Status desconhecido: xxx");
}
