# Operadores

Variável guarda. Operador **faz alguma coisa** com o que está guardado: soma, compara, combina. São três famílias: aritméticos, de comparação e lógicos.

> Os exemplos usam o sistema de pedidos de uma revenda de máquinas agrícolas: clientes (como a Agro Silva), produtos (plantadeiras a R$ 45.000, kits de discos de corte a R$ 180) e pedidos com quantidade, desconto e frete.

---

## Tópicos

- Aritméticos: fazer conta
- O resto da divisão
- Ordem das contas e atalhos
- Decimais e toFixed
- O `+` com texto
- Comparação: perguntar
- `==` e `===`
- Lógicos: combinar perguntas

---

## 1. Aritméticos: fazer conta

| Operador | Nome | Exemplo | Resultado |
|---|---|---|---|
| `+` | soma | `180 + 20` | `200` |
| `-` | subtração | `180 - 20` | `160` |
| `*` | multiplicação | `180 * 2` | `360` |
| `/` | divisão | `180 / 2` | `90` |
| `%` | resto da divisão | `7 % 2` | `1` |
| `**` | potência | `2 ** 3` | `8` |

---

```js
const preco = 180
const quantidade = 10
const total = preco * quantidade
console.log(total)   // 1800
```

> Lembrete rápido de variáveis: `const` cria uma variável que não muda mais; `let` cria uma que pode receber outro valor depois.

Troque a `quantidade` pra `25` e rode de novo.

---

## 2. O resto da divisão

`%` devolve o que **sobra** da divisão inteira.

```js
console.log(10 % 3)   // 1 → 10 = 3 x 3, sobra 1
console.log(8 % 2)    // 0 → dividiu certinho: 8 é par
console.log(7 % 2)    // 1 → sobrou: 7 é ímpar
console.log(50 % 12)  // 2 → 50 discos em caixas de 12: 4 caixas e sobram 2
```

E as 4 caixas? Tire a sobra e divida: `(50 - 50 % 12) / 12` dá `48 / 12`, que é `4`.

---

## 3. Ordem das contas e atalhos

Mesma regra da escola: `*` e `/` antes de `+` e `-`. Parênteses mandam em tudo.

```js
console.log(2 + 3 * 4)     // 14
console.log((2 + 3) * 4)   // 20
```

Na dúvida, use parênteses. Ninguém vai te julgar.

---

### Atalhos

```js
let estoque = 10
estoque = estoque + 5   // 15
estoque += 5            // 20 → mesma coisa, mais curto
estoque -= 3            // 17
estoque *= 2            // 34
estoque++               // 35 → soma 1
estoque--               // 34 → tira 1
```

Os atalhos mudam o valor guardado, então só funcionam com `let`.

---

## 4. Decimais e toFixed

```js
console.log(0.1 + 0.2)                // 0.30000000000000004 (sério)
console.log((0.1 + 0.2).toFixed(2))   // "0.30" → arredonda pra 2 casas
```

Acontece em qualquer linguagem que use ponto flutuante, não é só o JS. Pra mostrar dinheiro, `toFixed(2)` resolve.

> [!WARNING]
> O `toFixed` devolve **texto**. Faça todas as contas antes e use o `toFixed` só na hora de mostrar o valor.

---

## 5. O `+` com texto

Com números, soma. Com **texto, junta** (concatena). E basta um dos lados ser texto:

```js
console.log(5 + 5)               // 10
console.log("5" + 5)             // "55"  ← juntou texto
console.log("5" - 5)             // 0     ← o - só sabe fazer conta, então converte
console.log("Total: " + 10 + 5)  // "Total: 105" (resolve da esquerda pra direita)
```

---

Isso aparece muito quando o valor vem de um formulário, que **sempre** entrega texto. A solução é converter antes com `Number()`:

```js
const digitado = "180"
console.log(Number(digitado) + 20)   // 200
console.log(Number("abc"))           // NaN → "Not a Number": não deu pra converter
console.log(Number("1.800,50"))      // NaN → o JS não entende o formato brasileiro
```

Pra montar uma frase com valores, a template string evita a confusão do `+`:

```js
console.log(`Total: ${10 + 5}`)   // Total: 15
```

> Lembrete rápido de template string: o texto vai entre crases, e o JS calcula o que está dentro de `${ }`.

---

## 6. Comparação: perguntar

O resultado é sempre um boolean: `true` ou `false`.

| Operador | Pergunta | Exemplo | Resultado |
|---|---|---|---|
| `>` | maior? | `10 > 5` | `true` |
| `<` | menor? | `10 < 5` | `false` |
| `>=` | maior ou igual? | `10 >= 10` | `true` |
| `<=` | menor ou igual? | `9 <= 10` | `true` |
| `===` | igual (valor **e** tipo)? | `10 === 10` | `true` |
| `!==` | diferente? | `10 !== 5` | `true` |

---

```js
const estoque = 4
const pedido = 10
console.log(pedido <= estoque)   // false → não dá pra atender
```

Dá pra guardar a resposta numa variável, com um nome que diga a pergunta:

```js
const podeAtender = pedido <= estoque
console.log("Pode atender?", podeAtender)   // Pode atender? false
```

---

## 7. `==` e `===`

```js
console.log("5" == 5)    // true  → == converte antes de comparar (perigoso)
console.log("5" === 5)   // false → === compara valor E tipo
```

Com `==`, `"0" == false` dá `true`, `"" == 0` dá `true`... Esquece que `==` existe. Use `===` e `!==` sempre.

> [!CAUTION]
> `=` é atribuição ("recebe"), `===` é comparação ("é igual?"). Trocar os dois é o bug clássico.

---

## 8. Lógicos: combinar perguntas

| Operador | Nome | Verdadeiro quando... |
|---|---|---|
| `&&` | E | **os dois** lados são verdadeiros |
| `\|\|` | OU | **pelo menos um** lado é verdadeiro |
| `!` | NÃO | inverte: `!true` é `false` |

```js
const temEstoque = true
const pagamentoAprovado = false

console.log(temEstoque && pagamentoAprovado)   // false → faltou o pagamento
console.log(temEstoque || pagamentoAprovado)   // true  → um já basta
console.log(!temEstoque)                       // false
```

---

Juntando com comparações:

```js
const quantidade = 15
console.log(quantidade >= 10 && quantidade < 50)   // true → está na faixa de 10 a 49
```

`&&` resolve antes de `||`. Se misturar os dois, use parênteses pra deixar claro:

```js
const estaLogado = true
const ehAdmin = false
const ehDono = true
console.log(estaLogado && (ehAdmin || ehDono))   // true
```

---

## Erros comuns

| Código | O que acontece |
|---|---|
| `"10" + 2` | Dá `"102"`: com texto, o `+` junta. Converta antes: `Number("10") + 2`. |
| `subtotal.toFixed(2) + 150` | Dá `"1800.00150"`: o `toFixed` devolveu texto. Some antes: `(subtotal + 150).toFixed(2)`. |
| `0.1 + 0.2 === 0.3` | Dá `false`: o resultado é `0.30000000000000004`. Pra mostrar, use `toFixed`. |
| `Number("1.800,50")` | Dá `NaN`: o JS só entende ponto como decimal e nada de separador de milhar. |
| `total >= 5000 \|\| uf = "RS"` | `SyntaxError: Invalid left-hand side in assignment`. Um `=` só atribui: compare com `===`. |
| `quantidade >= 10 && <= 49` | `SyntaxError: Unexpected token '<='`. Cada lado do `&&` é uma comparação completa: `quantidade >= 10 && quantidade <= 49`. |

---

## Cheatsheet

- Aritméticos: `+ - * / % **`. Parênteses na dúvida.
- `%` = resto. `numero % 2 === 0` → par.
- Atalhos: `+= -= *= ++ --` (só com `let`).
- `toFixed(2)` mostra com 2 casas e devolve **texto**: use no fim.
- `+` com texto junta. Converta com `Number()` antes de somar.
- Comparação devolve boolean: `> < >= <=`.
- **Sempre `===` e `!==`.** `=` atribui.
- `&&` (e), `||` (ou), `!` (não). `&&` antes de `||`: use parênteses.

---

## Exercícios

Crie um arquivo `exercicios.js` e rode com `node exercicios.js`. Pra que as variáveis de um exercício não briguem com as do outro, coloque cada exercício entre chaves:

```js
{
  const preco = 180
  console.log(preco * 2)
}
```

Os exercícios de 1 a 6 fixam o básico. O 7 e o 8 (médios) juntam várias ideias da aula. O 9 e o 10 (difíceis) pedem planejamento: escreva num comentário, em português, as regras antes de programar.

---

### Exercício 1: A calculadora do pedido

Com `preco = 180`, `quantidade = 10` e `frete = 150`, calcule e imprima:

1. o subtotal;
2. o desconto de 10% sobre o subtotal;
3. o total (subtotal menos desconto, mais frete), com `toFixed(2)`.

Os resultados devem ser `1800`, `180` e `1770.00`.

---

### Exercício 2: As caixas de discos

Discos de corte vão em caixas de 12. Com `discos = 50`, imprima quantas caixas fechadas dá pra montar e quantos discos sobram:

```text
4 caixas fechadas, sobram 2 discos
```

Troque pra `discos = 120` e confira: `10 caixas fechadas, sobram 0 discos`.

> Dica: `%` dá a sobra; dividindo os que **não** sobraram por 12 você tem as caixas.

---

### Exercício 3: Adivinhe antes de rodar

Escreva num comentário o resultado de cada linha e só depois rode:

```js
console.log("10" + 1)
console.log("10" - 1)
console.log(10 + 1 + "1")
console.log("3" * "4")
console.log(7 % 3)
console.log(2 ** 10)
console.log(10 / 4)
```

---

### Exercício 4: Dois iguais ou três iguais

Preveja e depois rode:

```js
console.log(180 == "180")
console.log(180 === "180")
console.log(0 == false)
console.log(0 === false)
console.log("" == 0)
console.log(null == undefined)
console.log(null === undefined)
```

Depois escreva num comentário qual dos dois você vai usar daqui pra frente.

---

### Exercício 5: A meta do mês

Com `meta = 250000` e `vendido = 212500`, imprima:

1. o percentual atingido, com 1 casa decimal: `85.0%`;
2. quanto falta pra bater a meta: `37500`;
3. um boolean dizendo se já bateu: `false`.

Troque `vendido` pra `250000` e confira se o boolean vira `true`.

---

### Exercício 6: Liberar a entrega?

Com as variáveis abaixo, imprima um único boolean que diga se a entrega pode sair. A regra: tem estoque suficiente **e** (o pagamento foi aprovado **ou** o cliente tem crédito liberado).

```js
const estoque = 20
const quantidadePedida = 8
const pagamentoAprovado = false
const creditoLiberado = true
```

Deve dar `true`. Depois troque `creditoLiberado` pra `false` e veja o resultado mudar.

---

### Exercício 7 (Médio): O formulário que só entrega texto

O formulário de pedidos entregou estes valores:

```js
const precoDigitado = "180"
const quantidadeDigitada = "12"
const freteDigitado = "150"
```

1. Adivinhe e depois rode: o que imprime `precoDigitado * quantidadeDigitada + freteDigitado`?
2. Converta os três com `Number()` e calcule o total certo: `2310`.
3. Imprima `Total: R$ 2310.00`, usando `toFixed(2)` só no fim.

---

4. Crie `const quantidadeValida = quantidade > 0` e imprima. Depois troque `quantidadeDigitada` pra `"doze"` e depois pra `"0"`: nos dois casos `quantidadeValida` deve dar `false`.

> [!WARNING]
> No passo 1, o `*` converte o texto pra número, mas o `+` não: ele junta. Por isso o resultado não é nem `2310` nem um erro.

---

### Exercício 8 (Médio): Caça aos erros

O código abaixo tem **quatro** erros da tabela de erros comuns. Dois travam o programa; dois só imprimem errado.

```js
const preco = 180
const quantidade = "10"   // veio do formulário: é texto
const brinde = 2          // kits de brinde, que não são cobrados
const uf = "SC"

const totalDeKits = quantidade + brinde
const subtotal = preco * quantidade
const comFrete = subtotal.toFixed(2) + 150
const freteGratis = subtotal >= 5000 || uf = "RS"
const pedidoMedio = totalDeKits >= 10 && <= 49

console.log(`Kits: ${totalDeKits}`)
console.log(`Total com frete: R$ ${comFrete}`)
console.log("Frete grátis?", freteGratis)
console.log("Pedido médio?", pedidoMedio)
```

---

Corrija até a saída ficar assim:

```text
Kits: 12
Total com frete: R$ 1950.00
Frete grátis? false
Pedido médio? true
```

> Dica: corrija primeiro os que travam (`SyntaxError`). Só depois o programa roda e mostra os outros dois.

---

### Exercício 9 (Difícil): A expedição em caixas e paletes

A expedição embala os kits de discos de corte assim:

- cada **caixa** leva 12 kits; o que não fecha uma caixa vai solto;
- cada **palete** leva 8 caixas; as caixas que não fecham um palete vão soltas;
- cada kit pesa 5 kg, e o caminhão leva no máximo 1.200 kg.

Com `const kits = 250`, imprima:

```text
250 kits: 20 caixas cheias e 10 kits soltos
20 caixas: 2 paletes cheios e 4 caixas soltas
Peso: 1250 kg | Cabe no caminhão? false
```

---

Teste também com `240` e `11`:

```text
240 kits: 20 caixas cheias e 0 kits soltos
20 caixas: 2 paletes cheios e 4 caixas soltas
Peso: 1200 kg | Cabe no caminhão? true

11 kits: 0 caixas cheias e 11 kits soltos
0 caixas: 0 paletes cheios e 0 caixas soltas
Peso: 55 kg | Cabe no caminhão? true
```

> [!WARNING]
> Com 240 kits o peso dá **exatamente** 1.200 kg, e isso cabe. Se der `false`, confira o operador da comparação. E repare que os paletes saem das caixas cheias, não dos kits.

---

### Exercício 10 (Difícil): A regra do crédito

Um pedido de kits de discos de corte (R$ 180 cada, mais R$ 150 de frete) só é liberado se tiver estoque **e**, além disso, se for pago à vista **ou** se o cliente tiver cadastro ativo, nenhum dia de atraso e o total couber no limite de crédito.

1. Crie uma variável pra cada dado: `quantidade`, `estoque`, `aVista`, `cadastroAtivo`, `diasEmAtraso` e `limiteCredito`.
2. Crie um boolean pra cada pergunta (`temEstoque`, `semAtraso`, `dentroDoLimite`) e junte tudo em `liberado`.
3. Imprima `Total: R$ 1950 | Liberado? true`.

---

Teste os cinco pedidos trocando os valores:

| Qtd. | Estoque | À vista | Cadastro ativo | Dias de atraso | Limite | Liberado? |
|---|---|---|---|---|---|---|
| 10 | 20 | não | sim | 0 | 5.000 | `true` |
| 30 | 20 | sim | sim | 0 | 10.000 | `false` |
| 10 | 20 | não | sim | 3 | 5.000 | `false` |
| 10 | 20 | sim | não | 15 | 0 | `true` |
| 50 | 60 | não | sim | 0 | 9.000 | `false` |

> [!WARNING]
> O segundo pedido é a armadilha: é à vista e o cliente está em dia, mas não tem estoque. Sem parênteses, o `&&` resolve antes do `||` e ele sai liberado. E no último, os kits dão R$ 9.000, mas o frete leva o total a R$ 9.150.
