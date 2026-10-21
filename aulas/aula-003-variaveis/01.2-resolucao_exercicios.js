// Resoluções dos exercícios da Aula 3 — Variáveis e constantes
// Rode com: node 01.2-resolucao_exercicios.js
//
// Cada exercício está entre chaves { } pra que as variáveis de um
// não briguem com as do outro (const não pode ser declarada duas vezes
// no mesmo lugar). Escopo é assunto de outra aula; por enquanto, só saiba
// que o que nasce dentro das chaves fica dentro das chaves.

// ---------------------------------------------------------------
// 1. Ficha do cliente
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
{
  const nome = "Agro Silva"
  const cidade = "Ibirubá"
  const ativo = true

  console.log(`${nome} (${cidade}) — ativo: ${ativo}`)
}

// ---------------------------------------------------------------
// 2. Status do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
{
  // let, porque o valor vai mudar. Com const a segunda atribuição daria TypeError.
  let status = "rascunho"
  console.log(status)

  status = "enviado"
  console.log(status)

  status = "faturado"
  console.log(status)
}

// ---------------------------------------------------------------
// 3. Caça aos erros
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
{
  let transportadora = "Rodoviário Sul"   // era const e mudava depois: vira let (ou some a troca)
  transportadora = "Expresso RS"
  let segundaVia = true                   // nome não pode começar com número
  let nomeCliente = "Agro Silva"          // nome não pode ter espaço: camelCase
  console.log(transportadora)             // era Transportadora, com T: outra variável, que não existe
  console.log(segundaVia, nomeCliente)
}

// ---------------------------------------------------------------
// 4. Troca-troca
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")
{
  let caixaA = "parafusos"
  let caixaB = "porcas"

  // Se fizer caixaA = caixaB direto, perde os parafusos. Então guarda antes.
  let temporaria = caixaA   // temporaria = parafusos
  caixaA = caixaB           // caixaA = porcas
  caixaB = temporaria       // caixaB = parafusos

  console.log("caixaA:", caixaA)   // porcas
  console.log("caixaB:", caixaB)   // parafusos
}

// ---------------------------------------------------------------
// 5. Antes e depois
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
{
  let vendedor
  console.log(typeof vendedor)   // undefined → declarada e vazia

  vendedor = "Ana"
  console.log(typeof vendedor)   // string → o tipo é do VALOR que está dentro, não da variável
}

// ---------------------------------------------------------------
// 6. Etiqueta de expedição
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
{
  const cliente = "Agro Silva"
  const cidade = "Ibirubá"
  const volumes = 3
  const pesoTotal = 42.5

  // Dentro da crase a quebra de linha vale de verdade, sem precisar de \n
  const etiqueta = `Para: ${cliente} — ${cidade}
Volumes: ${volumes}
Peso: ${pesoTotal} kg`

  console.log(etiqueta)
}
