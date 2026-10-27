# Laço de repetição for

O `for` repete um bloco de código um número **conhecido** de vezes, sem você precisar copiar e colar.

> Os exemplos usam o sistema de pedidos de uma revenda de máquinas agrícolas: clientes (como a Agro Silva), produtos (plantadeiras a R$ 45.000, kits de discos de corte a R$ 180) e pedidos com quantidade, desconto e frete.

---

## Tópicos

- O problema: código repetido
- Anatomia do for
- Rastreando o laço passo a passo
- Contando de outras formas
- Acumuladores: guardando um resultado
- for com if/else
- for dentro de uma função
- break e continue
- Laços aninhados
- for...of: percorrendo os valores de uma lista
- for...in: percorrendo as chaves de um objeto

---

## 1. O problema: código repetido

Um pedido saiu em 5 caixas, e cada caixa precisa de uma etiqueta:

```js
console.log("Caixa 1 de 5")
console.log("Caixa 2 de 5")
console.log("Caixa 3 de 5")
console.log("Caixa 4 de 5")
console.log("Caixa 5 de 5")
```

Funciona. Mas e se fossem 500 caixas? Copiar e colar 500 linhas não é programar, é digitar.

---

O `for` existe exatamente pra isso: **descrever a repetição uma vez** e deixar o computador repetir.

```js
for (let caixa = 1; caixa <= 5; caixa++) {
  console.log(`Caixa ${caixa} de 5`)
}
```

Cinco linhas viraram três. E pra etiquetar 500 caixas, muda **um único número**.

> As crases `` ` `` com `${ }` dentro são *template strings*: o JS troca o `${ }` pelo valor da variável.

---

## 2. Anatomia do for

```js
for (inicialização; condição; incremento) {
  // instruções que serão repetidas
}
```

Dentro dos parênteses existem três partes, separadas por **ponto e vírgula**:

| Parte | Quando roda | Pra que serve |
|---|---|---|
| **Inicialização** | Uma única vez, antes de tudo | Criar a variável de controle (o "contador") |
| **Condição** | Antes de cada volta | Enquanto for `true`, o bloco roda; se for `false`, para |
| **Incremento** | No fim de cada volta | Mudar o contador pro laço poder chegar ao fim |

> Mesmo escrevendo sem ponto e vírgula no fim das linhas, os dois `;` dentro dos parênteses do `for` são obrigatórios.

---

```js
for (let contador = 1; contador <= 3; contador++) {
  console.log(`Volta número: ${contador}`)
}
// Volta número: 1
// Volta número: 2
// Volta número: 3
```

Troque o `3` por `10` e rode de novo: o mesmo código, dez voltas.

---

### O operador `++`

`contador++` é só um atalho pra `contador = contador + 1`. Existe também o `--`, que subtrai 1, e o `+=`, que soma um valor qualquer:

```js
let numero = 10

numero++      // 11 (o mesmo que numero = numero + 1)
numero--      // 10 de novo
numero += 5   // 15 (o mesmo que numero = numero + 5)
```

> [!NOTE]
> É muito comum ver o contador chamado de `i` (de *índice* ou *iteração*): `for (let i = 1; i <= 3; i++)`. É uma convenção antiga e você vai encontrá-la em todo lugar. Enquanto estiver aprendendo, use nomes descritivos (`caixa`, `linha`, `multiplicador`): o código fica muito mais fácil de ler.

---

## 3. Rastreando o laço passo a passo

Entender o `for` é entender **em que ordem** as três partes rodam. Rastreando o exemplo das três voltas:

| Passo | `contador` | `contador <= 3` | O que acontece |
|---|---|---|---|
| Inicialização | 1 | — | O contador nasce valendo 1 |
| 1ª volta | 1 | `true` | Imprime "Volta número: 1" e o `++` deixa o contador em 2 |
| 2ª volta | 2 | `true` | Imprime "Volta número: 2" e o `++` deixa o contador em 3 |
| 3ª volta | 3 | `true` | Imprime "Volta número: 3" e o `++` deixa o contador em 4 |
| Fim | 4 | `false` | A condição falhou: o laço termina e o programa segue |

Repare que o contador chega a valer 4, mas o bloco **não roda** com 4: a condição é testada **antes** de cada volta.

---

## 4. Contando de outras formas

O contador não precisa começar em 1, nem subir de 1 em 1.

```js
// Contagem decrescente: começa em 5 e desce até 1
for (let contador = 5; contador >= 1; contador--) {
  console.log(contador)
}
// 5, 4, 3, 2, 1 (um por linha)

// De 2 em 2: só os números pares até 10
for (let par = 2; par <= 10; par += 2) {
  console.log(par)
}
// 2, 4, 6, 8, 10 (um por linha)
```

---

### Duas armadilhas do contador

> [!WARNING]
> **Cuidado com o laço infinito!** Se o incremento nunca fizer a condição virar `false`, o programa repete pra sempre e trava o terminal:
>
> ```js
> // ❌ NÃO RODE: o contador começa em 1 e só diminui, então nunca passa de 5
> for (let contador = 1; contador <= 5; contador--) {
>   console.log(contador)
> }
> ```
>
> Se acontecer, aperte **Ctrl + C** no terminal pra interromper.

> [!WARNING]
> O contador precisa **mudar** de valor a cada volta, por isso ele é declarado com `let`, nunca com `const`. Com `const`, o JS roda a primeira volta e para no incremento com `TypeError: Assignment to constant variable.`

---

## 5. Acumuladores: guardando um resultado

Muitas vezes a gente quer somar algo a cada volta. A variável que guarda o resultado, o **acumulador**, precisa nascer **fora** do laço: se ela for criada dentro, é zerada a cada volta.

```js
let total = 0   // nasce FORA: sobrevive a todas as voltas

for (let numero = 1; numero <= 5; numero++) {
  total = total + numero
  console.log(`Somei ${numero}, total parcial: ${total}`)
}

console.log(`Soma final: ${total}`)   // Soma final: 15
```

> [!NOTE]
> A variável criada na inicialização (`numero`, no exemplo) **só existe dentro do laço**. Usá-la depois de fechar as chaves dá `ReferenceError: numero is not defined`.

---

## 6. for com if/else

Dentro do bloco do `for` cabe qualquer código, inclusive um `if/else`.

> Lembrete rápido de `if`: o bloco entre chaves só roda se a condição entre parênteses for verdadeira (`numero === 4` pergunta "é igual a 4?"); o `else` roda quando ela é falsa. Pra juntar condições, `&&` é "e" (as duas precisam ser verdadeiras) e `||` é "ou" (basta uma).

```js
for (let numero = 1; numero <= 6; numero++) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`)
  } else {
    console.log(`${numero} é ímpar`)
  }
}
// 1 é ímpar, 2 é par, 3 é ímpar, 4 é par, 5 é ímpar, 6 é par (um por linha)
```

> Lembrete rápido de `%`: é o resto da divisão. `7 % 2` dá `1` e `6 % 2` dá `0`. Se o resto da divisão por 2 é zero, o número é par.

---

## 7. for dentro de uma função

Dentro de uma função, o laço fica **reutilizável**.

> Lembrete rápido de função: `function nome(a, b) { ... }` guarda um bloco com nome, e `nome(1, 2)` executa esse bloco com os valores recebidos. O `return` devolve um resultado pra quem chamou e encerra a função.

```js
function exibirTabuada(numero) {
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = numero * multiplicador
    console.log(`${numero} x ${multiplicador} = ${resultado}`)
  }
}

exibirTabuada(7)   // 7 x 1 = 7 ... até 7 x 10 = 70
exibirTabuada(3)   // a mesma função serve pra qualquer número
```

---

E com `return`, a função devolve o resultado acumulado em vez de imprimir:

```js
function somarAte(limite) {
  let soma = 0

  for (let numero = 1; numero <= limite; numero++) {
    soma = soma + numero
  }

  return soma   // depois do laço: só devolve quando todas as voltas terminaram
}

console.log(`Soma de 1 a 10: ${somarAte(10)}`)     // Soma de 1 a 10: 55
console.log(`Soma de 1 a 100: ${somarAte(100)}`)   // Soma de 1 a 100: 5050
```

---

## 8. break e continue

Duas palavras que mudam o rumo do laço. A primeira é o **`break`**: abandona o laço na hora, sem terminar as voltas que faltam.

```js
for (let numero = 1; numero <= 10; numero++) {
  if (numero === 4) {
    break
  }
  console.log(numero)
}
// 1, 2, 3 (um por linha)
```

---

### continue

O **`continue`** pula **só a volta atual** e segue pra próxima:

```js
for (let numero = 1; numero <= 5; numero++) {
  if (numero === 3) {
    continue
  }
  console.log(numero)
}
// 1, 2, 4, 5 (um por linha)
```

Troque o `continue` por `break` e rode de novo: o que muda na saída?

---

## 9. Laços aninhados

Um `for` pode conter outro `for`. O de dentro roda **inteiro** a cada volta do de fora:

```js
for (let linha = 1; linha <= 3; linha++) {
  for (let coluna = 1; coluna <= 3; coluna++) {
    console.log(`Linha ${linha}, Coluna ${coluna}`)
  }
}
// Linha 1, Coluna 1
// Linha 1, Coluna 2
// ... 9 linhas no total (3 voltas de fora x 3 voltas de dentro)
```

> [!WARNING]
> O número de execuções se **multiplica**. Dois laços de 1.000 voltas cada dão 1.000.000 de execuções: o programa pode ficar bem lento.

---

## 10. for...of: percorrendo os valores de uma lista

> Lembrete rápido de array: os colchetes `[ ]` guardam uma **lista** de valores, em ordem. `const quantidades = [2, 10, 50]` tem 3 números, e `quantidades.length` diz quantos itens a lista tem (3).

Pra passar por **cada item** de uma lista, sem contador, existe o `for...of`:

```js
const produtos = ["Plantadeira", "Kit de discos de corte", "Pulverizador"]

for (const produto of produtos) {
  console.log(`Produto: ${produto}`)
}
// Produto: Plantadeira
// Produto: Kit de discos de corte
// Produto: Pulverizador
```

Leia assim: "para cada `produto` **de** `produtos`". A cada volta, `produto` recebe o próximo item.

---

Repare no `const`: aqui ele pode, porque a variável nasce de novo a cada volta e ninguém faz `++` nela.

O mesmo laço no `for` clássico precisa de contador e de `[ ]` pra pegar cada item (o primeiro fica na posição 0):

```js
for (let posicao = 0; posicao < produtos.length; posicao++) {
  console.log(`Produto: ${produtos[posicao]}`)
}
```

O resultado é igual, mas com mais chance de errar o limite. Regra prática: precisa só dos valores? `for...of`. Precisa da posição, ou de contar de 2 em 2, ou de trás pra frente? `for` clássico.

---

### for...of com acumulador

Tudo que vale no `for` clássico vale aqui, inclusive acumulador, `if`, `break` e `continue`:

```js
const quantidades = [2, 10, 50]
let totalDeItens = 0

for (const quantidade of quantidades) {
  totalDeItens += quantidade
}

console.log(totalDeItens)   // 62
```

Troque a lista pra `[5, 5]` e rode de novo: o laço se ajusta sozinho ao tamanho dela.

---

## 11. for...in: percorrendo as chaves de um objeto

> Lembrete rápido de objeto: as chaves `{ }` guardam pares de **chave: valor**. Em `const estoque = { plantadeira: 3, kitDiscos: 40 }`, `estoque.plantadeira` vale 3. Se o nome da chave estiver numa variável, use colchetes: `estoque[chave]`.

O `for...in` passa por cada **chave** de um objeto:

```js
const estoque = { plantadeira: 3, kitDiscos: 40, pulverizador: 0 }

for (const produto in estoque) {
  console.log(`${produto}: ${estoque[produto]} unidades`)
}
// plantadeira: 3 unidades
// kitDiscos: 40 unidades
// pulverizador: 0 unidades
```

---

A variável recebe o **nome** da chave (`"plantadeira"`), e o valor vem de `estoque[produto]`.

Com ponto não funciona: `estoque.produto` procura uma chave chamada literalmente `produto`, que não existe, e dá `undefined`.

### of ou in?

| Laço | Percorre | Use com |
|---|---|---|
| `for...of` | os **valores** | arrays (listas) |
| `for...in` | as **chaves** | objetos |

---

Num array, o `for...in` devolve as **posições**, e não os itens:

```js
for (const item in ["Plantadeira", "Kit de discos de corte"]) {
  console.log(item)
}
// 0
// 1
```

> [!TIP]
> Pra não confundir: **of** entrega o que está **dentro** da lista; **in** entrega os nomes das gavetas (as chaves). Lista → `of`. Objeto → `in`.

---

## Erros comuns

| Código | O que acontece |
|---|---|
| `for (const n = 1; n <= 5; n++)` | `TypeError: Assignment to constant variable.` O contador muda a cada volta: use `let`. |
| `for (let n = 1, n <= 5, n++)` | `SyntaxError: Identifier 'n' has already been declared`. A mensagem engana: o erro são as vírgulas. As três partes se separam com `;`. |
| `for (let n = 1; n <= 5; n--)` | Laço infinito: o contador desce e a condição nunca fica `false`. **Ctrl + C** pra parar. |
| `n < 10` quando o 10 tinha que entrar | O laço para uma volta antes e o 10 fica de fora. Use `<=`. |
| `let total = 0` dentro do laço | O acumulador zera a cada volta e não existe depois do `}`: `ReferenceError: total is not defined`. Crie-o antes do `for`. |
| `for (const item in produtos)` num array | Imprime `0`, `1`, `2`: o `for...in` entrega as posições. Pra pegar os itens de uma lista, use `for...of`. |

---

## Cheatsheet

- `for (let n = 1; n <= 10; n++) { ... }` → inicialização; condição; incremento.
- Ordem: inicialização (uma vez) → condição → bloco → incremento → condição...
- A condição é testada **antes** de cada volta: `false` encerra o laço.
- `n++` soma 1, `n--` subtrai 1, `n += 5` soma 5.
- Contador com `let`, nunca `const`. Ele só existe dentro do laço.
- Acumulador nasce **fora** do laço: `let total = 0`.
- `break` sai do laço; `continue` pula pra próxima volta.
- Laço aninhado: o de dentro roda inteiro a cada volta do de fora.
- `for (const item of lista)` → cada valor. `for (const chave in objeto)` → cada chave (valor em `objeto[chave]`).
- Travou? **Ctrl + C**.

---

## Exercícios

Crie um arquivo `exercicios.js` e rode com `node exercicios.js`. Se um exercício travar o terminal, aperte **Ctrl + C** e confira a condição do laço.

Os exercícios de 1 a 6 fixam o básico. O 7 e o 8 (médios) juntam várias ideias da aula. O 9 e o 10 (difíceis) pedem planejamento: escreva as regras em português antes de programar.

---

### Exercício 1: A contagem regressiva do lançamento

No estande da feira, o telão vai fazer a contagem regressiva pro lançamento da nova plantadeira. Crie um `for` que exiba os números de **10 até 1**, um por linha. Quando o laço terminar, exiba a mensagem `Lançamento!`.

> Dica: o contador precisa **descer**. Repense a condição e o incremento.

---

### Exercício 2: A tabela de preços do balcão

O vendedor do balcão quer uma tabela pra consultar rápido quanto custam de 1 a 10 kits de discos de corte.

Crie uma variável `preco = 180` e use um `for` pra exibir as dez linhas, neste formato:

```text
1 x R$ 180 = R$ 180
2 x R$ 180 = R$ 360
...
10 x R$ 180 = R$ 1800
```

---

### Exercício 3: O fechamento do caixa

O balcão vendeu **7 kits de discos de corte** hoje, todos a **R$ 180**.

Sem usar multiplicação, use um `for` e um acumulador pra somar o valor de cada kit vendido, exibindo o total parcial a cada venda (`Venda 1 - total parcial: R$ 180`). No fim do laço, exiba o faturamento com o rótulo `Faturamento do dia:`.

Depois, confira o resultado imprimindo `7 * 180` e compare os dois valores: os dois devem dar `1260`.

---

### Exercício 4: O sorteio da feira

Na feira, a revenda distribuiu senhas numeradas de **1 a 30**. Só as senhas **pares** concorrem ao brinde extra.

- Percorra os números de 1 a 30 com um `for`.
- Exiba no console **só** as senhas pares (use `%` e `if`).
- Conte quantas senhas pares foram encontradas, guardando o resultado numa variável `totalPares`, e exiba esse total no fim. Ele deve dar `15`.

---

### Exercício 5: O boleto parcelado

A revenda precisa mostrar ao cliente como ficou o parcelamento da compra.

Crie uma função `gerarParcelas` que receba dois parâmetros: `valorTotal` e `quantidadeParcelas`. Dentro dela, calcule o valor de cada parcela e use um `for` pra exibir uma linha por parcela, neste formato:

```text
Parcela 1 de 3: R$ 300
```

Teste a função com `gerarParcelas(900, 3)` (3 parcelas de R$ 300) e `gerarParcelas(1200, 12)` (12 parcelas de R$ 100).

---

### Exercício 6: O resumo do pedido

O pedido da Agro Silva chegou assim:

```js
const itens = ["Plantadeira", "Kit de discos de corte", "Pulverizador"]
const precos = { plantadeira: 45000, kitDiscos: 180, pulverizador: 12000 }
```

1. Com `for...of`, imprima cada item com um marcador (`- Plantadeira`) e conte os itens num contador, **sem** usar `.length`. No fim, imprima `3 itens no pedido`.
2. Com `for...in`, imprima a tabela de preços no formato `plantadeira: R$ 45000` e some os três preços num acumulador. No fim, imprima `Soma da tabela: R$ 57180`.

> Dica: no `for...in`, a variável recebe a chave; o valor vem de `precos[chave]`.

---

### Exercício 7 (Médio): A pirâmide de asteriscos

1. Usando **dois laços aninhados** e uma variável de texto como acumulador, exiba no console uma pirâmide de 5 linhas:

```text
*
**
***
****
*****
```

> Dica: o laço de fora controla a linha (1 a 5). O de dentro monta o texto daquela linha, concatenando um `"*"` de cada vez. O `console.log` da linha acontece **depois** do laço de dentro terminar.

---

2. Coloque esse código numa função `desenharPiramide(altura)` e teste com `desenharPiramide(3)`.
3. Escreva `desenharPiramideInvertida(altura)`, que começa pela linha mais larga e vai diminuindo. `desenharPiramideInvertida(3)` imprime:

```text
***
**
*
```

Teste também `desenharPiramide(0)` e `desenharPiramideInvertida(0)`: as duas não devem imprimir nada (nem travar).

---

### Exercício 8 (Médio): A carga do caminhão

O pedido da Agro Silva tem **30 kits** de discos de corte, numerados de 1 a 30. Cada kit pesa **50 kg**, e o caminhão aguenta no máximo **1.000 kg**.

1. Percorra os kits de 1 a 30 com um `for`, somando o peso carregado e imprimindo `Kit 1 carregado`.
2. Os kits com número múltiplo de 7 (7, 14, 21, 28) reprovaram na inspeção: imprima `Kit 7 reprovado` e pule pro próximo com `continue`, **sem** somar o peso.
3. Antes de carregar um kit, confira se ele cabe. Se o peso carregado mais os 50 kg do kit passar de 1.000, imprima `Caminhão cheio no kit 24` e encerre com `break`.
4. Depois do laço, imprima `Carregados: 20 kits (1000 kg)`.

> Dica: o kit que deixa o caminhão com **exatamente** 1.000 kg ainda entra. Se o seu programa parar com 19 kits e 950 kg, olhe o operador da comparação.

---

### Exercício 9 (Difícil): Levar mais pra pagar menos

A tabela de desconto do kit de discos de corte (R$ 180) é esta: até 9 kits, sem desconto; de 10 a 49, 10%; de 50 em diante, 20%. Com essa tabela, às vezes levar **mais** kits sai **mais barato**, e o vendedor quer avisar o cliente.

1. Escreva `calcularDesconto(quantidade)`, que devolve o percentual: `0`, `10` ou `20`.
2. Escreva `calcularTotal(preco, quantidade)`, que usa a primeira e devolve o total já com desconto.
3. Escreva `proximaFaixa(quantidade)`, que devolve a quantidade em que começa a faixa seguinte: `10` pra quem leva menos de 10, `50` pra quem leva menos de 50 e `0` pra quem já está na última faixa.
4. Escreva `mostrarAvisos(preco, quantidadeMaxima)`: com um `for` de 1 até `quantidadeMaxima`, ela imprime um aviso pra cada quantidade em que levar a próxima faixa sai **mais barato**.

---

Teste os totais:

- `calcularTotal(180, 9)` → `1620` e `calcularTotal(180, 10)` → `1620`
- `calcularTotal(180, 49)` → `7938` e `calcularTotal(180, 50)` → `7200`

E `mostrarAvisos(180, 60)` deve imprimir **exatamente 5 linhas**, de 45 a 49 kits:

```text
45 kits: R$ 7290 (50 kits saem por R$ 7200)
...
49 kits: R$ 7938 (50 kits saem por R$ 7200)
```

> [!WARNING]
> Duas armadilhas. Com 9 kits o cliente paga R$ 1620, o **mesmo** que com 10: empate não é "mais barato", então os 9 kits não ganham aviso. E de 50 em diante `proximaFaixa` devolve `0`: se aparecer um aviso do tipo `55 kits: ... (0 kits saem por R$ 0)`, falta conferir se existe próxima faixa antes de comparar.

---

### Exercício 10 (Difícil): O financiamento da plantadeira

O cliente financia a compra de plantadeiras em parcelas mensais, com juros de 1% ao mês sobre o **saldo devedor** (o que ele ainda deve). As regras:

- a **amortização** (quanto da dívida é abatido por mês) é sempre a mesma: valor ÷ número de parcelas;
- os juros do mês são calculados sobre o saldo **antes** de abater a amortização;
- a parcela do mês é amortização + juros; depois de pagar, o saldo cai o valor da amortização;
- dá pra financiar de 1 a 10 parcelas. Fora disso, imprima `Parcelamento inválido: 12x` e não calcule nada.

---

1. Escreva `calcularJuros(saldo, taxa)`, que devolve os juros do mês: `calcularJuros(36000, 1)` → `360`.
2. Escreva `simularFinanciamento(valor, parcelas, taxa)`, que imprime uma linha por mês e, no fim, o total pago e o total de juros.

`simularFinanciamento(45000, 5, 1)` imprime:

```text
Financiamento: R$ 45000 em 5x (juros de 1% ao mês)
Mês 1: parcela R$ 9450 (juros R$ 450) | saldo R$ 36000
Mês 2: parcela R$ 9360 (juros R$ 360) | saldo R$ 27000
Mês 3: parcela R$ 9270 (juros R$ 270) | saldo R$ 18000
Mês 4: parcela R$ 9180 (juros R$ 180) | saldo R$ 9000
Mês 5: parcela R$ 9090 (juros R$ 90) | saldo R$ 0
Total pago: R$ 46350 (R$ 1350 de juros)
```

---

Teste também `simularFinanciamento(90000, 4, 1)` → `Total pago: R$ 92250 (R$ 2250 de juros)`, e `simularFinanciamento(45000, 12, 1)` e `simularFinanciamento(45000, 0, 1)` → parcelamento inválido.

> [!WARNING]
> Se você abater a amortização **antes** de calcular os juros, o primeiro mês sai com juros de R$ 360 em vez de R$ 450, e o total de juros cai pra R$ 900. Dentro do laço, a ordem é: juros, parcela, saldo.
