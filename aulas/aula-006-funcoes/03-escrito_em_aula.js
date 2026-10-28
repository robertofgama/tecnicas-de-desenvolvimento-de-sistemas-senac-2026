// Exercicio 01
// Formatar moeda. Escreva formatarMoeda(valor), que devolve o texto R$ seguido do valor com duas casas decimais.
// formatarMoeda(180) → R$ 180.00 e formatarMoeda(7200.5) → R$ 7200.50. Dica: .toFixed(2).

function formatarMoeda(valor) {
  const valorNumerico = Number(valor);
  if (!valorNumerico) return "Entrada Incorreta";

  return `R$ ${valorNumerico.toFixed(2)}`;
}

// Exercicio 02
// Subtotal do item. Escreva calcularSubtotal(preco, quantidade).
// Use-a com formatarMoeda pra imprimir o subtotal de 10 kits de discos de corte a R$ 180 (R$ 1800.00)
//  e de 2 plantadeiras a R$ 45.000 (R$ 90000.00).
function calcularSubtotal(preco, quantidade) {
  return preco * quantidade;
}

// Exercicio 03
//  Faixa de desconto. Escreva calcularDesconto(quantidade),
// que devolve o percentual de desconto como número:
// 0.2 a partir de 50 unidades, 0.1 a partir de 10, 0 abaixo disso. Teste com 5, 10 e 50.
//  Dica: um return dentro do if já encerra a função, nem precisa de else.
function calcularDesconto(quantidade) {
  if (quantidade >= 50) {
    return 0.2;
  }
  if (quantidade >= 10) {
    return 0.1;
  }
  if (quantidade < 10) {
    return 0;
  }
  return "Desconto fora da Faixa";
}

// Exercicio 04
// Frete com padrão. Escreva calcularFrete(total, uf).
// O frete é grátis se o total for de R$ 5.000 ou mais ou se o cliente for do RS; senão, custa R$ 150.
//  A maioria dos clientes é do RS, então uf deve valer "RS" quando não for informado. Teste:
// calcularFrete(3200) → 0
// calcularFrete(3200, "SC") → 150
// calcularFrete(8000, "SC") → 0
function calcularFrete(total, uf) {
  if (!uf || uf === "RS") return 0;
  if (total < 5000) return 150;
  return 0;
}

// Exercicio 06
// Fechando o pedido. A Agro Silva comprou 2 plantadeiras a R$ 45.000 e 50 kits de discos de corte a R$ 180.
// Escreva calcularTotalDoItem(preco, quantidade),
// que usa calcularSubtotal e calcularDesconto pra devolver o valor do item já com desconto.
// Depois, usando as funções dos exercícios anteriores, imprima:
// Plantadeira: R$ 90000.00
// Kit de discos de corte: R$ 7200.00
// Frete: R$ 0.00
// Total: R$ 97200.00
function calcularTotalDoItem(preco, quantidade) {
  const subtotal = calcularSubtotal(preco, quantidade);
  const desconto = calcularDesconto(quantidade);
  if (desconto === 0) return subtotal;
  const resultado = subtotal - subtotal * desconto;
  return resultado;
}

const plantadeira = calcularTotalDoItem(45000, 2);
const kitDeDiscos = calcularTotalDoItem(180, 50);
const frete = calcularFrete(plantadeira + kitDeDiscos);

console.log("Plantadeira: ", formatarMoeda(plantadeira));
console.log("Kit de Discos: ", formatarMoeda(kitDeDiscos));
console.log("Frete: ", formatarMoeda(frete));
console.log("Total: ", formatarMoeda(plantadeira + kitDeDiscos + frete));
