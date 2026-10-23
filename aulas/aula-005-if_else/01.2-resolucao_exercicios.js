// Resoluções dos exercícios da Aula 5 — if e else
// Rode com: node 01.2-resolucao_exercicios.js
//
// Cada exercício está entre chaves { } pra que as variáveis de um
// não briguem com as do outro (const não pode ser declarada duas vezes
// no mesmo lugar). Isso se chama escopo; aqui basta saber
// que o que nasce dentro das chaves fica dentro das chaves.

// ---------------------------------------------------------------
// 1. Par ou ímpar
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
{
  const numero = 7 // troque pra 8 e rode de novo

  // % é o resto da divisão: par dividido por 2 não deixa resto
  if (numero % 2 === 0) {
    console.log(`${numero} é par`)
  } else {
    console.log(`${numero} é ímpar`)
  }
}

// ---------------------------------------------------------------
// 2. Faixa de desconto
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
{
  const preco = 180
  const quantidade = 50 // teste com 5 → 900, 10 → 1620, 50 → 7200

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
}

// ---------------------------------------------------------------
// 3. Validação da quantidade
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
{
  const estoque = 20
  const quantidade = 500 // teste com -3, 500 e 2

  if (quantidade <= 0) {
    console.log("Quantidade inválida")
  } else if (quantidade > estoque) {
    console.log(`Só temos ${estoque} em estoque`)
  } else {
    console.log("Item adicionado")
  }
}

// ---------------------------------------------------------------
// 4. Status do pedido
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

  // Quando é "uma variável comparada com vários valores fixos" assim,
  // existe o switch, que faz a mesma coisa com menos repetição. Fica pra depois.
}

// ---------------------------------------------------------------
// 5. Frete grátis
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
{
  const total = 3200 // teste com 5000 também
  const uf = "RS"    // e com "SC"

  // Ternário: condição ? valorSeVerdadeiro : valorSeFalso
  const frete = (total >= 5000 || uf === "RS") ? 0 : 150

  console.log(`Total: R$ ${total} + frete R$ ${frete} = R$ ${total + frete}`)
}

// ---------------------------------------------------------------
// 6. Da nota pra menção
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
{
  const nota = 7 // teste com 9.5, 7, 4.9 e 11

  // A validação vem primeiro: se ficasse por último, 11 cairia no "A"
  if (nota < 0 || nota > 10) {
    console.log("Nota inválida")
  } else if (nota >= 9) {
    console.log("A")
  } else if (nota >= 7) {
    console.log("B")
  } else if (nota >= 5) {
    console.log("C")
  } else {
    console.log("D")
  }
}
