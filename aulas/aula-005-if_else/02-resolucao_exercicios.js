// Resoluções dos exercícios — if e else
// Rode com: node 02-resolucao_exercicios.js
//
// Cada exercício fica entre chaves { } pra que as variáveis de um
// não briguem com as do outro (const não pode ser declarada duas vezes
// no mesmo lugar). O que nasce dentro das chaves fica dentro das chaves.

// ---------------------------------------------------------------
// Exercício 1: Par ou ímpar
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
{
  const numero = 7   // troque pra 8 e rode de novo

  // % é o resto da divisão: par dividido por 2 não deixa resto
  if (numero % 2 === 0) {
    console.log(`${numero} é par`)
  } else {
    console.log(`${numero} é ímpar`)
  }
  // 7 é ímpar
}

// ---------------------------------------------------------------
// Exercício 2: Faixa de desconto
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
{
  const preco = 180
  const quantidade = 50   // teste com 5 → 900, 10 → 1620, 50 → 7200

  // Começa sem desconto e só muda se cair numa das faixas
  let desconto = 0

  // A ordem importa: testa a faixa maior primeiro. Se testasse >= 10 antes,
  // 50 unidades cairiam ali e nunca chegariam nos 20%.
  if (quantidade >= 50) {
    desconto = 0.2
  } else if (quantidade >= 10) {
    desconto = 0.1
  }

  const total = preco * quantidade * (1 - desconto)

  console.log(`${quantidade} un. x R$ ${preco} com ${desconto * 100}% de desconto = R$ ${total}`)
  // 50 un. x R$ 180 com 20% de desconto = R$ 7200
}

// ---------------------------------------------------------------
// Exercício 3: Validação da quantidade
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
{
  const estoque = 20
  const quantidade = 500   // teste com -3 → Quantidade inválida, 2 → Item adicionado

  if (quantidade <= 0) {
    console.log("Quantidade inválida")
  } else if (quantidade > estoque) {
    console.log(`Só temos ${estoque} em estoque`)
  } else {
    console.log("Item adicionado")
  }
  // Só temos 20 em estoque
}

// ---------------------------------------------------------------
// Exercício 4: Status do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")
{
  const status = "enviado"

  if (status === "rascunho") {
    console.log("Pedido ainda não enviado")
  } else if (status === "enviado") {
    console.log("Pedido recebido, aguardando faturamento")
  } else if (status === "faturado") {
    console.log("Nota fiscal emitida")
  } else if (status === "entregue") {
    console.log("Pedido concluído")
  } else {
    console.log(`Status desconhecido: ${status}`)
  }
  // Pedido recebido, aguardando faturamento
}

// ---------------------------------------------------------------
// Exercício 5: Frete grátis
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
{
  const total = 3200   // teste com 5000 também
  const uf = "SC"      // e com "RS"

  // Ternário: condição ? valorSeVerdadeiro : valorSeFalso
  const frete = total >= 5000 || uf === "RS" ? 0 : 150

  console.log(`Total: R$ ${total} + frete R$ ${frete} = R$ ${total + frete}`)
  // Total: R$ 3200 + frete R$ 150 = R$ 3350
}

// ---------------------------------------------------------------
// Exercício 6: A classificação do cliente
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
{
  const compradoNoAno = 200000   // teste com 750000, 49999.99 e -10

  // A validação vem primeiro: se ficasse por último, -10 cairia em "Sem categoria"
  if (compradoNoAno < 0) {
    console.log("Valor inválido")
  } else if (compradoNoAno >= 500000) {
    console.log("Ouro")
  } else if (compradoNoAno >= 200000) {
    console.log("Prata")
  } else if (compradoNoAno >= 50000) {
    console.log("Bronze")
  } else {
    console.log("Sem categoria")
  }
  // Prata → 200 mil já é Prata: por isso o >=
}

// ---------------------------------------------------------------
// Exercício 7 (Médio): A tabela de frete por região
// ---------------------------------------------------------------
console.log("\n--- Exercício 7 ---")
{
  const uf = "SC"      // teste RS 1000 → 0, PR 10000 → 0, SP 20000 → 150, BA 19999 → 300
  const total = 9999

  let frete

  // Do mais específico pro mais geral: primeiro o RS, depois a região
  // SC/PR já com a faixa grátis, depois o resto da região, e por fim os outros estados.
  if (uf === "RS") {
    frete = 0
  } else if ((uf === "SC" || uf === "PR") && total >= 10000) {
    frete = 0
  } else if (uf === "SC" || uf === "PR") {
    frete = 150
  } else if (total >= 20000) {
    frete = 150
  } else {
    frete = 300
  }

  console.log(`Frete pra ${uf} (R$ ${total}): R$ ${frete}`)
  // Frete pra SC (R$ 9999): R$ 150
}

// ---------------------------------------------------------------
// Exercício 8 (Médio): Caça aos erros
// ---------------------------------------------------------------
console.log("\n--- Exercício 8 ---")
{
  let status = "enviado"   // troque pra "rascunho" e quantidade pra 15
  const quantidade = 60

  // Erro 1: = atribuía "rascunho" ao status, e o texto é truthy: entrava sempre
  if (status === "rascunho") {
    console.log("Pedido ainda não enviado")
  }
  // Erro 2: a faixa maior vem primeiro. Antes, 60 parava no >= 10
  if (quantidade >= 50) {
    console.log("Desconto de 20%")
  } else if (quantidade >= 10) {
    console.log("Desconto de 10%")
  }
  // Erro 3: o ; depois do if fechava o if ali, e o bloco rodava sempre
  if (quantidade > 100) {
    console.log("Pedido acima do limite: precisa de aprovação")
  }
  // Erro 4: cada lado do && é uma comparação completa.
  // Era o que travava: SyntaxError: Unexpected token '<='
  if (quantidade >= 10 && quantidade <= 49) {
    console.log("Pedido médio")
  }
  // Desconto de 20%
}

// ---------------------------------------------------------------
// Exercício 9 (Difícil): A liberação do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 9 ---")
{
  // O pedido-armadilha: quantidade 0 e estoque 0
  const quantidade = 0
  const estoque = 0
  const total = 0
  const limiteCredito = 10000
  const pagamentoAprovado = false

  let mensagem

  // A ordem dos else if é a ordem das regras: a primeira que falha "fala"
  if (quantidade <= 0) {
    mensagem = "Quantidade inválida"
  } else if (quantidade > estoque) {
    mensagem = `Estoque insuficiente: só temos ${estoque}`
  } else if (total > limiteCredito && !pagamentoAprovado) {
    mensagem = "Aguardando pagamento"
  } else {
    mensagem = "Pedido liberado"
  }

  console.log(mensagem)
  // A decisão já foi tomada lá em cima: aqui só se reaproveita
  console.log(`Liberado? ${mensagem === "Pedido liberado" ? "sim" : "não"}`)
  // Quantidade inválida
  // Liberado? não
  //
  // Os outros pedidos da tabela, trocando os valores:
  // 30, 20, 5400, 10000, não  → Estoque insuficiente: só temos 20 | não
  // 2, 5, 90000, 50000, não   → Aguardando pagamento | não
  // 2, 5, 90000, 50000, sim   → Pedido liberado | sim
  // 10, 20, 1800, 10000, não  → Pedido liberado | sim
}

// ---------------------------------------------------------------
// Exercício 10 (Difícil): O preço final do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 10 ---")
{
  const preco = 180
  const cliente = "Agro Silva"
  const uf = "SC"
  const quantidade = 31
  const aVista = true

  // Texto vazio é falsy: !cliente é true quando não tem nome.
  // Já a quantidade não pode usar o mesmo truque: -3 é truthy e passaria.
  if (!cliente) {
    console.log("Cliente não informado")
  } else if (quantidade <= 0) {
    console.log("Quantidade inválida")
  } else {
    const subtotal = preco * quantidade

    let desconto = 0
    if (quantidade >= 50) {
      desconto = 0.2
    } else if (quantidade >= 10) {
      desconto = 0.1
    }
    const comDesconto = subtotal * (1 - desconto)

    // O desconto à vista vale sobre o valor que já teve o primeiro desconto
    const valorFinal = aVista ? comDesconto * 0.95 : comDesconto

    // O frete olha o valor com TODOS os descontos
    let frete = 150
    if (uf === "RS" || valorFinal >= 5000) {
      frete = 0
    }

    console.log(`${cliente} (${uf}): ${quantidade} kits`)
    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`)
    console.log(`Com desconto (${desconto * 100}%): R$ ${comDesconto.toFixed(2)}`)
    console.log(`Pagamento: ${aVista ? "à vista (-5%)" : "a prazo"}`)
    console.log(`Frete: R$ ${frete.toFixed(2)}`)
    console.log(`Total: R$ ${(valorFinal + frete).toFixed(2)}`)
  }
  // Agro Silva (SC): 31 kits
  // Subtotal: R$ 5580.00
  // Com desconto (10%): R$ 5022.00
  // Pagamento: à vista (-5%)
  // Frete: R$ 150.00
  // Total: R$ 4920.90
}
