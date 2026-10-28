# Variáveis e constantes

Um `console.log` mostra um valor na tela e esquece dele logo em seguida. Pra **lembrar** das coisas, o JS usa variáveis. Variável é um nome que você dá a um valor pra usar depois.

> Os exemplos usam o sistema de pedidos de uma revenda de máquinas agrícolas: clientes (como a Agro Silva), produtos (plantadeiras a R$ 45.000, kits de discos de corte a R$ 180) e pedidos com quantidade, desconto e frete.

---

## Tópicos

- Guardando um valor
- let: pode mudar
- const: não muda
- Declarar sem valor
- Regras pros nomes
- Template string: a crase
- Variável muda de tipo (mas não devia)

---

## 1. Guardando um valor

```js
let cliente = "Agro Silva"
console.log(cliente)              // Agro Silva
console.log("Cliente:", cliente)  // Cliente: Agro Silva
```

Leia assim: "`cliente` **recebe** `"Agro Silva"`". O `=` não é "igual", é "recebe".

> Lembrete rápido de `console.log`: ele imprime o que está entre parênteses. Com vírgula, imprime vários valores na mesma linha, separados por um espaço.

---

Três partes:

- `let` → palavra que **declara** (cria) a variável
- `cliente` → o **nome**
- `"Agro Silva"` → o **valor**

Repare: `console.log(cliente)` sem aspas imprime o valor guardado; `console.log("cliente")` com aspas imprime a palavra cliente. Aspas = texto literal; sem aspas = nome de variável.

---

## 2. let: pode mudar

```js
let status = "aberto"
console.log(status)   // aberto

status = "faturado"   // sem let: a variável já existe, só troca o valor
console.log(status)   // faturado
```

Declara uma vez com `let`, troca quantas vezes quiser depois, sem `let`. Escrever `let status` de novo dá `SyntaxError: Identifier 'status' has already been declared`.

---

### Copiar é copiar

Quando uma variável recebe outra, ela recebe uma **cópia** do valor daquele momento:

```js
let status = "rascunho"
let statusAnterior = status   // copia "rascunho"

status = "enviado"
console.log(statusAnterior)   // rascunho → não mudou junto
console.log(status)           // enviado
```

As duas não ficam ligadas: mudar uma não mexe na outra.

---

## 3. const: não muda

```js
const cliente = "Agro Silva"
cliente = "Fazenda Boa Vista"   // TypeError: Assignment to constant variable.
```

`const` é **constante**: recebe valor na declaração e fica assim pra sempre. Quando usar qual?

- **`const` por padrão.** A maior parte dos valores não muda depois de criada.
- **`let` só quando precisar trocar** (contador, status, total que vai acumulando).

Não é frescura: quando você lê `const`, sabe que aquele valor é fixo e não precisa caçar onde ele mudou.

---

> [!NOTE]
> E o `var`? Existe, é o jeito antigo (antes de 2015). Você vai ver em código velho e em tutorial velho. Não use.

---

## 4. Declarar sem valor

```js
let desconto
console.log(desconto)   // undefined → declarada, mas vazia

desconto = 10
console.log(desconto)   // 10
```

Com `const` isso não dá: `const desconto` sem valor é `SyntaxError: Missing initializer in const declaration`. Faz sentido: se não pode mudar depois, tem que nascer com valor.

> Lembrete rápido: `undefined` é o valor de algo que ainda não recebeu valor nenhum.

---

## 5. Regras pros nomes

| Regra | Vale | Não vale |
|---|---|---|
| Começa com letra, `_` ou `$` | `total`, `_temp` | `1total` |
| Sem espaço nem hífen | `valorTotal` | `valor total`, `valor-total` |
| Diferencia maiúsculas | `preco` e `Preco` são duas variáveis diferentes | |
| Sem palavra reservada | `tipo` | `let`, `const`, `if`, `typeof` |

---

E a convenção que todo mundo segue em JS:

- **camelCase**: primeira palavra minúscula, as outras começam em maiúscula: `precoUnitario`, `nomeDoCliente`, `quantidadeEmEstoque`.
- **Sem acento e sem ç**: funciona, mas ninguém faz. `preco`, não `preço`.
- **Nome que diz o que guarda**: `qtd`? `x`? `valor2`? Daqui a uma semana nem você sabe o que é.

---

## 6. Template string: a crase

Juntar texto com variável usando `+` funciona, mas fica feio:

```js
const produto = "Plantadeira"
const quantidade = 2
console.log("Pedido: " + quantidade + " x " + produto)   // Pedido: 2 x Plantadeira
```

Com crase (`` ` ``) e `${}` fica legível:

```js
console.log(`Pedido: ${quantidade} x ${produto}`)   // Pedido: 2 x Plantadeira
```

A crase fica à esquerda do 1 no teclado (em alguns, aperte a tecla e depois espaço).

---

### Dentro do `${ }` vale conta

Tudo que estiver dentro de `${ }` o JS calcula e encaixa no texto:

```js
const preco = 180
const quantidade = 10
console.log(`Subtotal: R$ ${preco * quantidade}`)   // Subtotal: R$ 1800
```

> Lembrete rápido de contas: `+`, `-`, `*` (vezes) e `/` (dividido) funcionam como na calculadora.

Com aspas comuns não funciona: `"Pedido: ${quantidade}"` imprime `${quantidade}` ao pé da letra.

---

### Várias linhas

Dentro da crase, a quebra de linha vale de verdade:

```js
const etiqueta = `Para: Agro Silva
Volumes: 3`
console.log(etiqueta)
// Para: Agro Silva
// Volumes: 3
```

O mesmo resultado sai com `\n`, que quebra a linha dentro de qualquer texto: `"Para: Agro Silva\nVolumes: 3"`.

---

### O texto é montado na hora

A template string é montada **no momento em que a linha roda**. Depois disso ela é só um texto pronto:

```js
let quantidade = 10
const resumo = `${quantidade} kits`

quantidade = 15
console.log(resumo)   // 10 kits → o texto foi montado antes da troca
```

Quer o texto com o valor novo? Monte de novo, depois da troca.

---

## 7. Variável muda de tipo (mas não devia)

```js
let valor = 180
console.log(typeof valor)   // number

valor = "cento e oitenta"
console.log(typeof valor)   // string
```

> Lembrete rápido de `typeof`: ele diz o tipo do valor (`string`, `number`, `boolean`, `undefined`...).

O JS deixa. Mas uma variável que ora é número, ora é texto é fonte de bug. Decida o tipo e mantenha.

---

## Erros comuns

| Código | O que acontece |
|---|---|
| `const cliente = "A"` e depois `cliente = "B"` | `TypeError: Assignment to constant variable.` Se o valor muda, use `let`. |
| `const desconto` | `SyntaxError: Missing initializer in const declaration`. `const` nasce com valor. |
| `let 2via = true` | `SyntaxError: Invalid or unexpected token`. Nome não começa com número: `segundaVia`. |
| `let status` duas vezes | `SyntaxError: Identifier 'status' has already been declared`. Pra trocar o valor, escreva sem `let`. |
| `console.log(Preco)` com a variável `preco` | `ReferenceError: Preco is not defined`. Maiúscula faz diferença. |
| `"Total: ${total}"` | Imprime `${total}` ao pé da letra. Template string é com crase. |

---

## Cheatsheet

- `const nome = valor` → cria e não muda mais. **Use por padrão.**
- `let nome = valor` → cria e pode trocar depois com `nome = outroValor`, sem `let`.
- `let nome` sem valor → `undefined`. `const` sempre nasce com valor.
- `let copia = original` copia o valor daquele momento.
- Nomes em camelCase, sem acento, que digam o que guardam.
- `` `texto ${variavel}` `` → template string. Dentro do `${ }` vale conta.
- A template string é montada na hora em que a linha roda.
- Uma variável, um tipo: não troque número por texto.

---

## Exercícios

Crie um arquivo `exercicios.js` e rode com `node exercicios.js`. Pra que as variáveis de um exercício não briguem com as do outro, coloque cada exercício entre chaves:

```js
{
  const cliente = "Agro Silva"
  console.log(cliente)
}
```

Os exercícios de 1 a 6 fixam o básico. O 7 e o 8 (médios) juntam várias ideias da aula. O 9 e o 10 (difíceis) pedem planejamento: escreva num comentário, em português, o que você precisa fazer antes de programar.

---

### Exercício 1: A ficha do cliente

Crie constantes pra nome, cidade e um boolean dizendo se o cliente está ativo. Imprima uma frase com as três usando template string:

```text
Agro Silva (Ibirubá) — ativo: true
```

---

### Exercício 2: O status do pedido

1. Crie uma variável `status` começando em `"rascunho"`.
2. Mude pra `"enviado"` e depois pra `"faturado"`, imprimindo depois de cada mudança.
3. Use a palavra certa (`let` ou `const`) e explique num comentário por quê.

---

### Exercício 3: Caça aos erros

Corrija o que for preciso pra rodar sem erro:

```js
const transportadora = "Rodoviário Sul"
transportadora = "Expresso RS"
let 2via = true
let nome cliente = "Agro Silva"
console.log(Transportadora)
```

---

### Exercício 4: O troca-troca

Duas variáveis: `caixaA = "parafusos"` e `caixaB = "porcas"`. Faça as duas trocarem de conteúdo **sem** escrever `"parafusos"` ou `"porcas"` de novo.

No fim, deve imprimir `caixaA: porcas` e `caixaB: parafusos`.

> Dica: você vai precisar de uma terceira caixa.

---

### Exercício 5: Antes e depois

1. Declare `let vendedor` sem valor e imprima `typeof vendedor`.
2. Atribua `"Ana"` e imprima o `typeof` de novo.
3. Explique num comentário o que mudou.

---

### Exercício 6: A etiqueta de expedição

Crie `const` pra cliente, cidade, quantidade de volumes e peso total (decimal). Monte **uma única** template string de 3 linhas (com `\n` ou quebrando a linha dentro da crase mesmo) no formato:

```text
Para: Agro Silva — Ibirubá
Volumes: 3
Peso: 42.5 kg
```

---

### Exercício 7 (Médio): Nomes que ninguém entende

O código abaixo funciona, mas está difícil de ler. Reescreva com nomes descritivos em camelCase, `const` em tudo que não muda, `let` só no que muda, e template string no lugar do `+`.

```js
let x = "Agro Silva"
let a2 = "Plantadeira"
let Valor_unit = 45000
let q = 1
console.log("Cliente: " + x + " | " + q + "x " + a2 + " | R$ " + Valor_unit * q)
q = 2
console.log("Cliente: " + x + " | " + q + "x " + a2 + " | R$ " + Valor_unit * q)
```

---

A saída tem que continuar **igual**:

```text
Cliente: Agro Silva | 1x Plantadeira | R$ 45000
Cliente: Agro Silva | 2x Plantadeira | R$ 90000
```

> [!WARNING]
> Nem tudo vira `const`. Uma das variáveis muda no meio do código: se ela virar `const`, o programa para com `TypeError`.

---

### Exercício 8 (Médio): Adivinhe antes de rodar

Escreva num comentário o que cada `console.log` imprime e só depois rode:

```js
let status
const cliente = "Agro Silva"
console.log(status)
status = "rascunho"
console.log("status", status)
let statusAnterior = status
status = "enviado"
console.log(`${cliente}: ${statusAnterior} → ${status}`)
let codigo = 7
console.log(typeof codigo)
codigo = `PED-${codigo}`
console.log(codigo, typeof codigo)
console.log(`cliente`)
console.log(`${cliente}`)
```

> Dica: na linha do `statusAnterior`, ele recebe uma cópia.

---

### Exercício 9 (Difícil): O painel do pedido

A Agro Silva, de Ibirubá, está montando um pedido de kits de discos de corte a R$ 180. Começa com 10 kits, frete de R$ 150 e status `rascunho`.

1. Crie uma variável pra cada dado. Decida entre `const` e `let` pensando no passo 3, e justifique num comentário.
2. Monte uma variável `painel` com uma template string de 4 linhas e imprima:

```text
Pedido de Agro Silva (Ibirubá)
10x Kit de discos de corte = R$ 1800
Frete: R$ 150 | Total: R$ 1950
Status: rascunho
```

---

3. O cliente pede mais 5 kits, ganha frete grátis e o pedido é enviado. Troque **só** os valores que mudaram e imprima o painel de novo:

```text
Pedido de Agro Silva (Ibirubá)
15x Kit de discos de corte = R$ 2700
Frete: R$ 0 | Total: R$ 2700
Status: enviado
```

Os números do painel (1800, 1950, 2700) saem de contas dentro do `${ }`, nunca escritos à mão.

> [!WARNING]
> Se o segundo painel sair igual ao primeiro, a template string foi montada **antes** das trocas. Ela não se atualiza sozinha.

---

### Exercício 10 (Difícil): O rodízio dos caminhões

Três caminhões saem carregados:

```js
let caminhao1 = "plantadeiras"
let caminhao2 = "discos de corte"
let caminhao3 = "pulverizadores"
```

No rodízio, cada carga passa pro caminhão seguinte: a do 1 vai pro 2, a do 2 vai pro 3, e a do 3 volta pro 1.

1. Faça um rodízio usando **uma** variável auxiliar só e sem escrever o nome de nenhuma carga de novo.
2. Imprima a situação com uma template string. Depois de um rodízio:

```text
1: pulverizadores | 2: plantadeiras | 3: discos de corte
```

---

3. Faça mais dois rodízios, imprimindo depois de cada um. Depois do terceiro, as cargas voltam pro lugar do começo:

```text
1: discos de corte | 2: pulverizadores | 3: plantadeiras
1: plantadeiras | 2: discos de corte | 3: pulverizadores
```

> [!WARNING]
> A ordem das atribuições decide tudo. Se você começar com `caminhao2 = caminhao1`, a carga do caminhão 2 some antes de ir pro 3. Escreva em português, antes de programar, qual carga precisa ser guardada primeiro.
