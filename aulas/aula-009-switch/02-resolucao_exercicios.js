// Resoluções dos exercícios — switch
// Rode com: node 02-resolucao_exercicios.js
//
// Cada exercício fica entre chaves { } pra que as variáveis de um
// não briguem com as do outro. Nos exercícios que pedem vários testes
// com uma variável, o switch fica numa função pra não repetir o código.

// ---------------------------------------------------------------
// Exercício 1: O dia da entrega
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
{
  const diaEntrega = 3

  switch (diaEntrega) {
    case 1:
      console.log("Domingo")
      break
    case 2:
      console.log("Segunda-feira")
      break
    case 3:
      console.log("Terça-feira")
      break
    case 4:
      console.log("Quarta-feira")
      break
    case 5:
      console.log("Quinta-feira")
      break
    case 6:
      console.log("Sexta-feira")
      break
    case 7:
      console.log("Sábado")
      break
    default:
      // Pega o 0, o 8, o -1... qualquer número fora de 1 a 7
      console.log("Dia inválido")
  }
  // Terça-feira
  // Com 7: Sábado. Com 0: Dia inválido.
}

// ---------------------------------------------------------------
// Exercício 2: O perfil de acesso
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
{
  // Numa função, dá pra testar vários perfis sem copiar o switch
  function mostrarAcesso(perfil) {
    switch (perfil) {
      case "admin":
        console.log("Acesso total liberado")
        break
      case "gerente":
        console.log("Acesso a relatórios liberado")
        break
      case "vendedor":
        console.log("Acesso a pedidos liberado")
        break
      default:
        console.log(`Perfil não reconhecido: ${perfil}`)
    }
  }

  mostrarAcesso("gerente")      // Acesso a relatórios liberado
  mostrarAcesso("admin")        // Acesso total liberado
  mostrarAcesso("estagiario")   // Perfil não reconhecido: estagiario

  // "Gerente" com G maiúsculo cai no default: a comparação é estrita (===)
  // e "G" e "g" são letras diferentes
  mostrarAcesso("Gerente")      // Perfil não reconhecido: Gerente
}

// ---------------------------------------------------------------
// Exercício 3: Os atalhos do balcão
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
{
  function executarAtalho(tecla) {
    // Cada "tecla === ..." do if virou um case; o else virou o default
    switch (tecla) {
      case "F1":
        console.log("Abrindo a ajuda")
        break
      case "F2":
        console.log("Novo pedido")
        break
      case "F5":
        console.log("Recarregando a lista de pedidos")
        break
      default:
        console.log("Nenhum atalho configurado")
    }
  }

  executarAtalho("F2")   // Novo pedido
  executarAtalho("F5")   // Recarregando a lista de pedidos
  executarAtalho("F9")   // Nenhum atalho configurado
}

// ---------------------------------------------------------------
// Exercício 4: Adivinhe antes de rodar
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")
{
  const codigo = 5
  switch (codigo) {
    case "5": console.log("texto"); break
    case 5: console.log("número"); break
    default: console.log("nenhum")
  }
  // número
  // codigo é o NÚMERO 5. O switch compara com ===, então "5" (texto) não bate.

  const nivel = 2
  switch (nivel) {
    case 1: console.log("bronze")
    case 2: console.log("prata")
    case 3: console.log("ouro")
  }
  // prata
  // ouro
  // Sem break: entra no case 2 e cai no 3 (fall-through). O 1 fica de fora
  // porque a execução COMEÇA no caso que bateu, nunca antes dele.

  const uf = "MS"
  switch (uf) {
    case "RS": case "SC": console.log("Sul"); break
    default: console.log("Outra região")
  }
  // Outra região
  // MS não é RS nem SC. (MS é do Centro-Oeste, então o resultado está certo.)
}

// ---------------------------------------------------------------
// Exercício 5: O frete por estado
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
{
  function mostrarFrete(estado) {
    // Casos empilhados: cada valor de frete aparece uma vez só
    switch (estado) {
      case "RS":
        console.log(`Frete pra ${estado}: R$ 150`)
        break
      case "SC":
      case "PR":
        console.log(`Frete pra ${estado}: R$ 300`)
        break
      case "SP":
      case "MG":
      case "RJ":
        console.log(`Frete pra ${estado}: R$ 500`)
        break
      default:
        console.log(`Não entregamos em ${estado}`)
    }
  }

  mostrarFrete("RS")   // Frete pra RS: R$ 150
  mostrarFrete("PR")   // Frete pra PR: R$ 300
  mostrarFrete("MG")   // Frete pra MG: R$ 500
  mostrarFrete("AM")   // Não entregamos em AM
}

// ---------------------------------------------------------------
// Exercício 6: Caça aos erros
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
{
  // Os 4 erros do código original:
  // 1. case "PIX" → a forma vem em minúsculas: "pix". Maiúscula é outra letra.
  // 2. Faltava o break depois do "Desconto: 5%": o pix caía no caso de baixo
  //    e imprimia também "Sem desconto".
  // 3. case "boleto" || "dinheiro" → o || vira "boleto" antes da comparação,
  //    então "dinheiro" caía no default. O certo é empilhar dois case.
  // 4. case "1" e case "2" → opcaoMenu é NÚMERO; com ===, "2" não bate com 2.
  function mostrarDesconto(forma) {
    switch (forma) {
      case "pix":
        console.log("Desconto: 5%")
        break
      case "boleto":
      case "dinheiro":
        console.log("Sem desconto")
        break
      default:
        console.log("Forma de pagamento inválida")
    }
  }

  mostrarDesconto("pix")        // Desconto: 5%
  mostrarDesconto("boleto")     // Sem desconto
  mostrarDesconto("dinheiro")   // Sem desconto
  mostrarDesconto("cheque")     // Forma de pagamento inválida

  const opcaoMenu = 2
  switch (opcaoMenu) {
    case 1: console.log("Novo pedido"); break
    case 2: console.log("Listar pedidos"); break
  }
  // Listar pedidos
}

// ---------------------------------------------------------------
// Exercício 7 (Médio): A forma de pagamento
// ---------------------------------------------------------------
console.log("\n--- Exercício 7 ---")
{
  function calcularTotal(valor, forma, parcelas) {
    // Com return em cada caminho, nenhum break é necessário
    switch (forma) {
      case "pix":
        return valor - valor * 5 / 100
      case "boleto":
      case "dinheiro":
        return valor
      case "cartao":
        // <= 3 e não < 3: com EXATAMENTE 3 parcelas ainda não tem juros
        if (parcelas <= 3) {
          return valor
        }
        return valor + valor * 10 / 100
      default:
        console.log(`Forma de pagamento inválida: ${forma}`)
        return 0
    }
  }

  console.log(calcularTotal(45000, "pix", 1))      // 42750
  console.log(calcularTotal(45000, "boleto", 1))   // 45000
  console.log(calcularTotal(45000, "cartao", 3))   // 45000
  console.log(calcularTotal(45000, "cartao", 4))   // 49500
  console.log(calcularTotal(180, "cheque", 1))
  // Forma de pagamento inválida: cheque
  // 0
}

// ---------------------------------------------------------------
// Exercício 8 (Médio): Os comandos do sistema
// ---------------------------------------------------------------
console.log("\n--- Exercício 8 ---")
{
  function executarComando(comando, perfil) {
    switch (comando) {
      case "listar":
      case "consultar":
        console.log(`Comando liberado: ${comando}`)
        break
      case "cancelar":
        // Cada lado do || é uma comparação completa
        if (perfil === "gerente" || perfil === "admin") {
          console.log("Pedido cancelado")
        } else {
          console.log("Acesso negado: só gerente ou admin cancela")
        }
        break
      case "apagar":
        if (perfil === "admin") {
          console.log("Pedido apagado")
        } else {
          console.log("Acesso negado: só admin apaga")
        }
        break
      default:
        console.log(`Comando inexistente: ${comando}`)
    }
  }

  executarComando("consultar", "vendedor")   // Comando liberado: consultar
  executarComando("cancelar", "gerente")     // Pedido cancelado
  executarComando("cancelar", "vendedor")    // Acesso negado: só gerente ou admin cancela
  executarComando("apagar", "gerente")       // Acesso negado: só admin apaga
  executarComando("apagar", "admin")         // Pedido apagado
  executarComando("formatar", "admin")       // Comando inexistente: formatar
}

// ---------------------------------------------------------------
// Exercício 9 (Difícil): O andamento do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 9 ---")
{
  function proximoStatus(status) {
    // Um return por caso: sem ele, "aberto" cairia no case de baixo
    switch (status) {
      case "aberto":
        return "pago"
      case "pago":
        return "separado"
      case "separado":
        return "enviado"
      case "enviado":
        return "entregue"
      // Status finais: devolvem eles mesmos. Sem este caso, um pedido
      // cancelado poderia "ressuscitar" e voltar a andar.
      case "entregue":
      case "cancelado":
        return status
      default:
        return "inválido"
    }
  }

  function podeCancelar(status) {
    switch (status) {
      case "aberto":
      case "pago":
      case "separado":
        return true
      default:
        return false
    }
  }

  function simularPedido(eventos) {
    let status = "aberto"

    for (const evento of eventos) {
      switch (evento) {
        case "avancar":
          status = proximoStatus(status)
          break
        case "cancelar":
          if (podeCancelar(status)) {
            status = "cancelado"
          } else {
            console.log(`Não dá pra cancelar: pedido ${status}`)
          }
          break
        default:
          console.log(`Evento desconhecido: ${evento}`)
      }
      console.log(`${evento} → ${status}`)
    }

    console.log(`Status final: ${status}`)
  }

  simularPedido(["avancar", "avancar", "avancar", "avancar"])
  // avancar → pago
  // avancar → separado
  // avancar → enviado
  // avancar → entregue
  // Status final: entregue

  console.log()
  simularPedido(["avancar", "cancelar", "avancar"])
  // avancar → pago
  // cancelar → cancelado
  // avancar → cancelado
  // Status final: cancelado

  console.log()
  simularPedido(["avancar", "avancar", "avancar", "cancelar"])
  // avancar → pago
  // avancar → separado
  // avancar → enviado
  // Não dá pra cancelar: pedido enviado
  // cancelar → enviado
  // Status final: enviado

  console.log()
  simularPedido(["avancar", "pausar"])
  // avancar → pago
  // Evento desconhecido: pausar
  // pausar → pago
  // Status final: pago
}

// ---------------------------------------------------------------
// Exercício 10 (Difícil): O fechamento do pedido
// ---------------------------------------------------------------
console.log("\n--- Exercício 10 ---")
{
  // Cada função devolve um valor "impossível" pra avisar que não achou:
  // preço 0, frete -1 e desconto -1. Frete 0 não serve: pareceria frete grátis.
  function precoDoProduto(produto) {
    switch (produto) {
      case "plantadeira":
        return 45000
      case "pulverizador":
        return 12000
      case "kit de discos":
        return 180
      default:
        return 0
    }
  }

  function calcularFrete(estado) {
    switch (estado) {
      case "RS":
        return 150
      case "SC":
      case "PR":
        return 300
      case "SP":
      case "MG":
      case "RJ":
        return 500
      default:
        return -1
    }
  }

  function percentualDesconto(forma) {
    switch (forma) {
      case "pix":
        return 5
      case "boleto":
        return 0
      default:
        return -1
    }
  }

  function fecharPedido(produto, quantidade, estado, forma) {
    const preco = precoDoProduto(produto)
    const frete = calcularFrete(estado)
    const desconto = percentualDesconto(forma)

    // Validações primeiro: o return sai antes de qualquer conta
    if (preco === 0) {
      console.log(`Produto não encontrado: ${produto}`)
      return
    }
    if (frete === -1) {
      console.log(`Não entregamos em ${estado}`)
      return
    }
    if (desconto === -1) {
      console.log(`Forma de pagamento inválida: ${forma}`)
      return
    }

    const subtotal = preco * quantidade
    // O desconto incide só sobre os produtos; o frete entra depois, cheio
    const total = subtotal - subtotal * desconto / 100 + frete
    console.log(`Total: R$ ${total}`)
  }

  fecharPedido("plantadeira", 1, "RS", "pix")         // Total: R$ 42900  (45000 - 2250 + 150)
  fecharPedido("kit de discos", 10, "SC", "boleto")   // Total: R$ 2100   (1800 + 300)
  fecharPedido("pulverizador", 2, "MG", "pix")        // Total: R$ 23300  (24000 - 1200 + 500)
  fecharPedido("trator", 1, "RS", "pix")              // Produto não encontrado: trator
  fecharPedido("plantadeira", 1, "AM", "pix")         // Não entregamos em AM
  fecharPedido("plantadeira", 1, "RS", "cheque")      // Forma de pagamento inválida: cheque
}
