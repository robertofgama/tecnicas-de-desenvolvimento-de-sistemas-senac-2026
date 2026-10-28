// Resoluções dos exercícios — Funções
// Rode com: node 02-resolucao_exercicios.js
//
// Aqui os exercícios NÃO ficam isolados entre chaves { }: as funções
// dos primeiros exercícios são reaproveitadas nos últimos. É justamente
// a graça das funções: escreve uma vez, usa em vários lugares.

// ---------------------------------------------------------------
// Exercício 1: Formatar moeda
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")

function formatarMoeda(valor) {
  // toFixed(2) devolve um texto com duas casas decimais
  return `R$ ${valor.toFixed(2)}`
}

console.log(formatarMoeda(180))    // R$ 180.00
console.log(formatarMoeda(7200.5)) // R$ 7200.50

// ---------------------------------------------------------------
// Exercício 2: Subtotal do item
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")

function calcularSubtotal(preco, quantidade) {
  return preco * quantidade
}

// A chamada "vira" o valor devolvido, então dá pra passar
// o resultado de uma função direto pra outra
console.log(formatarMoeda(calcularSubtotal(180, 10)))   // R$ 1800.00
console.log(formatarMoeda(calcularSubtotal(45000, 2)))  // R$ 90000.00

// ---------------------------------------------------------------
// Exercício 3: Faixa de desconto
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")

function calcularDesconto(quantidade) {
  // A ordem importa: testa a faixa maior primeiro.
  // Cada return encerra a função, por isso não precisa de else.
  if (quantidade >= 50) {
    return 0.2
  }
  if (quantidade >= 10) {
    return 0.1
  }
  return 0
}

console.log(calcularDesconto(5))  // 0
console.log(calcularDesconto(10)) // 0.1
console.log(calcularDesconto(50)) // 0.2

// ---------------------------------------------------------------
// Exercício 4: Frete com padrão
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")

// uf = "RS": se a chamada não informar a UF, vale "RS"
function calcularFrete(total, uf = "RS") {
  if (total >= 5000 || uf === "RS") {
    return 0
  }
  return 150
}

console.log(calcularFrete(3200))       // 0   (uf ficou "RS")
console.log(calcularFrete(3200, "SC")) // 150
console.log(calcularFrete(8000, "SC")) // 0   (total alto)

// ---------------------------------------------------------------
// Exercício 5: Arrow functions
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")

// Sem chaves, o valor depois da seta é devolvido automaticamente.
// A comparação já dá true ou false: não precisa de if.
const temEstoque = (estoque, quantidade) => quantidade <= estoque

// preco + preco * percentual / 100 em vez de preco * 1.1:
// evita o 198.00000000000003 dos números quebrados
const aplicarAcrescimo = (preco, percentual) => preco + preco * percentual / 100

console.log(temEstoque(20, 5))         // true
console.log(temEstoque(20, 500))       // false
console.log(aplicarAcrescimo(180, 10)) // 198

// ---------------------------------------------------------------
// Exercício 6: Fechando o pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")

function calcularTotalDoItem(preco, quantidade) {
  const subtotal = calcularSubtotal(preco, quantidade)
  const desconto = calcularDesconto(quantidade)
  return subtotal * (1 - desconto)
}

const totalPlantadeiras = calcularTotalDoItem(45000, 2) // 90000 (sem desconto)
const totalKits = calcularTotalDoItem(180, 50)          // 9000 - 20% = 7200
const totalItens = totalPlantadeiras + totalKits
const frete = calcularFrete(totalItens) // a Agro Silva é do RS: vale o padrão

console.log(`Plantadeira: ${formatarMoeda(totalPlantadeiras)}`)
console.log(`Kit de discos de corte: ${formatarMoeda(totalKits)}`)
console.log(`Frete: ${formatarMoeda(frete)}`)
console.log(`Total: ${formatarMoeda(totalItens + frete)}`)
// Plantadeira: R$ 90000.00
// Kit de discos de corte: R$ 7200.00
// Frete: R$ 0.00
// Total: R$ 97200.00

// ---------------------------------------------------------------
// Exercício 7 (Médio): O parcelamento
// ---------------------------------------------------------------
console.log("\n--- Exercício 7 ---")

function calcularParcela(total, parcelas = 1) {
  // Até 3x o total fica como está; o acréscimo só entra de 4x pra cima
  if (parcelas <= 3) {
    return total / parcelas
  }
  return aplicarAcrescimo(total, 5) / parcelas
}

function mostrarParcelamento(total, parcelas = 1) {
  // Validação primeiro: o return sai da função antes de calcular qualquer coisa
  if (parcelas < 1 || parcelas > 10) {
    console.log(`Parcelamento inválido: ${parcelas}x`)
    return
  }
  console.log(`${parcelas}x de ${formatarMoeda(calcularParcela(total, parcelas))}`)
}

mostrarParcelamento(900, 3)   // 3x de R$ 300.00
mostrarParcelamento(1000, 5)  // 5x de R$ 210.00  (1000 + 5% = 1050, dividido por 5)
mostrarParcelamento(900)      // 1x de R$ 900.00  (parcelas ficou 1)
mostrarParcelamento(900, 12)  // Parcelamento inválido: 12x

// ---------------------------------------------------------------
// Exercício 8 (Médio): A comissão do vendedor
// ---------------------------------------------------------------
console.log("\n--- Exercício 8 ---")

function percentualComissao(vendido, meta) {
  // Do mais exigente pro menos exigente. Se o "bateu a meta" viesse
  // primeiro, quem vendeu 1,5x a meta pararia nele e ganharia só 5%.
  if (vendido >= meta * 1.5) {
    return 8
  }
  if (vendido >= meta) {
    return 5
  }
  return 3
}

function calcularComissao(vendido, meta = 200000) {
  return vendido * percentualComissao(vendido, meta) / 100
}

console.log(`Ana: ${formatarMoeda(calcularComissao(150000))}`)   // Ana: R$ 4500.00
console.log(`Bruno: ${formatarMoeda(calcularComissao(200000))}`) // Bruno: R$ 10000.00  (exatamente a meta: >= conta)
console.log(`Carla: ${formatarMoeda(calcularComissao(320000))}`) // Carla: R$ 25600.00  (320 mil passa dos 300 mil)

// ---------------------------------------------------------------
// Exercício 9 (Difícil): A liberação do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 9 ---")

function verificarPedido(quantidade, estoque, total, limiteCredito, pagamentoAprovado = false) {
  // Um return por regra, na ordem do enunciado: a primeira que falhar responde
  if (quantidade <= 0) {
    return "Quantidade inválida"
  }
  if (quantidade > estoque) {
    return `Estoque insuficiente: só temos ${estoque}`
  }
  if (total > limiteCredito && !pagamentoAprovado) {
    return "Aguardando pagamento"
  }
  return "Pedido liberado"
}

// Nenhuma regra repetida: se uma regra mudar em verificarPedido,
// podeLiberar acompanha sozinha
function podeLiberar(quantidade, estoque, total, limiteCredito, pagamentoAprovado = false) {
  return verificarPedido(quantidade, estoque, total, limiteCredito, pagamentoAprovado) === "Pedido liberado"
}

console.log(verificarPedido(0, 0, 0, 10000))           // Quantidade inválida  (a 1ª regra fala antes da 2ª)
console.log(verificarPedido(30, 20, 5400, 10000))      // Estoque insuficiente: só temos 20
console.log(verificarPedido(2, 5, 90000, 50000))       // Aguardando pagamento
console.log(verificarPedido(2, 5, 90000, 50000, true)) // Pedido liberado
console.log(verificarPedido(10, 20, 1800, 10000))      // Pedido liberado
console.log(podeLiberar(2, 5, 90000, 50000))           // false
console.log(podeLiberar(2, 5, 90000, 50000, true))     // true

// ---------------------------------------------------------------
// Exercício 10 (Difícil): O orçamento completo
// ---------------------------------------------------------------
console.log("\n--- Exercício 10 ---")

function montarOrcamento(produto, preco, quantidade, uf = "RS", parcelas = 1) {
  // A ordem do cálculo é a do enunciado: cada valor depende do anterior
  const subtotal = calcularSubtotal(preco, quantidade)
  const percentual = calcularDesconto(quantidade)
  const desconto = subtotal * percentual
  const valorComDesconto = subtotal - desconto
  const frete = calcularFrete(valorComDesconto, uf) // frete sobre o valor JÁ com desconto
  const total = valorComDesconto + frete

  console.log(`Orçamento: ${quantidade}x ${produto}`)
  console.log(`Subtotal: ${formatarMoeda(subtotal)}`)
  console.log(`Desconto (${percentual * 100}%): ${formatarMoeda(desconto)}`)
  console.log(`Frete: ${formatarMoeda(frete)}`)
  console.log(`Total: ${formatarMoeda(total)}`)
  console.log(`Pagamento: ${parcelas}x de ${formatarMoeda(calcularParcela(total, parcelas))}`)
}

montarOrcamento("Kit de discos de corte", 180, 50, "RS", 4)
// Orçamento: 50x Kit de discos de corte
// Subtotal: R$ 9000.00
// Desconto (20%): R$ 1800.00
// Frete: R$ 0.00
// Total: R$ 7200.00
// Pagamento: 4x de R$ 1890.00   (7200 + 5% = 7560, dividido por 4)

console.log()
montarOrcamento("Plantadeira", 45000, 1, "SC", 2)
// Orçamento: 1x Plantadeira
// Subtotal: R$ 45000.00
// Desconto (0%): R$ 0.00
// Frete: R$ 0.00                (fora do RS, mas acima de R$ 5.000)
// Total: R$ 45000.00
// Pagamento: 2x de R$ 22500.00

console.log()
montarOrcamento("Kit de discos de corte", 180, 5, "SC")
// Orçamento: 5x Kit de discos de corte
// Subtotal: R$ 900.00
// Desconto (0%): R$ 0.00
// Frete: R$ 150.00
// Total: R$ 1050.00
// Pagamento: 1x de R$ 1050.00
