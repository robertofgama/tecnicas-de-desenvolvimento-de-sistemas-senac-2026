# if e else

Sem nenhum desvio, o programa roda de cima pra baixo, linha por linha. Com `if` ele passa a **decidir**: "se isso for verdade, faça aquilo".

> Os exemplos usam o sistema de pedidos de uma revenda de máquinas agrícolas: clientes (como a Agro Silva), produtos (plantadeiras a R$ 45.000, kits de discos de corte a R$ 180) e pedidos com quantidade, desconto e frete.

---

## Tópicos

- if: só se for verdade
- else: senão
- else if: mais de dois caminhos
- Condições compostas
- if dentro de if
- Truthy e falsy
- Bônus: operador ternário

---

## 1. if: só se for verdade

```js
const estoque = 0

if (estoque === 0) {
  console.log("Produto esgotado")
}

console.log("Fim")
```

> Lembrete rápido de comparação: `===` pergunta "é igual?", `!==` "é diferente?", e `>`, `<`, `>=`, `<=` funcionam como na matemática. A resposta é sempre `true` ou `false`.

---

Anatomia:

- `if` + uma **condição** entre parênteses. Condição é qualquer coisa que dê `true` ou `false` (comparações como `estoque === 0` ou `total > 1000`).
- Um **bloco** entre chaves `{ }`: só roda se a condição for `true`.
- O que vem depois do bloco roda de qualquer jeito.

Troque `estoque` pra `5` e rode de novo: "Produto esgotado" some, "Fim" continua.

---

## 2. else: senão

```js
const estoque = 5

if (estoque === 0) {
  console.log("Produto esgotado")
} else {
  console.log("Pode vender")
}
```

Um dos dois blocos **sempre** roda. Nunca os dois, nunca nenhum.

---

## 3. else if: mais de dois caminhos

```js
const quantidade = 50

if (quantidade >= 50) {
  console.log("Desconto de 20%")
} else if (quantidade >= 10) {
  console.log("Desconto de 10%")
} else {
  console.log("Sem desconto")
}
```

---

O JS testa de cima pra baixo e **para no primeiro `true`**. Por isso a ordem importa: se o `quantidade >= 10` viesse primeiro, 50 unidades cairiam ali e nunca chegariam nos 20%.

Regra prática: do mais específico pro mais geral.

O `else` do final é opcional: é o "nenhum dos anteriores".

---

## 4. Condições compostas

A condição pode juntar várias perguntas:

```js
const estoque = 4
const pagamentoAprovado = true

if (estoque > 0 && pagamentoAprovado) {
  console.log("Entrega liberada")
} else if (estoque > 0) {
  console.log("Aguardando pagamento")   // se chegou aqui, tem estoque; o que falta é o pagamento
} else {
  console.log("Sem estoque")
}
```

> Lembrete rápido de operadores lógicos: `&&` é "e" (as duas precisam ser verdadeiras), `||` é "ou" (basta uma) e `!` é "não" (inverte). O `&&` resolve antes do `||`: na dúvida, use parênteses.

---

## 5. if dentro de if

Dá pra aninhar, mas cada nível a mais deixa o código mais difícil de ler. Dois níveis, ok. Três, pense se `&&` ou `else if` não resolve.

```js
const cliente = "Agro Silva"
const valor = 12000

if (valor > 10000) {
  if (cliente === "Agro Silva") {
    console.log("Pedido grande de cliente antigo: ligar pra agradecer")
  } else {
    console.log("Pedido grande: aprovar com o gerente")
  }
}
```

---

## 6. Truthy e falsy

O JS aceita qualquer valor como condição, não só `true` e `false`. Ele converte. Contam como **falso** (falsy):

`false`, `0`, `""` (texto vazio), `null`, `undefined`, `NaN`

**Todo o resto é verdadeiro** (truthy), inclusive `"0"`, `"false"` e `-1`.

---

```js
const nomeCliente = ""

if (nomeCliente) {
  console.log("Cliente:", nomeCliente)
} else {
  console.log("Cliente não informado")   // texto vazio é falsy
}
```

É prático pra testar "tem valor?", mas cuidado: `if (quantidade)` com `quantidade = 0` cai no else, e 0 pode ser um valor válido. E `-3` é truthy: `if (quantidade)` deixa passar quantidade negativa.

---

## 7. Bônus: operador ternário

Um if/else de uma linha, pra quando a decisão é só "qual valor usar":

```js
const estoque = 5
const situacao = estoque > 0 ? "disponível" : "esgotado"
console.log(situacao)   // disponível
```

Lê-se: "estoque maior que zero **?** então `"disponível"` **:** senão `"esgotado"`". Isso aparece o tempo todo em React. Pra lógica maior que isso, if/else normal.

---

## Erros comuns

| Código | O que acontece |
|---|---|
| `if (status = "aberto")` | Um `=` só **atribui**. Com `let`, não dá erro: a condição vira `"aberto"`, que é truthy, e entra sempre. Com `const`, `TypeError: Assignment to constant variable.` Use `===`. |
| `if (quantidade > 100);` | O ponto e vírgula fecha o `if` ali. O bloco de baixo roda sempre, sem erro nenhum. |
| `if` sem chaves e duas linhas embaixo | Só a **primeira** linha pertence ao `if`; a segunda roda sempre. Use chaves sempre. |
| `if quantidade > 0 {` | `SyntaxError: Unexpected identifier 'quantidade'`. A condição vai entre parênteses. |
| `if (quantidade >= 10 && <= 50)` | `SyntaxError: Unexpected token '<='`. Cada lado do `&&` é uma comparação completa: `quantidade >= 10 && quantidade <= 50`. |
| `>= 10` antes de `>= 50` | Sem erro, mas o 20% nunca acontece: 60 já parou no primeiro. Do mais específico pro mais geral. |

---

## Cheatsheet

- `if (condição) { }` → roda se for `true`.
- `else { }` → senão. Um dos dois sempre roda.
- `else if (outra) { }` → outro caminho. Para no primeiro `true`.
- Ordem: do mais específico pro mais geral.
- Falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`. O resto é truthy.
- `=` atribui, `===` compara. Chaves sempre.
- Ternário: `condição ? seVerdadeiro : seFalso`.

---

## Exercícios

Crie um arquivo `exercicios.js` e rode com `node exercicios.js`. Pra que as variáveis de um exercício não briguem com as do outro, coloque cada exercício entre chaves:

```js
{
  const numero = 7
  console.log(numero)
}
```

Os exercícios de 1 a 6 fixam o básico. O 7 e o 8 (médios) juntam várias ideias da aula. O 9 e o 10 (difíceis) pedem planejamento: escreva num comentário, em português, as regras antes de programar.

---

### Exercício 1: Par ou ímpar

Com `const numero = 7`, imprima `7 é ímpar`. Troque pra 8 e rode de novo: deve sair `8 é par`.

> Dica: o `%` dá o resto da divisão. Um número é par quando `numero % 2` dá `0`.

---

### Exercício 2: Faixa de desconto

Com `preco = 180` e `quantidade`, calcule o total com desconto:

- 20% a partir de 50 unidades;
- 10% a partir de 10;
- nada abaixo disso.

Teste com 5, 10 e 50: os totais devem dar `900`, `1620` e `7200`.

---

### Exercício 3: Validação da quantidade

Antes de salvar um item, valide `quantidade` contra `estoque = 20`:

- menor ou igual a 0 → `Quantidade inválida`
- maior que o estoque → `Só temos 20 em estoque` (o número vem da variável)
- senão → `Item adicionado`

Teste com -3, 500 e 2.

> Lembrete rápido de template string: entre crases, `${estoque}` é trocado pelo valor da variável.

---

### Exercício 4: Status do pedido

Com `const status = "enviado"`, imprima a mensagem certa pro cliente:

- `"rascunho"` → `Pedido ainda não enviado`
- `"enviado"` → `Pedido recebido, aguardando faturamento`
- `"faturado"` → `Nota fiscal emitida`
- `"entregue"` → `Pedido concluído`
- qualquer outra coisa → `Status desconhecido: cancelado`, mostrando o status

---

### Exercício 5: Frete grátis

O frete é grátis se o total do pedido for de R$ 5.000 ou mais **ou** se o cliente for do RS. Senão, custa R$ 150.

Com `total` e `uf`, use o **ternário** pra decidir o valor do frete e imprima o total final. Teste as quatro combinações:

| Total | UF | Total final |
|---|---|---|
| 3.200 | RS | 3200 |
| 3.200 | SC | 3350 |
| 5.000 | SC | 5000 |
| 8.000 | RS | 8000 |

---

### Exercício 6: A classificação do cliente

A revenda classifica os clientes pelo valor comprado no ano:

- 500 mil ou mais → `Ouro`
- de 200 mil a menos de 500 mil → `Prata`
- de 50 mil a menos de 200 mil → `Bronze`
- abaixo de 50 mil → `Sem categoria`

Se o valor for negativo, imprima `Valor inválido`. Teste com 750000, 200000, 49999.99 e -10.

---

### Exercício 7 (Médio): A tabela de frete por região

O frete depende do estado e do total do pedido:

1. RS → grátis.
2. SC ou PR → R$ 150, mas grátis a partir de R$ 10.000.
3. Qualquer outro estado → R$ 300, mas cai pra R$ 150 a partir de R$ 20.000.

Imprima no formato `Frete pra SC (R$ 9999): R$ 150`.

---

Teste os cinco pedidos:

| UF | Total | Frete |
|---|---|---|
| RS | 1.000 | 0 |
| SC | 9.999 | 150 |
| PR | 10.000 | 0 |
| SP | 20.000 | 150 |
| BA | 19.999 | 300 |

> Dica: "SC ou PR" é `uf === "SC" || uf === "PR"`. Cada lado do `||` é uma comparação completa.

---

### Exercício 8 (Médio): Caça aos erros

Este código tem **quatro** erros da tabela de erros comuns. Um trava o programa; os outros três não dão erro nenhum, só decidem errado.

```js
let status = "enviado"
const quantidade = 60

if (status = "rascunho") {
  console.log("Pedido ainda não enviado")
}
if (quantidade >= 10) {
  console.log("Desconto de 10%")
} else if (quantidade >= 50) {
  console.log("Desconto de 20%")
}
if (quantidade > 100);
{
  console.log("Pedido acima do limite: precisa de aprovação")
}
if (quantidade >= 10 && <= 49) {
  console.log("Pedido médio")
}
```

---

Depois de corrigir, com `status = "enviado"` e `quantidade = 60` o programa imprime **uma linha só**:

```text
Desconto de 20%
```

Troque pra `status = "rascunho"` e `quantidade = 15`. Agora devem sair três linhas:

```text
Pedido ainda não enviado
Desconto de 10%
Pedido médio
```

---

### Exercício 9 (Difícil): A liberação do pedido

Antes de liberar um pedido, o sistema confere as regras **nesta ordem** e para na primeira que falhar:

1. quantidade menor ou igual a 0 → `Quantidade inválida`
2. quantidade maior que o estoque → `Estoque insuficiente: só temos 20` (o número vem do estoque)
3. total acima do limite de crédito **e** pagamento não aprovado → `Aguardando pagamento`
4. passou por tudo → `Pedido liberado`

Guarde a mensagem numa variável `mensagem` e imprima. Na linha de baixo, imprima `Liberado? sim` ou `Liberado? não`, decidindo com um ternário a partir da `mensagem`.

---

Teste com os cinco pedidos:

| Qtd. | Estoque | Total | Limite | Pagamento aprovado? | Esperado |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 10.000 | não | Quantidade inválida |
| 30 | 20 | 5.400 | 10.000 | não | Estoque insuficiente: só temos 20 |
| 2 | 5 | 90.000 | 50.000 | não | Aguardando pagamento |
| 2 | 5 | 90.000 | 50.000 | sim | Pedido liberado |
| 10 | 20 | 1.800 | 10.000 | não | Pedido liberado |

> [!WARNING]
> O primeiro pedido tem quantidade 0 **e** estoque 0. A resposta certa é `Quantidade inválida`, e não a de estoque: a ordem dos `else if` decide qual regra fala primeiro.

---

### Exercício 10 (Difícil): O preço final do pedido

Um pedido de kits de discos de corte (R$ 180 cada) segue estas regras, nesta ordem:

1. Sem nome de cliente (texto vazio) → `Cliente não informado`, e não calcula nada.
2. Quantidade menor ou igual a 0 → `Quantidade inválida`, e não calcula nada.
3. Desconto por quantidade: 20% a partir de 50 kits, 10% a partir de 10.
4. Pagamento à vista: mais 5% de desconto, sobre o valor **já com** o desconto do passo 3.
5. Frete: grátis pro RS. Pros outros estados, grátis se o valor com **todos** os descontos for de R$ 5.000 ou mais; senão, R$ 150.

---

Com `cliente = "Agro Silva"`, `uf = "SC"`, `quantidade = 31` e `aVista = true`, imprima (a linha do pagamento sai de um ternário):

```text
Agro Silva (SC): 31 kits
Subtotal: R$ 5580.00
Com desconto (10%): R$ 5022.00
Pagamento: à vista (-5%)
Frete: R$ 150.00
Total: R$ 4920.90
```

---

Teste também:

- `"Agro Silva"`, `"SC"`, 50 kits, à vista → `Com desconto (20%): R$ 7200.00`, frete `R$ 0.00`, total `R$ 6840.00`
- `"Fazenda Boa Vista"`, `"RS"`, 5 kits, a prazo → `Com desconto (0%): R$ 900.00`, `Pagamento: a prazo`, total `R$ 900.00`
- `""`, `"RS"`, 10 kits → `Cliente não informado`
- `"Agro Silva"`, `"SC"`, 0 kits → `Quantidade inválida`

> [!WARNING]
> Com 31 kits, o valor com o desconto de 10% dá R$ 5.022, o que daria frete grátis. Mas o desconto à vista leva o valor pra R$ 4.770,90, e aí o frete é cobrado. Calcule o frete **depois** de todos os descontos.
