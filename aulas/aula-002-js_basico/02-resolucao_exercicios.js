// Resoluções dos exercícios — JavaScript básico: console.log e tipos
// Rode com: node 02-resolucao_exercicios.js
//
// Aqui não tem variável nenhuma, só console.log com valores escritos
// direto. Por isso os exercícios não precisam ficar isolados.

// ---------------------------------------------------------------
// Exercício 1: O crachá da feira
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
console.log("Ana")
console.log("Comercial")
console.log("🚜")
// A vírgula imprime tudo na mesma linha, com um espaço entre cada valor
console.log("Ana", "Comercial", "🚜")   // Ana Comercial 🚜

// ---------------------------------------------------------------
// Exercício 2: A ficha do produto
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
console.log("Produto:", "Kit de discos de corte")
console.log("Preço:", 180.5)       // number: sem aspas, com ponto
console.log("Em estoque:", true)   // boolean: sem aspas

// ---------------------------------------------------------------
// Exercício 3: Adivinhe antes de rodar
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
console.log(typeof "180")    // string  → tem aspas, é texto
console.log(typeof 180)      // number
console.log(typeof 180.0)    // number  → o JS não separa inteiro de decimal
console.log(typeof false)    // boolean
console.log(typeof "false")  // string  → tem aspas, é texto
console.log(typeof null)     // object  → bug histórico do JS; só saiba que acontece

// ---------------------------------------------------------------
// Exercício 4: Caça aos erros
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")
// Faltavam as aspas. Sem elas o JS lê Bem - vindo como uma conta
// e reclama: ReferenceError: Bem is not defined
console.log("Bem-vindo")
console.log("Pedido nº 7")  // faltava fechar a aspa (SyntaxError)
console.log("Agro Silva")   // console e log são minúsculos: o JS diferencia maiúsculas
console.log(1234.56)        // decimal é com ponto, e sem separador de milhar

// ---------------------------------------------------------------
// Exercício 5: Vírgula x ponto
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
console.log(3.5)   // 3.5
console.log(3,5)   // 3 5 → a vírgula separa DOIS valores, o 3 e o 5

// ---------------------------------------------------------------
// Exercício 6: O recibo
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
console.log("--- Recibo ---\nCliente: Agro Silva\nItens: 12\n--------------")

// ---------------------------------------------------------------
// Exercício 7 (Médio): O cupom do balcão
// ---------------------------------------------------------------
console.log("\n--- Exercício 7 ---")
console.log("=== Cupom do balcão ===\nCliente: Agro Silva")
// Sem espaço no fim do texto: a vírgula já coloca um
console.log("Kit de discos de corte x", 10)
console.log("Total:", 1800)
console.log("Pago:", true)
// A prova: os valores estão fora das aspas, então não são texto
console.log(typeof 10, typeof 1800, typeof true)   // number number boolean

// ---------------------------------------------------------------
// Exercício 8 (Médio): A ficha do cadastro
// ---------------------------------------------------------------
console.log("\n--- Exercício 8 ---")
console.log(typeof "Agro Silva")   // string
console.log(typeof "45000")        // string  → tem aspas: parece número, mas é texto
console.log(typeof 45000)          // number
console.log(typeof "true")         // string  → tem aspas: parece boolean, mas é texto
console.log(typeof undefined)      // undefined
// A pegadinha: a vírgula separa dois valores pro console.log.
// O typeof só pega o 3, e o 5 vem sozinho depois.
console.log(typeof 3,5)            // number 5

console.log()
console.log("Nome:", "Plantadeira", typeof "Plantadeira")   // Nome: Plantadeira string
console.log("Preço:", 45000, typeof 45000)                  // Preço: 45000 number
console.log("Em estoque:", true, typeof true)               // Em estoque: true boolean
// null é "vazio de propósito"; o typeof diz object por um bug antigo do JS
console.log("Observação:", null, typeof null)               // Observação: null object
// undefined é "ainda não tem valor"
console.log("Desconto:", undefined, typeof undefined)       // Desconto: undefined undefined

// ---------------------------------------------------------------
// Exercício 9 (Difícil): O relatório quebrado
// ---------------------------------------------------------------
console.log("\n--- Exercício 9 ---")
// Rodando o código original, a primeira mensagem é:
//   SyntaxError: missing ) after argument list
// Ela vem da linha dos kits, a que está sem vírgula. Com um SyntaxError
// o arquivo inteiro não roda, por isso nem o título aparece. Corrigida
// essa, aparece o ReferenceError: Console is not defined.
//
// Os seis problemas:
// 1. /n com barra normal imprime "/n". A quebra de linha é \n.
// 2. Console com C maiúsculo não existe.
// 3. "2" entre aspas é texto. Na tela parece igual, mas o typeof denuncia.
// 4. 45.000 é quarenta e cinco: o ponto é a casa decimal. É 45000.
// 5. Faltava a vírgula entre "Kits vendidos:" e 10.
// 6. "true" entre aspas é texto, não boolean.
// E a linha do typeof passa a usar os valores corrigidos.
console.log("=== Relatório do dia ===\n")
console.log("Vendedora:", "Ana")
console.log("Plantadeiras vendidas:", 2)
console.log("Valor da plantadeira:", 45000)
console.log("Kits vendidos:", 10)
console.log("Meta batida:", true)
console.log(typeof 2, typeof 45000, typeof true)   // number number boolean

// ---------------------------------------------------------------
// Exercício 10 (Difícil): Engenharia reversa
// ---------------------------------------------------------------
console.log("\n--- Exercício 10 ---")
console.log("Plantadeira", typeof "Plantadeira")   // Plantadeira string
console.log(45000, typeof 45000)                   // 45000 number
// Na tela é o mesmo 45000 da linha de cima. Quem muda é o tipo:
// aqui o valor está entre aspas.
console.log("45000", typeof "45000")               // 45000 string
console.log(true, typeof true)                     // true boolean
console.log(null, typeof null)                     // null object
console.log(undefined, typeof undefined)           // undefined undefined
console.log(3.5, typeof 3.5)                       // 3.5 number
console.log(3, 5)                                  // 3 5 → dois valores separados
// typeof 45000 devolve o texto "number". Perguntando o tipo
// desse texto, a resposta é string.
console.log(typeof typeof 45000)                   // string
