# Funções

Toda vez que você copia e cola o mesmo trecho de código mudando só um número, tem uma função pedindo pra nascer. Função é um bloco de código com **nome**: você escreve uma vez e usa quantas vezes quiser.

> Os exemplos usam o sistema de pedidos de uma revenda de máquinas agrícolas: clientes (como a Agro Silva), produtos (plantadeiras a R$ 45.000, kits de discos de corte a R$ 180) e pedidos com quantidade, desconto e frete.

---

## Tópicos

- Declarar e chamar
- Parâmetros: o que a função recebe
- return: o que a função devolve
- Parâmetro com valor padrão
- Escopo: o que nasce dentro fica dentro
- Arrow functions
- Funções usando funções
- Bônus: função também é valor

---

## 1. Declarar e chamar

```js
function mostrarCabecalho() {
  console.log("=====================")
  console.log("  SISTEMA DE PEDIDOS ")
  console.log("=====================")
}

mostrarCabecalho()
mostrarCabecalho()
```

---

Anatomia:

- `function` + um **nome** + parênteses `()` + um **bloco** entre chaves `{ }`.
- Declarar **não executa nada**. É só a receita guardada.
- Quem executa é a **chamada**: o nome seguido de `()`. Duas chamadas, dois cabeçalhos.

Nome de função costuma ser um **verbo**: `calcularTotal`, `mostrarCabecalho`, `validarQuantidade`. Ela *faz* alguma coisa.

---

## 2. Parâmetros: o que a função recebe

Um cabeçalho fixo é pouco útil. Com **parâmetros**, a função recebe valores de fora:

```js
function saudar(nome) {
  console.log(`Olá, ${nome}!`)
}

saudar("Ana")     // Olá, Ana!
saudar("Bruno")   // Olá, Bruno!
```

- **Parâmetro** é a variável que fica nos parênteses da declaração (`nome`).
- **Argumento** é o valor que você passa na chamada (`"Ana"`).

> As crases `` ` `` com `${ }` dentro são *template strings*: o JS troca o `${ }` pelo valor da variável.

---

Com mais de um, separe por vírgula. A **ordem** é o que liga um ao outro:

```js
function mostrarItem(produto, quantidade) {
  console.log(`${quantidade}x ${produto}`)
}

mostrarItem("Plantadeira", 2)   // 2x Plantadeira
mostrarItem(2, "Plantadeira")   // Plantadeirax 2  ← ordem trocada, resultado errado
```

---

## 3. return: o que a função devolve

Até aqui as funções só **mostravam** coisas. O mais comum é a função **calcular e devolver** um resultado pra quem chamou:

```js
function calcularSubtotal(preco, quantidade) {
  return preco * quantidade
}

const subtotal = calcularSubtotal(180, 10)
console.log(subtotal)   // 1800
```

---

A chamada `calcularSubtotal(180, 10)` **vira** o valor devolvido. Dá pra guardar numa variável, somar, passar pra outra função...

```js
const total = calcularSubtotal(45000, 2) + calcularSubtotal(180, 10)
console.log(total)   // 91800
```

---

### console.log não é return

```js
function mostrarDobro(numero) {
  console.log(numero * 2)   // mostra na tela...
}

const resultado = mostrarDobro(5)   // aparece 10 na tela
console.log(resultado)              // undefined: a função não devolveu nada
```

`console.log` mostra pra **você**. `return` entrega pro **código**. Função sem `return` devolve `undefined`.

---

### return encerra a função

Quando o JS encontra um `return`, ele sai da função na hora. O que estiver embaixo não roda. Isso é ótimo pra validar logo no começo:

```js
function validarQuantidade(quantidade) {
  if (quantidade <= 0) {
    return "Quantidade inválida"
  }
  return "OK"   // só chega aqui se o if não devolveu antes
}
```

> Lembrete rápido de `if`: o bloco entre chaves só roda se a condição entre parênteses for verdadeira. Pra juntar condições, `&&` é "e" (as duas precisam ser verdadeiras), `||` é "ou" (basta uma) e `!` é "não" (inverte).

---

## 4. Parâmetro com valor padrão

Se o argumento não vier, o parâmetro fica `undefined`. Dá pra definir um valor padrão com `=`:

```js
function calcularComissao(valor, percentual = 5) {
  return valor * percentual / 100
}

console.log(calcularComissao(10000))      // 500  (usou o padrão: 5%)
console.log(calcularComissao(10000, 8))   // 800
```

Parâmetros com padrão vão no **final** da lista.

---

## 5. Escopo: o que nasce dentro fica dentro

Variáveis criadas dentro da função só existem lá dentro:

```js
function calcularTotal(preco, quantidade) {
  const total = preco * quantidade
  return total
}

calcularTotal(180, 10)
console.log(total)   // ReferenceError: total is not defined
```

Isso é uma vantagem: cada função tem seu espaço, e um `total` aqui não briga com um `total` em outra função. Se você precisa do valor fora, **é pra isso que serve o `return`**.

O contrário funciona: a função enxerga as variáveis de fora. Mas prefira receber tudo por parâmetro: fica claro do que a função depende.

---

## 6. Arrow functions

Outro jeito de escrever função, muito usado no JavaScript moderno (e o tempo todo em React):

```js
const calcularSubtotal = (preco, quantidade) => {
  return preco * quantidade
}
```

É uma função guardada numa `const`. A seta `=>` separa os parâmetros do corpo.

---

Se o corpo é **só um return**, dá pra encurtar: tira as chaves e o `return`, e o valor é devolvido automaticamente.

```js
const calcularSubtotal = (preco, quantidade) => preco * quantidade
```

Com **um** parâmetro só, os parênteses são opcionais:

```js
const calcularDobro = numero => numero * 2
```

---

As três formas abaixo fazem exatamente a mesma coisa:

```js
function calcularIcms(valor) { return valor * 0.17 }
const calcularIcms = (valor) => { return valor * 0.17 }
const calcularIcms = valor => valor * 0.17
```

(Não rode as três juntas: o nome não pode ser declarado duas vezes.)

---

## 7. Funções usando funções

O jogo fica bom quando uma função usa outras. Cada uma faz **uma coisa só**, e você monta as maiores com as menores:

```js
const calcularSubtotal = (preco, quantidade) => preco * quantidade
const formatarMoeda = valor => `R$ ${valor.toFixed(2)}`

function mostrarItem(produto, preco, quantidade) {
  const subtotal = calcularSubtotal(preco, quantidade)
  console.log(`${quantidade}x ${produto}: ${formatarMoeda(subtotal)}`)
}

mostrarItem("Plantadeira", 45000, 2)              // 2x Plantadeira: R$ 90000.00
mostrarItem("Kit de discos de corte", 180, 10)    // 10x Kit de discos de corte: R$ 1800.00
```

Se a regra do subtotal mudar, muda num lugar só.

> `.toFixed(2)` transforma o número em texto com duas casas decimais: `(7200.5).toFixed(2)` → `"7200.50"`.

---

## 8. Bônus: função também é valor

Uma função pode ser guardada em variável (como nas arrows) e **passada como argumento** pra outra função. Repare na diferença:

```js
mostrarCabecalho     // a função em si (a receita)
mostrarCabecalho()   // executa a função (o prato pronto)
```

Em React, por exemplo, um botão recebe `onClick={salvarPedido}`, **sem** parênteses: você entrega a receita pro botão, que chama a função só quando alguém clicar. Com parênteses, ela rodaria na hora, antes do clique.

---

## Erros comuns

| Código | O que acontece |
|---|---|
| `const t = calcularTotal` | Sem `()` você **não chamou** a função: `t` virou a própria função, não o resultado. |
| Esquecer o `return` | A função calcula, mas devolve `undefined`. Clássico: `NaN` no total lá na frente. |
| `console.log("fim")` depois do `return` | Nunca roda: o `return` já saiu da função. |
| `const f = (a, b) => { a + b }` | Com chaves, a arrow **precisa** de `return`. Sem ele, devolve `undefined`. Ou tire as chaves: `(a, b) => a + b`. |
| `calcularSubtotal(10)` | Faltou argumento: `quantidade` fica `undefined`, e `10 * undefined` dá `NaN`. |
| Chamar uma arrow antes da linha que a cria | `ReferenceError: Cannot access 'f' before initialization`. Com `function` dá pra chamar antes da declaração; arrow em `const`, não. |

---

## Cheatsheet

- `function nome(a, b) { return ... }` → declara. `nome(1, 2)` → chama.
- Parâmetro fica na declaração; argumento vai na chamada. A ordem liga um ao outro.
- `return` devolve o valor **e encerra** a função. Sem `return` → `undefined`.
- `console.log` mostra pra você; `return` entrega pro código.
- Valor padrão: `function f(x, y = 10)`.
- O que nasce dentro da função fica dentro.
- Arrow: `const f = (a, b) => a + b`. Com chaves, precisa de `return`.
- `f` é a função; `f()` é a função rodando.

---

## Exercícios

Crie um arquivo `exercicios.js` e rode com `node exercicios.js`. Mantenha tudo no mesmo arquivo: vários exercícios reaproveitam as funções dos anteriores.

Os exercícios de 1 a 6 fixam o básico. O 7 e o 8 (médios) juntam várias ideias da aula. O 9 e o 10 (difíceis) pedem planejamento: escreva as regras em português antes de programar.

---

### Exercício 1: Formatar moeda

Escreva `formatarMoeda(valor)`, que **devolve** o texto `R$` seguido do valor com duas casas decimais.

- `formatarMoeda(180)` → `R$ 180.00`
- `formatarMoeda(7200.5)` → `R$ 7200.50`

> Dica: `.toFixed(2)`.

---

### Exercício 2: Subtotal do item

Escreva `calcularSubtotal(preco, quantidade)`. Use-a com `formatarMoeda` pra imprimir o subtotal de:

- 10 kits de discos de corte a R$ 180 → `R$ 1800.00`
- 2 plantadeiras a R$ 45.000 → `R$ 90000.00`

---

### Exercício 3: Faixa de desconto

Escreva `calcularDesconto(quantidade)`, que devolve o percentual de desconto como número: `0.2` a partir de 50 unidades, `0.1` a partir de 10, `0` abaixo disso.

Teste com 5, 10 e 50.

> Dica: um `return` dentro do `if` já encerra a função, nem precisa de `else`.

---

### Exercício 4: Frete com padrão

Escreva `calcularFrete(total, uf)`. O frete é grátis se o total for de R$ 5.000 ou mais **ou** se o cliente for do RS; senão, custa R$ 150. A maioria dos clientes é do RS, então `uf` deve valer `"RS"` quando não for informado.

- `calcularFrete(3200)` → `0`
- `calcularFrete(3200, "SC")` → `150`
- `calcularFrete(8000, "SC")` → `0`

---

### Exercício 5: Arrow functions

Escreva, como arrow functions de uma linha:

- `temEstoque(estoque, quantidade)`: devolve `true` se a quantidade pedida couber no estoque. `temEstoque(20, 5)` → `true`, `temEstoque(20, 500)` → `false`.
- `aplicarAcrescimo(preco, percentual)`: devolve o preço com o acréscimo. `aplicarAcrescimo(180, 10)` → `198`.

---

### Exercício 6: Fechando o pedido

A Agro Silva comprou 2 plantadeiras a R$ 45.000 e 50 kits de discos de corte a R$ 180. Escreva `calcularTotalDoItem(preco, quantidade)`, que usa `calcularSubtotal` e `calcularDesconto` pra devolver o valor do item já com desconto. Depois, usando as funções dos exercícios anteriores, imprima:

```text
Plantadeira: R$ 90000.00
Kit de discos de corte: R$ 7200.00
Frete: R$ 0.00
Total: R$ 97200.00
```

---

### Exercício 7 (Médio): O parcelamento

1. Escreva `calcularParcela(total, parcelas = 1)`, que devolve o valor de cada parcela. Até 3 parcelas, sem acréscimo. De 4 a 10, o total ganha 5% de acréscimo antes de ser dividido: reaproveite `aplicarAcrescimo`.
2. Escreva `mostrarParcelamento(total, parcelas = 1)`, que imprime `3x de R$ 300.00`. Se `parcelas` for menor que 1 ou maior que 10, ela imprime `Parcelamento inválido: 12x` e **não calcula nada**.

Teste:

- `mostrarParcelamento(900, 3)` → `3x de R$ 300.00`
- `mostrarParcelamento(1000, 5)` → `5x de R$ 210.00`
- `mostrarParcelamento(900)` → `1x de R$ 900.00`
- `mostrarParcelamento(900, 12)` → `Parcelamento inválido: 12x`

---

### Exercício 8 (Médio): A comissão do vendedor

A comissão depende de quanto o vendedor vendeu em relação à meta do mês:

- abaixo da meta → 3%
- bateu a meta → 5%
- vendeu uma vez e meia a meta ou mais → 8%

1. Escreva `percentualComissao(vendido, meta)`, que devolve 3, 5 ou 8.
2. Escreva `calcularComissao(vendido, meta = 200000)`, que usa a primeira e devolve o valor da comissão.
3. Imprima a comissão de cada vendedor, formatada:

| Vendedor | Vendido | Comissão esperada |
|---|---|---|
| Ana | 150.000 | R$ 4500.00 |
| Bruno | 200.000 | R$ 10000.00 |
| Carla | 320.000 | R$ 25600.00 |

> Dica: se a Carla ganhar só 5%, olhe a ordem dos seus `if`.

---

### Exercício 9 (Difícil): A liberação do pedido

Antes de liberar um pedido, o sistema confere as regras **nesta ordem** e para na primeira que falhar:

1. quantidade menor ou igual a 0 → `Quantidade inválida`
2. quantidade maior que o estoque → `Estoque insuficiente: só temos 20` (o número vem do estoque)
3. total acima do limite de crédito do cliente **e** pagamento não aprovado → `Aguardando pagamento`
4. passou por tudo → `Pedido liberado`

Escreva `verificarPedido(quantidade, estoque, total, limiteCredito, pagamentoAprovado = false)`, que devolve a mensagem. Depois escreva `podeLiberar(...)` com os mesmos parâmetros, que devolve `true` ou `false` **reaproveitando** `verificarPedido`, sem repetir nenhuma regra.

---

Teste com os cinco pedidos:

| Quantidade | Estoque | Total | Limite | Pagamento aprovado? | Esperado |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 10.000 | não | Quantidade inválida |
| 30 | 20 | 5.400 | 10.000 | não | Estoque insuficiente: só temos 20 |
| 2 | 5 | 90.000 | 50.000 | não | Aguardando pagamento |
| 2 | 5 | 90.000 | 50.000 | sim | Pedido liberado |
| 10 | 20 | 1.800 | 10.000 | (não informado) | Pedido liberado |

> [!WARNING]
> O primeiro pedido tem quantidade 0 **e** estoque 0. A resposta certa é `Quantidade inválida`, e não a de estoque: a ordem dos `return` decide qual regra fala primeiro.

---

### Exercício 10 (Difícil): O orçamento completo

Escreva `montarOrcamento(produto, preco, quantidade, uf = "RS", parcelas = 1)`, que imprime o orçamento completo reaproveitando as funções dos exercícios anteriores. O desconto vale sobre o subtotal, o frete é calculado sobre o valor **já com desconto** e o parcelamento vale sobre o total **com frete**.

`montarOrcamento("Kit de discos de corte", 180, 50, "RS", 4)` imprime:

```text
Orçamento: 50x Kit de discos de corte
Subtotal: R$ 9000.00
Desconto (20%): R$ 1800.00
Frete: R$ 0.00
Total: R$ 7200.00
Pagamento: 4x de R$ 1890.00
```

---

Teste também:

- `montarOrcamento("Plantadeira", 45000, 1, "SC", 2)` → sem desconto, frete grátis pelo valor, `2x de R$ 22500.00`
- `montarOrcamento("Kit de discos de corte", 180, 5, "SC")` → sem desconto, frete de R$ 150.00, total de R$ 1050.00, `1x de R$ 1050.00`

> [!WARNING]
> Se o frete for calculado sobre o subtotal **sem** desconto, um pedido que fica abaixo de R$ 5.000 depois do desconto ganha frete grátis sem merecer. Monte o cálculo na ordem do enunciado.
