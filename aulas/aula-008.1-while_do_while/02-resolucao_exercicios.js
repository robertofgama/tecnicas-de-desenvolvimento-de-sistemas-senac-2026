// Resoluções dos exercícios — Laços while e do...while
// Rode com: node 02-resolucao_exercicios.js
//
// Cada exercício fica entre chaves { } pra que as variáveis de um
// não briguem com as do outro.

// ---------------------------------------------------------------
// Exercício 1: A contagem regressiva do lançamento
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
{
  let contador = 10           // 1. inicialização: ANTES do laço

  while (contador >= 1) {     // 2. condição: nos parênteses
    console.log(contador)
    contador--                // 3. "incremento" (aqui, decremento): DENTRO do bloco
  }

  // FORA do laço: aparece uma vez só, depois que a condição virou false
  console.log("Lançamento!")
  // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 (um por linha) e depois Lançamento!
}

// ---------------------------------------------------------------
// Exercício 2: O crédito na loja
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
{
  let credito = 2000
  const precoKit = 180
  let kits = 0

  // A condição é "o crédito paga o PRÓXIMO kit?", e não um número de voltas.
  // Com credito > 0, o laço compraria o 12º kit com só R$ 20 e o crédito ficaria negativo.
  while (credito >= precoKit) {
    credito = credito - precoKit
    kits++
    console.log(`Kit ${kits} comprado - crédito restante: R$ ${credito}`)
  }
  // Kit 1 comprado - crédito restante: R$ 1820
  // ...
  // Kit 11 comprado - crédito restante: R$ 20

  console.log(`Kits comprados: ${kits}`)    // Kits comprados: 11
  console.log(`Sobrou: R$ ${credito}`)      // Sobrou: R$ 20
}

// ---------------------------------------------------------------
// Exercício 3: A meta do vendedor
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
{
  const meta = 10000
  const valorPorVenda = 750
  let totalVendido = 0   // acumulador: nasce FORA do laço
  let vendas = 0

  while (totalVendido < meta) {
    totalVendido = totalVendido + valorPorVenda
    vendas++
    console.log(`Venda ${vendas} - acumulado: R$ ${totalVendido}`)
  }
  // Venda 1 - acumulado: R$ 750
  // ...
  // Venda 14 - acumulado: R$ 10500

  console.log(`Vendas necessárias: ${vendas}`)          // Vendas necessárias: 14
  console.log(`Total alcançado: R$ ${totalVendido}`)    // Total alcançado: R$ 10500

  // A última venda faz o total PASSAR da meta: com 13 vendas eram R$ 9750,
  // ainda abaixo de 10000, então o laço deu mais uma volta.
  //
  // Com meta = 10500 continuam sendo 14 vendas: 14 x 750 dá exatamente 10500.
  // Depois da 14ª venda, 10500 < 10500 é false e o laço para ali mesmo.
}

// ---------------------------------------------------------------
// Exercício 4: Adivinhe antes de rodar
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")
{
  let a = 5
  while (a < 3) { console.log("A"); a++ }
  // 0 vezes: 5 < 3 já é false no primeiro teste, e o while testa ANTES

  let b = 5
  do { console.log("B"); b++ } while (b < 3)
  // 1 vez: o do...while roda o bloco primeiro e só depois descobre que 6 < 3 é false

  let c = 1
  while (c <= 4) { console.log("C"); c = c + 2 }
  // 2 vezes: c vale 1 e depois 3; quando vira 5, a condição falha

  let d = 10
  do { console.log("D"); d = d - 3 } while (d > 0)
  // 4 vezes: d vale 10, 7, 4 e 1 quando o bloco roda; quando vira -2, para
}

// ---------------------------------------------------------------
// Exercício 5: As vendas que dobram
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
{
  function calcularAnos(vendasIniciais, alvo) {
    let vendas = vendasIniciais
    let anos = 0

    while (vendas < alvo) {
      vendas = vendas * 2
      anos++
    }

    // O return fica DEPOIS do laço: só devolve quando todas as voltas terminaram
    return anos
  }

  console.log(calcularAnos(3, 50))     // 5  (3 -> 6 -> 12 -> 24 -> 48 -> 96)
  console.log(calcularAnos(10, 80))    // 3  (10 -> 20 -> 40 -> 80)
  console.log(calcularAnos(100, 50))   // 0  (100 < 50 é false: o laço nem roda)
}

// ---------------------------------------------------------------
// Exercício 6: Caça aos erros
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
{
  // Os 4 erros do código original:
  // 1. const pedido = 0 → o pedido muda a cada volta, então é let
  //    (com const: TypeError: Assignment to constant variable.)
  // 2. while (pedido = 6) → o = GUARDA 6 em vez de comparar; o certo é pedido < 6
  // 3. let faturados = 0 dentro do bloco → zera a cada volta e não existe
  //    depois do } (ReferenceError: faturados is not defined). Vai pra antes do while.
  // 4. continue antes do pedido++ → o pedido ficaria 4 pra sempre (laço infinito).
  //    O incremento sobe pro topo do bloco, antes do continue.
  let pedido = 0
  let faturados = 0

  while (pedido < 6) {
    pedido++
    if (pedido === 4) {
      continue
    }
    console.log(`Pedido ${pedido}`)
    faturados++
  }
  console.log(`Faturados: ${faturados}`)
  // Pedido 1, Pedido 2, Pedido 3, Pedido 5, Pedido 6 (um por linha)
  // Faturados: 5
}

// ---------------------------------------------------------------
// Exercício 7 (Médio): A senha do sistema
// ---------------------------------------------------------------
console.log("\n--- Exercício 7 ---")
{
  function entrarNoSistema(digitadas) {
    const senhaCorreta = "agro2026"
    const maximoTentativas = 3
    let liberado = false   // sentinela: começa desligada
    let posicao = 0

    // do...while: a senha é pedida pelo menos uma vez
    do {
      const senha = digitadas[posicao]
      posicao++   // posicao também conta as tentativas já feitas

      if (senha === senhaCorreta) {
        liberado = true
        console.log(`Tentativa ${posicao}: acesso liberado`)
      } else {
        console.log(`Tentativa ${posicao}: senha incorreta`)
      }
    } while (liberado === false && posicao < maximoTentativas)

    // Decide olhando a SENTINELA. Se olhasse "posicao === 3", quem acerta
    // na 3ª tentativa seria bloqueado por engano.
    if (liberado === false) {
      console.log("Usuário bloqueado")
    }
  }

  entrarNoSistema(["1234", "agro2026"])
  // Tentativa 1: senha incorreta
  // Tentativa 2: acesso liberado

  console.log()
  entrarNoSistema(["a", "b", "agro2026"])
  // Tentativa 1: senha incorreta
  // Tentativa 2: senha incorreta
  // Tentativa 3: acesso liberado

  console.log()
  entrarNoSistema(["a", "b", "c", "agro2026"])
  // Tentativa 1: senha incorreta
  // Tentativa 2: senha incorreta
  // Tentativa 3: senha incorreta
  // Usuário bloqueado
  // (a 4ª senha nunca é lida: posicao < 3 falhou antes)
}

// ---------------------------------------------------------------
// Exercício 8 (Médio): O estoque de segurança
// ---------------------------------------------------------------
console.log("\n--- Exercício 8 ---")
{
  const pedidos = [6, 10, 0, 12, 8, 15, 5]
  let estoque = 40
  let posicao = 0
  let pedidosAtendidos = 0
  let kitsAtendidos = 0

  while (posicao < pedidos.length) {
    const quantidade = pedidos[posicao]
    const numeroDoPedido = posicao + 1
    // Avança ANTES de qualquer continue: senão o pedido 3 se repetiria pra sempre
    posicao++

    if (quantidade === 0) {
      console.log(`Pedido ${numeroDoPedido} inválido`)
      continue
    }

    if (quantidade > estoque) {
      console.log(`Estoque insuficiente no pedido ${numeroDoPedido} (${quantidade} kits)`)
      break
    }

    estoque = estoque - quantidade
    pedidosAtendidos++
    kitsAtendidos = kitsAtendidos + quantidade
    console.log(`Pedido ${numeroDoPedido} atendido: ${quantidade} kits`)
  }
  // Pedido 1 atendido: 6 kits
  // Pedido 2 atendido: 10 kits
  // Pedido 3 inválido
  // Pedido 4 atendido: 12 kits
  // Pedido 5 atendido: 8 kits
  // Estoque insuficiente no pedido 6 (15 kits)
  // (o break encerrou o laço: o pedido 7 nem foi olhado)

  console.log(`Atendidos: ${pedidosAtendidos} pedidos (${kitsAtendidos} kits) | estoque final: ${estoque}`)
  // Atendidos: 4 pedidos (36 kits) | estoque final: 4
}

// ---------------------------------------------------------------
// Exercício 9 (Difícil): A quitação da dívida
// ---------------------------------------------------------------
console.log("\n--- Exercício 9 ---")
{
  function calcularJuros(saldo, taxa) {
    return saldo * taxa / 100
  }

  function simularQuitacao(valor, pagamentoAnual, taxa) {
    // Validação ANTES do laço: se o pagamento não cobre nem os juros,
    // o saldo nunca diminui e o while nunca termina.
    // <= e não <: pagando exatamente os juros, o saldo fica parado pra sempre.
    const jurosDoPrimeiroAno = calcularJuros(valor, taxa)
    if (pagamentoAnual <= jurosDoPrimeiroAno) {
      console.log(`Pagamento de R$ ${pagamentoAnual} não cobre os juros de R$ ${jurosDoPrimeiroAno}`)
      return
    }

    let saldo = valor
    let ano = 0
    let totalPago = 0
    let totalJuros = 0

    while (saldo > 0) {
      ano++

      // 1. Juros sobre o saldo, somados a ele
      const juros = calcularJuros(saldo, taxa)
      saldo = saldo + juros

      // 2. Paga o valor combinado ou só o que falta, o que for menor
      let pagamento = pagamentoAnual
      if (saldo < pagamentoAnual) {
        pagamento = saldo
      }

      // 3. Abate o pagamento
      saldo = saldo - pagamento
      totalPago = totalPago + pagamento
      totalJuros = totalJuros + juros

      console.log(`Ano ${ano}: juros R$ ${juros} | pagou R$ ${pagamento} | saldo R$ ${saldo}`)
    }

    console.log(`Quitado em ${ano} anos: total pago R$ ${totalPago} (R$ ${totalJuros} de juros)`)
  }

  console.log(calcularJuros(45000, 10))   // 4500

  simularQuitacao(45000, 20000, 10)
  // Ano 1: juros R$ 4500 | pagou R$ 20000 | saldo R$ 29500
  // Ano 2: juros R$ 2950 | pagou R$ 20000 | saldo R$ 12450
  // Ano 3: juros R$ 1245 | pagou R$ 13695 | saldo R$ 0
  // Quitado em 3 anos: total pago R$ 53695 (R$ 8695 de juros)

  console.log()
  simularQuitacao(100000, 30000, 10)
  // Ano 1: juros R$ 10000 | pagou R$ 30000 | saldo R$ 80000
  // Ano 2: juros R$ 8000 | pagou R$ 30000 | saldo R$ 58000
  // Ano 3: juros R$ 5800 | pagou R$ 30000 | saldo R$ 33800
  // Ano 4: juros R$ 3380 | pagou R$ 30000 | saldo R$ 7180
  // Ano 5: juros R$ 718 | pagou R$ 7898 | saldo R$ 0
  // Quitado em 5 anos: total pago R$ 127898 (R$ 27898 de juros)

  console.log()
  simularQuitacao(45000, 4000, 10)
  // Pagamento de R$ 4000 não cobre os juros de R$ 4500
}

// ---------------------------------------------------------------
// Exercício 10 (Difícil): O balcão de vendas
// ---------------------------------------------------------------
console.log("\n--- Exercício 10 ---")
{
  function precoDaOpcao(opcao) {
    if (opcao === 1) {
      return 45000   // plantadeira
    }
    if (opcao === 2) {
      return 180     // kit de discos de corte
    }
    return 0
  }

  function calcularTotal(subtotal) {
    let desconto = 0
    if (subtotal >= 50000) {
      desconto = subtotal * 10 / 100
    }

    let frete = 0
    if (subtotal < 1000) {
      frete = 250
    }

    return subtotal - desconto + frete
  }

  function atenderBalcao(escolhas) {
    let subtotal = 0
    let posicao = 0
    let opcao

    // do...while: o menu aparece pelo menos uma vez
    do {
      console.log("1. Plantadeira | 2. Kit de discos | 0. Fechar pedido")
      opcao = escolhas[posicao]
      posicao++

      // precoDaOpcao já sabe quais opções são produtos: preço 0 é "não é produto"
      const preco = precoDaOpcao(opcao)
      if (preco > 0) {
        subtotal = subtotal + preco
      } else if (opcao !== 0) {
        console.log(`Opção inválida: ${opcao}`)
      }
      // As duas condições: sem a segunda, quando as escolhas acabam,
      // opcao vira undefined (diferente de 0) e o menu roda pra sempre
    } while (opcao !== 0 && posicao < escolhas.length)

    if (subtotal === 0) {
      console.log("Pedido vazio: nada a cobrar")
    } else {
      console.log(`Total: R$ ${calcularTotal(subtotal)}`)
    }
  }

  atenderBalcao([2, 2, 0])
  // (menu 3 vezes)
  // Total: R$ 610

  console.log()
  atenderBalcao([1, 2, 7, 2, 0])
  // (menu 5 vezes) e Opção inválida: 7 depois do 3º menu
  // Total: R$ 45360  (abaixo de 50000: sem desconto; acima de 1000: frete grátis)

  console.log()
  atenderBalcao([1, 1, 0])
  // (menu 3 vezes)
  // Total: R$ 81000  (90000 - 10% de desconto)

  console.log()
  atenderBalcao([0])
  // 1. Plantadeira | 2. Kit de discos | 0. Fechar pedido
  // Pedido vazio: nada a cobrar

  console.log()
  atenderBalcao([2, 2])
  // (menu 2 vezes: as escolhas acabaram e o laço parou sozinho)
  // Total: R$ 610
}
