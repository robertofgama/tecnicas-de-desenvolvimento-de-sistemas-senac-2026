// Resoluções dos exercícios da Aula 4 — Operadores
// Rode com: node 01.2-resolucao_exercicios.js
//
// Cada exercício está entre chaves { } pra que as variáveis de um
// não briguem com as do outro (const não pode ser declarada duas vezes
// no mesmo lugar). Escopo é assunto de outra aula; por enquanto, só saiba
// que o que nasce dentro das chaves fica dentro das chaves.

// ---------------------------------------------------------------
// 1. Calculadora de pedido
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
{
  const preco = 180
  const qtd = 10
  const frete = 150

  const subtotal = preco * qtd       // 1800
  const desconto = subtotal * 0.1    // 180 → 10% = multiplicar por 0.1
  const total = subtotal - desconto + frete

  console.log("Subtotal:", subtotal)
  console.log("Desconto:", desconto)
  console.log("Total:", total.toFixed(2))   // "1770.00"
}

// ---------------------------------------------------------------
// 2. Caixas de discos
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
{
  const discos = 50
  const porCaixa = 12

  const sobra = discos % porCaixa              // 2
  const caixas = (discos - sobra) / porCaixa   // 48 / 12 = 4

  console.log(`${caixas} caixas fechadas, sobram ${sobra} discos`)

  // Alternativa: Math.floor arredonda pra baixo, então 50 / 12 = 4.1666... vira 4
  console.log(Math.floor(discos / porCaixa), "caixas")
}

// ---------------------------------------------------------------
// 3. Adivinhe antes de rodar
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
{
  console.log("10" + 1)       // "101" → + com texto junta
  console.log("10" - 1)       // 9     → - só faz conta, converte o texto
  console.log(10 + 1 + "1")   // "111" → da esquerda pra direita: 10 + 1 = 11, depois 11 + "1" junta
  console.log("3" * "4")      // 12    → * só faz conta, converte os dois
  console.log(7 % 3)          // 1     → 7 = 2 x 3, sobra 1
  console.log(2 ** 10)        // 1024
  console.log(10 / 4)         // 2.5   → a divisão não é inteira
}

// ---------------------------------------------------------------
// 4. Dois iguais ou três iguais
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")
{
  console.log(180 == "180")        // true  → == converte o texto antes
  console.log(180 === "180")       // false → tipos diferentes
  console.log(0 == false)          // true  → == converte false pra 0
  console.log(0 === false)         // false
  console.log("" == 0)             // true  → texto vazio vira 0... pois é
  console.log(null == undefined)   // true  → o == acha os dois "a mesma coisa"
  console.log(null === undefined)  // false → são tipos diferentes

  // Daqui pra frente: === e !==, sempre. O == tem regras demais pra decorar.
}

// ---------------------------------------------------------------
// 5. Meta do mês
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
{
  const meta = 250000
  const vendido = 212500

  const percentual = vendido / meta * 100   // 85
  const falta = meta - vendido              // 37500
  const bateu = vendido >= meta             // false

  console.log(`Atingido: ${percentual.toFixed(1)}%`)
  console.log(`Falta: R$ ${falta}`)
  console.log("Bateu a meta?", bateu)
}

// ---------------------------------------------------------------
// 6. Liberar entrega?
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
{
  const estoque = 20
  const qtdPedida = 8
  const pagamentoAprovado = false
  const creditoLiberado = true

  // Os parênteses importam: && resolve antes de ||. Sem eles a regra mudaria.
  const podeSair = estoque >= qtdPedida && (pagamentoAprovado || creditoLiberado)

  console.log("Pode sair?", podeSair)   // true → tem estoque e o crédito cobre
}
