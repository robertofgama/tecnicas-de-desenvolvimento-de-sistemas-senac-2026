// Resoluções dos exercícios — Laço de repetição for
// Rode com: node 02-resolucao_exercicios.js
//
// Cada exercício fica entre chaves { } pra que as variáveis de um
// não briguem com as do outro.

// ---------------------------------------------------------------
// Exercício 1: A contagem regressiva do lançamento
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
{
  // O contador começa no maior valor (10) e o -- desce de 1 em 1.
  // A condição >= 1 mantém o laço rodando até o 1, inclusive.
  for (let contador = 10; contador >= 1; contador--) {
    console.log(contador)
  }

  // Esta linha está FORA do laço, por isso aparece uma vez só, no fim
  console.log("Lançamento!")
  // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 (um por linha) e depois Lançamento!
}

// ---------------------------------------------------------------
// Exercício 2: A tabela de preços do balcão
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
{
  const preco = 180

  // É a mesma ideia da tabuada: o preço fica fixo e a quantidade sobe
  for (let quantidade = 1; quantidade <= 10; quantidade++) {
    const total = preco * quantidade
    console.log(`${quantidade} x R$ ${preco} = R$ ${total}`)
  }
  // 1 x R$ 180 = R$ 180
  // 2 x R$ 180 = R$ 360
  // ...
  // 10 x R$ 180 = R$ 1800
}

// ---------------------------------------------------------------
// Exercício 3: O fechamento do caixa
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
{
  const preco = 180
  const kitsVendidos = 7

  // O acumulador nasce FORA do laço, senão voltaria a zero a cada volta
  let faturamento = 0

  for (let venda = 1; venda <= kitsVendidos; venda++) {
    faturamento = faturamento + preco
    console.log(`Venda ${venda} - total parcial: R$ ${faturamento}`)
  }
  // Venda 1 - total parcial: R$ 180
  // ...
  // Venda 7 - total parcial: R$ 1260

  console.log(`Faturamento do dia: R$ ${faturamento}`)   // Faturamento do dia: R$ 1260

  // Somar 7 vezes o mesmo valor é exatamente o que a multiplicação faz
  console.log(`Conferência (7 * 180): R$ ${7 * 180}`)     // Conferência (7 * 180): R$ 1260
}

// ---------------------------------------------------------------
// Exercício 4: O sorteio da feira
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")
{
  let totalPares = 0

  for (let senha = 1; senha <= 30; senha++) {
    // Resto da divisão por 2 igual a zero: a senha é par
    if (senha % 2 === 0) {
      console.log(`Senha ${senha} concorre`)
      totalPares++   // conta mais uma senha par
    }
  }
  // Senha 2 concorre, Senha 4 concorre, ... Senha 30 concorre (um por linha)

  console.log(`Total de senhas que concorrem: ${totalPares}`)   // Total de senhas que concorrem: 15
}

// ---------------------------------------------------------------
// Exercício 5: O boleto parcelado
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
{
  function gerarParcelas(valorTotal, quantidadeParcelas) {
    // A divisão acontece UMA vez, antes do laço: o valor da parcela não muda
    const valorParcela = valorTotal / quantidadeParcelas

    for (let parcela = 1; parcela <= quantidadeParcelas; parcela++) {
      console.log(`Parcela ${parcela} de ${quantidadeParcelas}: R$ ${valorParcela}`)
    }
  }

  gerarParcelas(900, 3)
  // Parcela 1 de 3: R$ 300
  // Parcela 2 de 3: R$ 300
  // Parcela 3 de 3: R$ 300

  gerarParcelas(1200, 12)
  // 12 linhas, de "Parcela 1 de 12: R$ 100" até "Parcela 12 de 12: R$ 100"
}

// ---------------------------------------------------------------
// Exercício 6: O resumo do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
{
  const itens = ["Plantadeira", "Kit de discos de corte", "Pulverizador"]
  const precos = { plantadeira: 45000, kitDiscos: 180, pulverizador: 12000 }

  // 1. Lista → for...of: a cada volta, item recebe o próximo VALOR.
  // const pode: item nasce de novo a cada volta. Já o contador muda, então é let.
  let quantidadeDeItens = 0

  for (const item of itens) {
    console.log(`- ${item}`)
    quantidadeDeItens++
  }
  // - Plantadeira
  // - Kit de discos de corte
  // - Pulverizador

  console.log(`${quantidadeDeItens} itens no pedido`)   // 3 itens no pedido

  // 2. Objeto → for...in: a cada volta, produto recebe a CHAVE ("plantadeira").
  // O valor vem com colchetes; precos.produto procuraria uma chave chamada "produto".
  let somaDaTabela = 0

  for (const produto in precos) {
    console.log(`${produto}: R$ ${precos[produto]}`)
    somaDaTabela += precos[produto]
  }
  // plantadeira: R$ 45000
  // kitDiscos: R$ 180
  // pulverizador: R$ 12000

  console.log(`Soma da tabela: R$ ${somaDaTabela}`)   // Soma da tabela: R$ 57180
}

// ---------------------------------------------------------------
// Exercício 7 (Médio): A pirâmide de asteriscos
// ---------------------------------------------------------------
console.log("\n--- Exercício 7 ---")
{
  // 1. A pirâmide de 5 linhas, direto no código
  for (let linha = 1; linha <= 5; linha++) {
    // O texto nasce vazio a cada linha nova: aqui zerar é justamente o que a gente quer
    let asteriscos = ""

    // O laço de dentro vai de 1 até o número da linha atual:
    // na linha 1 roda 1 vez, na linha 2 roda 2 vezes, e assim por diante
    for (let coluna = 1; coluna <= linha; coluna++) {
      asteriscos = asteriscos + "*"
    }

    // Só imprime quando a linha inteira já está montada
    console.log(asteriscos)
  }
  // *
  // **
  // ***
  // ****
  // *****

  // 2. O mesmo código numa função: o 5 fixo virou o parâmetro altura
  function desenharPiramide(altura) {
    for (let linha = 1; linha <= altura; linha++) {
      let asteriscos = ""
      for (let coluna = 1; coluna <= linha; coluna++) {
        asteriscos = asteriscos + "*"
      }
      console.log(asteriscos)
    }
  }

  // 3. Invertida: o laço de fora DESCE, começando pela linha mais larga
  function desenharPiramideInvertida(altura) {
    for (let linha = altura; linha >= 1; linha--) {
      let asteriscos = ""
      for (let coluna = 1; coluna <= linha; coluna++) {
        asteriscos = asteriscos + "*"
      }
      console.log(asteriscos)
    }
  }

  console.log("Pirâmide de altura 3:")
  desenharPiramide(3)
  // *
  // **
  // ***

  console.log("Invertida de altura 3:")
  desenharPiramideInvertida(3)
  // ***
  // **
  // *

  // Caso de borda: com altura 0 a condição já começa false
  // (1 <= 0 e 0 >= 1), então nenhum laço dá nem uma volta
  console.log("Altura 0 (nada entre as duas linhas):")
  desenharPiramide(0)
  desenharPiramideInvertida(0)
  console.log("Fim da altura 0")
}

// ---------------------------------------------------------------
// Exercício 8 (Médio): A carga do caminhão
// ---------------------------------------------------------------
console.log("\n--- Exercício 8 ---")
{
  const pesoDoKit = 50
  const limite = 1000
  let pesoCarregado = 0
  let kitsCarregados = 0

  for (let kit = 1; kit <= 30; kit++) {
    // Primeiro a inspeção: kit reprovado nem chega perto da balança
    if (kit % 7 === 0) {
      console.log(`Kit ${kit} reprovado`)
      continue
    }

    // > e não >=: ficar com EXATAMENTE 1000 kg ainda é permitido.
    // Com >=, o kit 23 (950 + 50 = 1000) ficaria de fora.
    if (pesoCarregado + pesoDoKit > limite) {
      console.log(`Caminhão cheio no kit ${kit}`)
      break
    }

    pesoCarregado = pesoCarregado + pesoDoKit
    kitsCarregados++
    console.log(`Kit ${kit} carregado`)
  }
  // Kit 1 carregado ... Kit 6 carregado
  // Kit 7 reprovado
  // Kit 8 carregado ... Kit 13 carregado
  // Kit 14 reprovado
  // Kit 15 carregado ... Kit 20 carregado
  // Kit 21 reprovado
  // Kit 22 carregado
  // Kit 23 carregado
  // Caminhão cheio no kit 24
  // (o break encerrou o laço: os kits 25 a 30 nem foram olhados)

  console.log(`Carregados: ${kitsCarregados} kits (${pesoCarregado} kg)`)   // Carregados: 20 kits (1000 kg)
}

// ---------------------------------------------------------------
// Exercício 9 (Difícil): Levar mais pra pagar menos
// ---------------------------------------------------------------
console.log("\n--- Exercício 9 ---")
{
  function calcularDesconto(quantidade) {
    // Da faixa maior pra menor: cada return já encerra a função
    if (quantidade >= 50) {
      return 20
    }
    if (quantidade >= 10) {
      return 10
    }
    return 0
  }

  function calcularTotal(preco, quantidade) {
    const subtotal = preco * quantidade
    // Percentual inteiro (10, 20) dividido por 100 evita os números
    // quebrados que aparecem com 0.9 ou 0.8
    return subtotal - subtotal * calcularDesconto(quantidade) / 100
  }

  function proximaFaixa(quantidade) {
    if (quantidade < 10) {
      return 10
    }
    if (quantidade < 50) {
      return 50
    }
    return 0   // já está na última faixa: não existe próxima
  }

  function mostrarAvisos(preco, quantidadeMaxima) {
    for (let quantidade = 1; quantidade <= quantidadeMaxima; quantidade++) {
      const faixa = proximaFaixa(quantidade)

      // Sem próxima faixa não tem o que comparar: pula pra próxima volta.
      // Sem esse teste, de 50 em diante ele compararia com "0 kits por R$ 0".
      if (faixa === 0) {
        continue
      }

      const totalAtual = calcularTotal(preco, quantidade)
      const totalDaFaixa = calcularTotal(preco, faixa)

      // < e não <=: com 9 kits o total empata com o de 10 (R$ 1620),
      // e empate não é "mais barato"
      if (totalDaFaixa < totalAtual) {
        console.log(`${quantidade} kits: R$ ${totalAtual} (${faixa} kits saem por R$ ${totalDaFaixa})`)
      }
    }
  }

  console.log(calcularTotal(180, 9))    // 1620
  console.log(calcularTotal(180, 10))   // 1620  (empate com 9 kits)
  console.log(calcularTotal(180, 49))   // 7938
  console.log(calcularTotal(180, 50))   // 7200  (mais barato que 49 kits!)

  mostrarAvisos(180, 60)
  // 45 kits: R$ 7290 (50 kits saem por R$ 7200)
  // 46 kits: R$ 7452 (50 kits saem por R$ 7200)
  // 47 kits: R$ 7614 (50 kits saem por R$ 7200)
  // 48 kits: R$ 7776 (50 kits saem por R$ 7200)
  // 49 kits: R$ 7938 (50 kits saem por R$ 7200)
  // (com 44 kits o total é R$ 7128: ainda compensa ficar nos 44)
}

// ---------------------------------------------------------------
// Exercício 10 (Difícil): O financiamento da plantadeira
// ---------------------------------------------------------------
console.log("\n--- Exercício 10 ---")
{
  function calcularJuros(saldo, taxa) {
    return saldo * taxa / 100
  }

  function simularFinanciamento(valor, parcelas, taxa) {
    // Validação primeiro: o return sai antes de qualquer cálculo
    // (com 0 parcelas, a divisão logo abaixo daria Infinity)
    if (parcelas < 1 || parcelas > 10) {
      console.log(`Parcelamento inválido: ${parcelas}x`)
      return
    }

    // A amortização não muda: calcula uma vez, fora do laço
    const amortizacao = valor / parcelas
    let saldo = valor
    let totalPago = 0
    let totalJuros = 0

    console.log(`Financiamento: R$ ${valor} em ${parcelas}x (juros de ${taxa}% ao mês)`)

    for (let mes = 1; mes <= parcelas; mes++) {
      // A ordem importa: juros sobre o saldo ANTES de abater a amortização
      const juros = calcularJuros(saldo, taxa)
      const parcela = amortizacao + juros
      saldo = saldo - amortizacao

      totalPago = totalPago + parcela
      totalJuros = totalJuros + juros

      console.log(`Mês ${mes}: parcela R$ ${parcela} (juros R$ ${juros}) | saldo R$ ${saldo}`)
    }

    console.log(`Total pago: R$ ${totalPago} (R$ ${totalJuros} de juros)`)
  }

  console.log(calcularJuros(36000, 1))   // 360

  simularFinanciamento(45000, 5, 1)
  // Financiamento: R$ 45000 em 5x (juros de 1% ao mês)
  // Mês 1: parcela R$ 9450 (juros R$ 450) | saldo R$ 36000
  // Mês 2: parcela R$ 9360 (juros R$ 360) | saldo R$ 27000
  // Mês 3: parcela R$ 9270 (juros R$ 270) | saldo R$ 18000
  // Mês 4: parcela R$ 9180 (juros R$ 180) | saldo R$ 9000
  // Mês 5: parcela R$ 9090 (juros R$ 90) | saldo R$ 0
  // Total pago: R$ 46350 (R$ 1350 de juros)

  console.log()
  simularFinanciamento(90000, 4, 1)
  // Financiamento: R$ 90000 em 4x (juros de 1% ao mês)
  // Mês 1: parcela R$ 23400 (juros R$ 900) | saldo R$ 67500
  // Mês 2: parcela R$ 23175 (juros R$ 675) | saldo R$ 45000
  // Mês 3: parcela R$ 22950 (juros R$ 450) | saldo R$ 22500
  // Mês 4: parcela R$ 22725 (juros R$ 225) | saldo R$ 0
  // Total pago: R$ 92250 (R$ 2250 de juros)

  console.log()
  simularFinanciamento(45000, 12, 1)   // Parcelamento inválido: 12x
  simularFinanciamento(45000, 0, 1)    // Parcelamento inválido: 0x
}
