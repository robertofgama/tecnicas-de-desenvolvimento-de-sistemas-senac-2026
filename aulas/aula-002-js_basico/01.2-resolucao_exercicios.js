// Resoluções dos exercícios da Aula 2 — JavaScript básico
// Rode com: node 01.2-resolucao_exercicios.js

// ---------------------------------------------------------------
// 1. Crachá
// ---------------------------------------------------------------
console.log("--- Exercício 1 ---")
console.log("Ana")
console.log("Comercial")
console.log("🚜")
// A vírgula imprime tudo na mesma linha, com um espaço entre cada valor
console.log("Ana", "Comercial", "🚜")

// ---------------------------------------------------------------
// 2. Ficha do produto
// ---------------------------------------------------------------
console.log("\n--- Exercício 2 ---")
console.log("Produto:", "Kit de discos de corte")
console.log("Preço:", 180.5)       // number: sem aspas, com ponto
console.log("Em estoque:", true)   // boolean: sem aspas

// ---------------------------------------------------------------
// 3. Adivinhe antes de rodar
// ---------------------------------------------------------------
console.log("\n--- Exercício 3 ---")
console.log(typeof "180")    // string  → tem aspas, é texto
console.log(typeof 180)      // number
console.log(typeof 180.0)    // number  → o JS não separa inteiro de decimal
console.log(typeof false)    // boolean
console.log(typeof "false")  // string  → tem aspas, é texto
console.log(typeof null)     // object  → bug histórico do JS; só saiba que acontece

// ---------------------------------------------------------------
// 4. Caça aos erros
// ---------------------------------------------------------------
console.log("\n--- Exercício 4 ---")
console.log("Bem-vindo")    // faltavam as aspas: sem elas o JS procura algo chamado Bem-vindo
console.log("Pedido nº 7")  // faltava fechar a aspa
console.log("Agro Silva")   // console e log são minúsculos: o JS diferencia maiúsculas
console.log(1234.56)        // decimal é com ponto, e sem separador de milhar

// ---------------------------------------------------------------
// 5. Vírgula x ponto
// ---------------------------------------------------------------
console.log("\n--- Exercício 5 ---")
console.log(3.5)   // 3.5
console.log(3,5)   // 3 5 → a vírgula separa DOIS valores, o 3 e o 5

// ---------------------------------------------------------------
// 6. Recibo
// ---------------------------------------------------------------
console.log("\n--- Exercício 6 ---")
console.log("--- Recibo ---\nCliente: Agro Silva\nItens: 12\n--------------")
