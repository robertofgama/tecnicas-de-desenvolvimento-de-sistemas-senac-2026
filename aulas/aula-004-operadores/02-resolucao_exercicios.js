// Resoluções dos exercícios — Operadores
// Rode com: node 02-resolucao_exercicios.js
//
// Cada exercício fica entre chaves { } pra que as variáveis de um
// não briguem com as do outro (const não pode ser declarada duas vezes
// no mesmo lugar). O que nasce dentro das chaves fica dentro das chaves.

// ---------------------------------------------------------------
// Exercício 1: A calculadora do pedido
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
{
  const preco = 180
  const quantidade = 10
  const frete = 150

  const subtotal = preco * quantidade       // 1800
  const desconto = subtotal * 0.1           // 180 → 10% = multiplicar por 0.1
  const total = subtotal - desconto + frete

  console.log("Subtotal:", subtotal)              // Subtotal: 1800
  console.log("Desconto:", desconto)              // Desconto: 180
  console.log("Total:", total.toFixed(2))         // Total: 1770.00
}

// ---------------------------------------------------------------
// Exercício 2: As caixas de discos
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
{
  const discos = 50   // troque pra 120: 10 caixas, sobram 0
  const porCaixa = 12

  const sobra = discos % porCaixa              // 2
  const caixas = (discos - sobra) / porCaixa   // 48 / 12 = 4 → tirando a sobra, a divisão fica exata

  console.log(`${caixas} caixas fechadas, sobram ${sobra} discos`)
  // 4 caixas fechadas, sobram 2 discos
}

// ---------------------------------------------------------------
// Exercício 3: Adivinhe antes de rodar
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
// Exercício 4: Dois iguais ou três iguais
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
// Exercício 5: A meta do mês
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
{
  const meta = 250000
  const vendido = 212500   // troque pra 250000: bateu vira true

  const percentual = vendido / meta * 100   // 85
  const falta = meta - vendido              // 37500
  const bateu = vendido >= meta             // >= porque vender exatamente a meta já é bater

  console.log(`Atingido: ${percentual.toFixed(1)}%`)   // Atingido: 85.0%
  console.log(`Falta: R$ ${falta}`)                    // Falta: R$ 37500
  console.log("Bateu a meta?", bateu)                  // Bateu a meta? false
}

// ---------------------------------------------------------------
// Exercício 6: Liberar a entrega?
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
{
  const estoque = 20
  const quantidadePedida = 8
  const pagamentoAprovado = false
  const creditoLiberado = true   // troque pra false: o resultado vira false

  // Os parênteses importam: && resolve antes de ||. Sem eles a regra mudaria.
  const podeSair = estoque >= quantidadePedida && (pagamentoAprovado || creditoLiberado)

  console.log("Pode sair?", podeSair)   // Pode sair? true → tem estoque e o crédito cobre
}

// ---------------------------------------------------------------
// Exercício 7 (Médio): O formulário que só entrega texto
// ---------------------------------------------------------------
console.log("\n--- Exercício 7 ---")
{
  const precoDigitado = "180"
  const quantidadeDigitada = "12"   // troque pra "doze" e pra "0": quantidadeValida vira false
  const freteDigitado = "150"

  // 1. O * converte os dois textos e dá 2160 (número).
  //    Aí o + encontra 2160 + "150": um lado é texto, então ele JUNTA.
  console.log(precoDigitado * quantidadeDigitada + freteDigitado)   // 2160150

  // 2. Convertendo tudo antes, o + volta a somar
  const preco = Number(precoDigitado)
  const quantidade = Number(quantidadeDigitada)
  const frete = Number(freteDigitado)
  const total = preco * quantidade + frete
  console.log(total)                                // 2310

  // 3. toFixed só no fim, na hora de mostrar
  console.log(`Total: R$ ${total.toFixed(2)}`)      // Total: R$ 2310.00

  // 4. Number("doze") dá NaN, e qualquer comparação com NaN dá false.
  //    Number("0") dá 0, que não é maior que 0. Uma regra pega os dois casos.
  const quantidadeValida = quantidade > 0
  console.log("Quantidade válida?", quantidadeValida)   // Quantidade válida? true
}

// ---------------------------------------------------------------
// Exercício 8 (Médio): Caça aos erros
// ---------------------------------------------------------------
console.log("\n--- Exercício 8 ---")
{
  const preco = 180
  const quantidade = "10"   // veio do formulário: é texto
  const brinde = 2
  const uf = "SC"

  // Erro 1: "10" + 2 juntava e dava "102". Converte antes de somar.
  const totalDeKits = Number(quantidade) + brinde
  // Aqui não precisava converter: o * converte sozinho. Mas não custa nada.
  const subtotal = preco * Number(quantidade)
  // Erro 2: o toFixed devolve texto, e o + juntava: "1800.00150".
  // Soma primeiro, formata depois.
  const comFrete = (subtotal + 150).toFixed(2)
  // Erro 3: uf = "RS" é atribuição. Dava SyntaxError: Invalid left-hand side in assignment
  const freteGratis = subtotal >= 5000 || uf === "RS"
  // Erro 4: cada lado do && precisa ser uma comparação completa.
  // Dava SyntaxError: Unexpected token '<='
  const pedidoMedio = totalDeKits >= 10 && totalDeKits <= 49

  console.log(`Kits: ${totalDeKits}`)                 // Kits: 12
  console.log(`Total com frete: R$ ${comFrete}`)      // Total com frete: R$ 1950.00
  console.log("Frete grátis?", freteGratis)           // Frete grátis? false
  console.log("Pedido médio?", pedidoMedio)           // Pedido médio? true
}

// ---------------------------------------------------------------
// Exercício 9 (Difícil): A expedição em caixas e paletes
// ---------------------------------------------------------------
console.log("\n--- Exercício 9 ---")
{
  // As regras em português:
  // - kits soltos = o que sobra dividindo os kits por 12
  // - caixas cheias = os kits que não sobraram, divididos por 12
  // - a mesma ideia pros paletes, só que com as caixas cheias e 8 por palete
  // - cabe se o peso for MENOR OU IGUAL ao limite
  const kits = 250   // teste também com 240 e 11
  const kitsPorCaixa = 12
  const caixasPorPalete = 8
  const pesoDoKit = 5
  const limiteDoCaminhao = 1200

  const kitsSoltos = kits % kitsPorCaixa
  const caixasCheias = (kits - kitsSoltos) / kitsPorCaixa

  // Os paletes saem das caixas CHEIAS: kit solto não vai pro palete
  const caixasSoltas = caixasCheias % caixasPorPalete
  const paletesCheios = (caixasCheias - caixasSoltas) / caixasPorPalete

  const peso = kits * pesoDoKit
  const cabe = peso <= limiteDoCaminhao   // <= : exatamente 1200 kg ainda cabe

  console.log(`${kits} kits: ${caixasCheias} caixas cheias e ${kitsSoltos} kits soltos`)
  console.log(`${caixasCheias} caixas: ${paletesCheios} paletes cheios e ${caixasSoltas} caixas soltas`)
  console.log(`Peso: ${peso} kg | Cabe no caminhão? ${cabe}`)
  // 250 kits: 20 caixas cheias e 10 kits soltos
  // 20 caixas: 2 paletes cheios e 4 caixas soltas
  // Peso: 1250 kg | Cabe no caminhão? false
  //
  // Com 240: 20 caixas e 0 kits; 2 paletes e 4 caixas; 1200 kg, true
  // Com 11:  0 caixas e 11 kits; 0 paletes e 0 caixas; 55 kg, true
}

// ---------------------------------------------------------------
// Exercício 10 (Difícil): A regra do crédito
// ---------------------------------------------------------------
console.log("\n--- Exercício 10 ---")
{
  // As regras em português:
  // liberado = tem estoque E (é à vista OU (cadastro ativo E sem atraso E dentro do limite))
  const preco = 180
  const frete = 150

  const quantidade = 10
  const estoque = 20
  const aVista = false
  const cadastroAtivo = true
  const diasEmAtraso = 0
  const limiteCredito = 5000

  const total = preco * quantidade + frete   // o frete entra no limite
  const temEstoque = quantidade <= estoque
  const semAtraso = diasEmAtraso === 0
  const dentroDoLimite = total <= limiteCredito

  const liberado = temEstoque && (aVista || (cadastroAtivo && semAtraso && dentroDoLimite))

  console.log(`Total: R$ ${total} | Liberado? ${liberado}`)   // Total: R$ 1950 | Liberado? true
  // Os outros pedidos da tabela, trocando os valores lá em cima:
  // 30 kits, estoque 20, à vista, ativo, 0 dias, limite 10000 → false (sem estoque)
  // 10 kits, estoque 20, a prazo, ativo, 3 dias, limite 5000  → false (atraso)
  // 10 kits, estoque 20, à vista, inativo, 15 dias, limite 0  → true  (à vista dispensa o crédito)
  // 50 kits, estoque 60, a prazo, ativo, 0 dias, limite 9000  → false (9150 com frete)
}
{
  // A armadilha: o segundo pedido, com e sem parênteses
  const preco = 180
  const frete = 150

  const quantidade = 30
  const estoque = 20
  const aVista = true
  const cadastroAtivo = true
  const diasEmAtraso = 0
  const limiteCredito = 10000

  const total = preco * quantidade + frete
  const temEstoque = quantidade <= estoque
  const semAtraso = diasEmAtraso === 0
  const dentroDoLimite = total <= limiteCredito

  const certo = temEstoque && (aVista || (cadastroAtivo && semAtraso && dentroDoLimite))
  // Sem parênteses, o JS lê (temEstoque && aVista) || (cadastroAtivo && semAtraso && dentroDoLimite):
  // o estoque só vale pro pagamento à vista, e o crédito libera sem estoque nenhum
  const errado = temEstoque && aVista || cadastroAtivo && semAtraso && dentroDoLimite

  console.log(`Total: R$ ${total} | Liberado? ${certo}`)   // Total: R$ 5550 | Liberado? false
  console.log(`Sem parênteses: ${errado}`)                 // Sem parênteses: true
}
