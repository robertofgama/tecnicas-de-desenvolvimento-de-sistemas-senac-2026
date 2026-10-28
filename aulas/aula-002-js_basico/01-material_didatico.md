# JavaScript básico: console.log e tipos

JavaScript (JS) é a linguagem que faz a tela **reagir**: a tela mostra, o JS reage ao que a pessoa faz nela. A meta aqui é mais humilde: fazer o JS falar com a gente.

> Os exemplos usam o sistema de pedidos de uma revenda de máquinas agrícolas: clientes (como a Agro Silva), produtos (plantadeiras a R$ 45.000, kits de discos de corte a R$ 180) e pedidos com quantidade, desconto e frete.

---

## Tópicos

- Onde o JS roda
- Primeiro programa
- console.log em detalhe
- Comentários
- Tipos básicos
- typeof: perguntando o tipo

---

## 1. Onde o JS roda

Em dois lugares, e quem trabalha com JS usa os dois:

| Lugar | Como abrir | Pra que serve |
|---|---|---|
| Navegador | `F12` → aba **Console** | Testar uma linha rapidinho |
| Node.js | Terminal → `node arquivo.js` | Rodar um arquivo inteiro |

É a mesma linguagem nos dois. O que muda é o que tem em volta: no navegador existe a página (botões, `alert`); no Node existe o computador (arquivos, servidor).

---

## 2. Primeiro programa

1. Crie uma pasta `aula-js_basico` e abra ela no VS Code.
2. Crie o arquivo `primeiro.js` com uma linha:

```js
console.log("Bem-vindo ao sistema de pedidos!")
```

3. Abra o terminal do VS Code (menu **Terminal → New Terminal**, ou `Ctrl + '` no teclado ABNT2) e rode:

```bash
node primeiro.js
```

Apareceu a frase? Pronto, você programou. 🎉

---

`console.log` é o jeito de o programa "falar". Vai ser seu melhor amigo pra descobrir o que está acontecendo no código.

```text
$ node primeiro.js
Bem-vindo ao sistema de pedidos!
```

Troque a frase, salve e rode de novo. O Node sempre roda a versão **salva** do arquivo: se nada mudou, confira se você salvou (`Ctrl + S`).

---

## 3. console.log em detalhe

```js
console.log("Pedido salvo")                // texto
console.log(42)                            // número
console.log("Pedido nº", 7)                // vírgula = imprime os dois, com espaço no meio
console.log("Itens:", 2, "Total:", 1800)   // quantos valores quiser
console.log()                              // linha em branco
```

Cada `console.log` imprime em uma linha nova.

> [!TIP]
> A vírgula já coloca **um espaço** entre os valores. `console.log("Itens:", 2)` imprime `Itens: 2`. Se você escrever `"Itens: "` (com espaço no fim), sai `Itens:  2`, com dois espaços.

---

## 4. Comentários

```js
// Isso é um comentário de uma linha. O JS ignora.

/*
  Isso é um comentário
  de várias linhas.
*/

console.log("Isso roda") // comentário no fim da linha também vale
```

Use pra explicar o *porquê* de algo ou pra "desligar" uma linha sem apagar. No VS Code, `Ctrl + ;` comenta e descomenta a linha.

---

## 5. Tipos básicos

Todo valor em JS tem um **tipo**. Os que importam aqui:

| Tipo | Exemplos | Pra que serve |
|---|---|---|
| `string` | `"Plantadeira"`, `'Ana'` | Texto |
| `number` | `7`, `180`, `3.5`, `-2` | Números, inteiros ou decimais |
| `boolean` | `true`, `false` | Sim ou não |
| `undefined` | `undefined` | "Ainda não tem valor" |
| `null` | `null` | "Vazio de propósito" |

---

### string: texto entre aspas

```js
console.log("Disco de corte")   // aspas duplas
console.log('Disco de corte')   // aspas simples, mesma coisa
console.log("Ela disse 'oi'")   // uma dentro da outra, sem problema
console.log("Preço: 180")       // isso é TEXTO, não número: está entre aspas
console.log("linha 1\nlinha 2") // \n quebra a linha
```

As aspas simples e duplas funcionam igual. Escolha uma e use sempre: aqui a gente usa as duplas.

---

### number: sem aspas, com ponto

```js
console.log(180)    // inteiro
console.log(3.5)    // decimal usa PONTO, não vírgula
console.log(3,5)    // isso imprime "3 5": a vírgula separa dois valores!
console.log(-2)
```

Também não existe separador de milhar: `45.000` é **quarenta e cinco** (o ponto é a casa decimal). Quarenta e cinco mil se escreve `45000`.

---

### boolean: true ou false

```js
console.log(true)
console.log(false)
console.log(10 > 5)   // true: uma comparação também vira boolean
```

`true` e `false` vão **sem aspas**. Com aspas, `"true"` é só um texto que por acaso tem essas letras.

---

### undefined e null

```js
console.log(undefined)   // "nada" por acidente: algo que ainda não recebeu valor
console.log(null)        // "nada" de propósito: você disse que está vazio
```

Os dois significam "não tem nada aqui". A diferença é a intenção: `null` alguém escreveu de propósito.

---

## 6. typeof: perguntando o tipo

```js
console.log(typeof "Ana")      // string
console.log(typeof 180)        // number
console.log(typeof 3.5)        // number (não existe tipo "decimal", é tudo number)
console.log(typeof true)       // boolean
console.log(typeof undefined)  // undefined
console.log(typeof null)       // object  ← bug histórico do JS; todo mundo convive
console.log(typeof "180")      // string! Entre aspas é texto.
```

A resposta do `typeof` é sempre um **texto** com o nome do tipo: `"string"`, `"number"`, `"boolean"`...

---

### Na tela, 180 e "180" são iguais

```js
console.log(180)              // 180
console.log("180")            // 180
console.log(typeof 180)       // number
console.log(typeof "180")     // string
```

O `console.log` não mostra as aspas, então um número e um texto com os mesmos algarismos aparecem iguais. Quando a dúvida for "isso é número ou texto?", pergunte pro `typeof`.

---

## Erros comuns

| Código | O que acontece |
|---|---|
| `console.log(Olá)` | `ReferenceError: Olá is not defined`. Sem aspas, o JS acha que é um nome. Correção: `console.log("Olá")`. |
| `console.log("Olá)` | `SyntaxError: Invalid or unexpected token`. Faltou fechar a aspa. |
| `Console.log("Olá")` | `ReferenceError: Console is not defined`. O JS diferencia maiúscula: é `console.log`. |
| `console.log("Total:" 1800)` | `SyntaxError: missing ) after argument list`. Faltou a vírgula entre os valores. |
| `console.log(3,5)` | Imprime `3 5`: a vírgula separa valores. Decimal é com ponto: `3.5`. |
| `console.log("linha 1/nlinha 2")` | Imprime `/n` na tela. A quebra de linha é com **contrabarra**: `\n`. |

Leia a mensagem de erro! Ela diz o tipo (`ReferenceError`, `SyntaxError`) e a linha onde aconteceu.

---

## Cheatsheet

- `console.log(...)` imprime e pula pra linha seguinte.
- Vírgula imprime vários valores na mesma linha, com um espaço entre eles.
- `\n` dentro do texto quebra a linha.
- `//` comentário de uma linha; `/* */` de várias.
- `string` vai entre aspas; `number` usa ponto decimal e não tem separador de milhar.
- `boolean`: `true` ou `false`, sem aspas.
- `undefined` é "ainda sem valor"; `null` é "vazio de propósito".
- `typeof valor` diz o tipo. `typeof null` dá `object`.
- Ponto e vírgula no fim da linha é opcional. Aqui a gente não usa.

---

## Exercícios

Crie um arquivo `exercicios.js` e rode com `node exercicios.js`. Se o terminal mostrar um erro, leia a mensagem: ela diz a linha.

Os exercícios de 1 a 6 fixam o básico. O 7 e o 8 (médios) juntam várias ideias da aula. O 9 e o 10 (difíceis) pedem planejamento: escreva num comentário, em português, o que você precisa fazer antes de programar.

---

### Exercício 1: O crachá da feira

A revenda vai a uma feira agrícola e cada vendedor ganha um crachá. Imprima o nome do vendedor (`Ana`), o setor (`Comercial`) e um emoji que represente a revenda, cada um em uma linha.

Depois imprima os três na mesma linha, com um único `console.log`:

```text
Ana Comercial 🚜
```

---

### Exercício 2: A ficha do produto

Imprima estas três linhas, com um `console.log` por linha. O preço é número e "em estoque" é boolean, não texto.

```text
Produto: Kit de discos de corte
Preço: 180.5
Em estoque: true
```

> Dica: separe o rótulo do valor com vírgula: `console.log("Preço:", ...)`.

---

### Exercício 3: Adivinhe antes de rodar

Escreva num comentário o que cada linha imprime e só depois rode pra conferir:

```js
console.log(typeof "180")
console.log(typeof 180)
console.log(typeof 180.0)
console.log(typeof false)
console.log(typeof "false")
console.log(typeof null)
```

---

### Exercício 4: Caça aos erros

Cada linha tem um problema. Corrija as quatro e rode:

```js
console.log(Bem-vindo)
console.log("Pedido nº 7)
Console.Log("Agro Silva")
console.log(1.234,56)
```

Na última, a ideia era imprimir mil duzentos e trinta e quatro reais e cinquenta e seis centavos.

---

### Exercício 5: Vírgula x ponto

1. Imprima o número três e meio.
2. Depois, de propósito, rode `console.log(3,5)`.
3. Escreva num comentário por que saiu diferente.

---

### Exercício 6: O recibo

Usando `\n` dentro de **um único** `console.log`, imprima:

```text
--- Recibo ---
Cliente: Agro Silva
Itens: 12
--------------
```

---

### Exercício 7 (Médio): O cupom do balcão

Imprima exatamente este cupom:

```text
=== Cupom do balcão ===
Cliente: Agro Silva
Kit de discos de corte x 10
Total: 1800
Pago: true
```

1. As duas primeiras linhas saem de **um único** `console.log`, com `\n`.
2. Nas outras três, o `10`, o `1800` e o `true` vão **fora** das aspas, separados por vírgula.
3. No fim, prove os tipos: imprima o `typeof` dos três valores numa linha só. Deve sair `number number boolean`.

> [!WARNING]
> A vírgula já põe um espaço. Se o seu cupom sair `Kit de discos de corte x  10`, com dois espaços, tire o espaço que sobrou dentro das aspas.

---

### Exercício 8 (Médio): A ficha do cadastro

1. Adivinhe antes de rodar: anote num comentário o que cada linha imprime.

```js
console.log(typeof "Agro Silva")
console.log(typeof "45000")
console.log(typeof 45000)
console.log(typeof "true")
console.log(typeof undefined)
console.log(typeof 3,5)
```

---

2. A ficha de um produto tem cinco campos. Imprima um campo por linha, cada um com o valor do tipo certo, e o `typeof` do valor no fim da linha:

| Campo | Valor | Deve imprimir |
|---|---|---|
| Nome | Plantadeira | `Nome: Plantadeira string` |
| Preço | 45 mil | `Preço: 45000 number` |
| Em estoque | sim | `Em estoque: true boolean` |
| Observação | vazia de propósito | `Observação: null object` |
| Desconto | ainda não definido | `Desconto: undefined undefined` |

> Dica: `console.log("Preço:", 45000, typeof 45000)`.

---

### Exercício 9 (Difícil): O relatório quebrado

Este relatório tem **seis** problemas. Alguns travam o programa; outros não dão erro nenhum, só imprimem errado.

```js
// Relatório de vendas do dia
console.log("=== Relatório do dia ===/n")
Console.log("Vendedora:", "Ana")
console.log("Plantadeiras vendidas:", "2")
console.log("Valor da plantadeira:", 45.000)
console.log("Kits vendidos:" 10)
console.log("Meta batida:", "true")
console.log(typeof "2", typeof 45.000, typeof "true")
```

Antes de mexer, rode o código e anote num comentário a mensagem de erro que aparece.

---

Corrija até a saída ficar **exatamente** assim (repare na linha em branco depois do título):

```text
=== Relatório do dia ===

Vendedora: Ana
Plantadeiras vendidas: 2
Valor da plantadeira: 45000
Kits vendidos: 10
Meta batida: true
number number boolean
```

A última linha é a prova: o `typeof` tem que ser aplicado aos **mesmos** valores das linhas de cima, já corrigidos.

> [!WARNING]
> `"2"` e `2` aparecem iguais na tela, e `"true"` e `true` também. Só o `typeof` denuncia. E repare: com um `SyntaxError` o arquivo inteiro não roda, nem a primeira linha. Já o `ReferenceError` deixa rodar tudo o que vem antes dele.

---

### Exercício 10 (Difícil): Engenharia reversa

Alguém apagou o código e só sobrou a saída. Escreva **um** `console.log` por linha que produza exatamente isto:

```text
Plantadeira string
45000 number
45000 string
true boolean
null object
undefined undefined
3.5 number
3 5
string
```

Regras:

- da linha 1 à 7, o `console.log` imprime um valor e o `typeof` **desse mesmo valor**: `console.log(valor, typeof valor)`;
- a linha 8 não usa `typeof`;
- a linha 9 não pode ter aspas nem a palavra `string`.

---

> [!WARNING]
> As linhas 2 e 3 parecem pedir o mesmo valor, mas o tipo é diferente: uma vem de um número, a outra de um texto. E a linha 9 tem a pegadinha: o que o `typeof` devolve é sempre um texto. O que acontece se você perguntar o tipo **dessa resposta**?
