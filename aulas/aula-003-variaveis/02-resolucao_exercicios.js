// Resoluções dos exercícios — Variáveis e constantes
// Rode com: node 02-resolucao_exercicios.js
//
// Cada exercício fica entre chaves { } pra que as variáveis de um
// não briguem com as do outro (const não pode ser declarada duas vezes
// no mesmo lugar). O que nasce dentro das chaves fica dentro das chaves.

// ---------------------------------------------------------------
// Exercício 1: A ficha do cliente
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
{
  const nome = "Agro Silva"
  const cidade = "Ibirubá"
  const ativo = true

  console.log(`${nome} (${cidade}) — ativo: ${ativo}`)
  // Agro Silva (Ibirubá) — ativo: true
}

// ---------------------------------------------------------------
// Exercício 2: O status do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
{
  // let, porque o valor vai mudar. Com const a segunda atribuição daria TypeError.
  let status = "rascunho"
  console.log(status)   // rascunho

  status = "enviado"
  console.log(status)   // enviado

  status = "faturado"
  console.log(status)   // faturado
}

// ---------------------------------------------------------------
// Exercício 3: Caça aos erros
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
{
  let transportadora = "Rodoviário Sul"   // era const e mudava depois: vira let (ou some a troca)
  transportadora = "Expresso RS"
  const segundaVia = true                 // nome não pode começar com número
  const nomeCliente = "Agro Silva"        // nome não pode ter espaço: camelCase
  console.log(transportadora)             // era Transportadora, com T: outra variável, que não existe
  console.log(segundaVia, nomeCliente)
  // Expresso RS
  // true Agro Silva
}

// ---------------------------------------------------------------
// Exercício 4: O troca-troca
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")
{
  let caixaA = "parafusos"
  let caixaB = "porcas"

  // Se fizer caixaA = caixaB direto, perde os parafusos. Então guarda antes.
  const temporaria = caixaA   // temporaria = parafusos (não muda depois: const)
  caixaA = caixaB             // caixaA = porcas
  caixaB = temporaria         // caixaB = parafusos

  console.log("caixaA:", caixaA)   // caixaA: porcas
  console.log("caixaB:", caixaB)   // caixaB: parafusos
}

// ---------------------------------------------------------------
// Exercício 5: Antes e depois
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
{
  let vendedor
  console.log(typeof vendedor)   // undefined → declarada e vazia

  vendedor = "Ana"
  console.log(typeof vendedor)   // string → o tipo é do VALOR que está dentro, não da variável
}

// ---------------------------------------------------------------
// Exercício 6: A etiqueta de expedição
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
  // Para: Agro Silva — Ibirubá
  // Volumes: 3
  // Peso: 42.5 kg
}

// ---------------------------------------------------------------
// Exercício 7 (Médio): Nomes que ninguém entende
// ---------------------------------------------------------------
console.log("\n--- Exercício 7 ---")
{
  const cliente = "Agro Silva"
  const produto = "Plantadeira"
  const precoUnitario = 45000
  // A quantidade muda de 1 pra 2 no meio do código: é a única que fica let
  let quantidade = 1

  console.log(`Cliente: ${cliente} | ${quantidade}x ${produto} | R$ ${precoUnitario * quantidade}`)

  quantidade = 2
  console.log(`Cliente: ${cliente} | ${quantidade}x ${produto} | R$ ${precoUnitario * quantidade}`)
  // Cliente: Agro Silva | 1x Plantadeira | R$ 45000
  // Cliente: Agro Silva | 2x Plantadeira | R$ 90000
}

// ---------------------------------------------------------------
// Exercício 8 (Médio): Adivinhe antes de rodar
// ---------------------------------------------------------------
console.log("\n--- Exercício 8 ---")
{
  let status
  const cliente = "Agro Silva"
  console.log(status)                    // undefined → declarada sem valor
  status = "rascunho"
  console.log("status", status)          // status rascunho → com aspas é a palavra; sem aspas, o valor
  let statusAnterior = status
  status = "enviado"
  // statusAnterior recebeu uma CÓPIA de "rascunho": mudar status não mexe nela
  console.log(`${cliente}: ${statusAnterior} → ${status}`)   // Agro Silva: rascunho → enviado
  let codigo = 7
  console.log(typeof codigo)             // number
  codigo = `PED-${codigo}`
  console.log(codigo, typeof codigo)     // PED-7 string → a variável trocou de tipo (justamente o que não devia)
  console.log(`cliente`)                 // cliente → crase sem ${ } é só um texto
  console.log(`${cliente}`)              // Agro Silva
}

// ---------------------------------------------------------------
// Exercício 9 (Difícil): O painel do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 9 ---")
{
  // Não mudam: const
  const cliente = "Agro Silva"
  const cidade = "Ibirubá"
  const produto = "Kit de discos de corte"
  const preco = 180

  // Mudam no passo 3: let
  let quantidade = 10
  let frete = 150
  let status = "rascunho"

  // O painel também é let: ele precisa ser montado de novo depois das trocas
  let painel = `Pedido de ${cliente} (${cidade})
${quantidade}x ${produto} = R$ ${preco * quantidade}
Frete: R$ ${frete} | Total: R$ ${preco * quantidade + frete}
Status: ${status}`
  console.log(painel)

  quantidade = 15
  frete = 0
  status = "enviado"

  // Imprimir o painel de novo, sem remontar, mostraria o pedido antigo:
  // a template string virou um texto pronto na hora em que foi criada.
  painel = `Pedido de ${cliente} (${cidade})
${quantidade}x ${produto} = R$ ${preco * quantidade}
Frete: R$ ${frete} | Total: R$ ${preco * quantidade + frete}
Status: ${status}`
  console.log(painel)
  // Pedido de Agro Silva (Ibirubá)
  // 10x Kit de discos de corte = R$ 1800
  // Frete: R$ 150 | Total: R$ 1950
  // Status: rascunho
  // Pedido de Agro Silva (Ibirubá)
  // 15x Kit de discos de corte = R$ 2700
  // Frete: R$ 0 | Total: R$ 2700
  // Status: enviado
}

// ---------------------------------------------------------------
// Exercício 10 (Difícil): O rodízio dos caminhões
// ---------------------------------------------------------------
console.log("\n--- Exercício 10 ---")
{
  let caminhao1 = "plantadeiras"
  let caminhao2 = "discos de corte"
  let caminhao3 = "pulverizadores"
  let auxiliar

  // Em português: a carga do 3 é a única que ainda não tem pra onde ir
  // sem ser apagada, então ela vai pra auxiliar. Aí cada caminhão recebe
  // a carga do anterior, começando pelo fim (3 recebe do 2, 2 recebe do 1),
  // e o 1 recebe o que estava guardado.

  // Rodízio 1
  auxiliar = caminhao3
  caminhao3 = caminhao2
  caminhao2 = caminhao1
  caminhao1 = auxiliar
  console.log(`1: ${caminhao1} | 2: ${caminhao2} | 3: ${caminhao3}`)

  // Rodízio 2
  auxiliar = caminhao3
  caminhao3 = caminhao2
  caminhao2 = caminhao1
  caminhao1 = auxiliar
  console.log(`1: ${caminhao1} | 2: ${caminhao2} | 3: ${caminhao3}`)

  // Rodízio 3: tudo volta pro lugar do começo
  auxiliar = caminhao3
  caminhao3 = caminhao2
  caminhao2 = caminhao1
  caminhao1 = auxiliar
  console.log(`1: ${caminhao1} | 2: ${caminhao2} | 3: ${caminhao3}`)
  // 1: pulverizadores | 2: plantadeiras | 3: discos de corte
  // 1: discos de corte | 2: pulverizadores | 3: plantadeiras
  // 1: plantadeiras | 2: discos de corte | 3: pulverizadores
}
