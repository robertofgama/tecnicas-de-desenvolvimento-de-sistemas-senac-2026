# Laços while e do...while

Descontar do estoque **até ele acabar**. Vender **até bater a meta**. Mostrar o menu **até o usuário escolher sair**. Em nenhum desses casos dá pra saber, antes de começar, quantas voltas o laço vai dar: só sabemos **a condição pra continuar**.

> Os exemplos usam o sistema de pedidos de uma revenda de máquinas agrícolas: clientes (como a Agro Silva), produtos (plantadeiras a R$ 45.000, kits de discos de corte a R$ 180) e pedidos com quantidade, desconto e frete.

---

## Tópicos

- O problema: quantas voltas?
- Anatomia do while
- Rastreando o laço passo a passo
- O laço que nunca roda
- O laço infinito
- Consumindo e acumulando
- Sentinela: repetir até alguém dizer "pare"
- break e continue
- do...while: primeiro faz, depois pergunta
- for, while ou do...while?

---

## 1. O problema: quantas voltas?

> Lembrete rápido de `for`: `for (let n = 1; n <= 3; n++) { ... }` repete o bloco juntando na mesma linha a **inicialização** (`let n = 1`), a **condição** (`n <= 3`) e o **incremento** (`n++`, que soma 1).

O `for` é ótimo quando o número de voltas é **conhecido**: 10 linhas de tabela, 5 etiquetas, 12 parcelas.

Agora pense no estoque: tem 20 kits de discos e cada pedido leva 6. Quantos pedidos dá pra atender? Você pode fazer a conta de cabeça, mas o programa não sabe. Ele só sabe a regra: **enquanto** o estoque der pro próximo pedido, atende.

É aí que entra o **`while`** (em português, "enquanto").

---

## 2. Anatomia do while

```js
while (condição) {
  // instruções que serão repetidas
}
```

Só isso: uma condição entre parênteses. **Enquanto** ela for `true`, o bloco repete. Quando virar `false`, o programa segue depois do `}`.

---

As três partes do `for` continuam existindo, mas agora **você** escreve cada uma no seu lugar:

```js
let contador = 1                          // 1. inicialização: ANTES do laço

while (contador <= 3) {                   // 2. condição: nos parênteses
  console.log(`Volta número: ${contador}`)
  contador++                              // 3. incremento: DENTRO do bloco
}
// Volta número: 1
// Volta número: 2
// Volta número: 3
```

> As crases `` ` `` com `${ }` dentro são *template strings*: o JS troca o `${ }` pelo valor da variável.

---

### O mesmo resultado, dos dois jeitos

```js
// for: as três partes juntas, na mesma linha
for (let numero = 1; numero <= 3; numero++) {
  console.log(numero)
}

// while: as três partes espalhadas
let numero = 1
while (numero <= 3) {
  console.log(numero)
  numero++
}
```

Os dois imprimem 1, 2 e 3. Com o número de voltas conhecido, o `for` é mais organizado, porque deixa tudo à vista.

> [!NOTE]
> No `while`, a variável nasce **antes** do laço, então ela continua existindo depois dele. Dá pra consultar em que valor o laço parou.

---

## 3. Rastreando o laço passo a passo

```js
let estoque = 20   // kits de discos de corte

while (estoque >= 6) {
  estoque = estoque - 6
  console.log(`Pedido atendido. Restam ${estoque} kits`)
}
```

| Passo | `estoque` | `estoque >= 6` | O que acontece |
|---|---|---|---|
| Antes | 20 | — | A variável nasce valendo 20 |
| 1ª volta | 20 | `true` | Tira 6 e imprime "Restam 14 kits" |
| 2ª volta | 14 | `true` | Tira 6 e imprime "Restam 8 kits" |
| 3ª volta | 8 | `true` | Tira 6 e imprime "Restam 2 kits" |
| Fim | 2 | `false` | 2 é menor que 6: o laço termina |

Em nenhum lugar está escrito "repita 3 vezes". O 3 é **consequência** da condição. Troque o `20` por `50` e rode de novo.

---

## 4. O laço que nunca roda

A condição é testada **antes** de cada volta. Se ela já começa `false`, o bloco não roda **nenhuma vez**:

```js
let estoque = 0

while (estoque >= 6) {
  console.log("Separando um pedido de 6 kits...")
  estoque = estoque - 6
}

console.log(`Fim. Estoque: ${estoque}`)   // Fim. Estoque: 0
```

"Separando..." nunca aparece, porque `0 >= 6` é `false` desde o início. Não é erro: ninguém deve separar pedido com o estoque zerado.

---

## 5. O laço infinito

É **o** erro clássico do `while`. Como o incremento fica por sua conta, esquecer dele faz a condição nunca mudar:

```js
// ❌ NÃO RODE: falta o contador++ dentro do bloco
let contador = 1

while (contador <= 3) {
  console.log("Sempre a mesma volta...")
}
```

> [!WARNING]
> O `contador` vale 1 pra sempre, `1 <= 3` é sempre `true` e o programa nunca para. Se acontecer, aperte **Ctrl + C** no terminal.
>
> Antes de rodar um `while`, pergunte: **o que, dentro do bloco, vai fazer essa condição virar `false`?** Se não tiver resposta, o laço é infinito.

---

## 6. Consumindo e acumulando

Dois movimentos aparecem o tempo todo. O primeiro é **consumir** um valor até ele acabar:

```js
let tanque = 120            // litros de diesel no trator
const consumoPorHectare = 25
let hectares = 0

while (tanque >= consumoPorHectare) {
  tanque = tanque - consumoPorHectare
  hectares++
}

console.log(`Hectares plantados: ${hectares}`)   // Hectares plantados: 4
console.log(`Sobrou no tanque: ${tanque} L`)     // Sobrou no tanque: 20 L
```

---

O segundo é **acumular** até atingir um alvo. A variável que guarda o resultado, o **acumulador**, nasce **fora** do laço:

```js
const meta = 100000
const precoPlantadeira = 45000
let totalVendido = 0
let vendas = 0

while (totalVendido < meta) {
  totalVendido = totalVendido + precoPlantadeira
  vendas++
}

console.log(`Vendas: ${vendas}`)                  // Vendas: 3
console.log(`Total vendido: R$ ${totalVendido}`)  // Total vendido: R$ 135000
```

O total **passa** da meta (135.000, não 100.000): a última venda acontece porque, no momento do teste, ainda faltava vender.

---

### while dentro de uma função

> Lembrete rápido de função: `function nome(a, b) { ... }` guarda um bloco com nome, e `nome(1, 2)` executa esse bloco com os valores recebidos. O `return` devolve um resultado pra quem chamou.

```js
function contarHectares(tanque, consumoPorHectare) {
  let hectares = 0
  while (tanque >= consumoPorHectare) {
    tanque = tanque - consumoPorHectare
    hectares++
  }
  return hectares   // depois do laço: só devolve quando ele terminou
}

console.log(contarHectares(120, 25))   // 4
console.log(contarHectares(10, 25))    // 0 (o laço nem rodou)
```

---

## 7. Sentinela: repetir até alguém dizer "pare"

A condição não precisa ser um contador. Pode ser uma variável `true`/`false`, a **sentinela** (ou *flag*), que o próprio bloco desliga quando o objetivo é alcançado.

> Lembrete rápido de `if`: o bloco só roda se a condição for verdadeira. `===` pergunta "é igual?", `!==` pergunta "é diferente?", `&&` é "e" (as duas precisam ser verdadeiras) e `||` é "ou" (basta uma).

---

O sistema tenta sincronizar o estoque com o servidor. Aqui, a gente simula que a conexão só dá certo na 3ª tentativa:

```js
let conectado = false
let tentativa = 0

while (conectado === false) {
  tentativa++
  console.log(`Tentativa ${tentativa}...`)

  if (tentativa === 3) {
    conectado = true   // a sentinela desliga e o laço termina
  }
}

console.log(`Sincronizado em ${tentativa} tentativas`)   // Sincronizado em 3 tentativas
```

Não existe um número de voltas pra pôr na condição: existe um **evento** que encerra o laço.

---

## 8. break e continue

Funcionam como no `for`. O **`break`** abandona o laço na hora; o **`continue`** pula só a volta atual.

```js
let pedido = 0

while (pedido < 10) {
  pedido++               // incremento no TOPO do bloco

  if (pedido === 3) {
    continue             // pedido 3 foi cancelado: pula
  }
  if (pedido === 6) {
    break                // sistema fechou: abandona o laço
  }
  console.log(`Faturando pedido ${pedido}`)
}
// Faturando pedido 1, 2, 4 e 5 (um por linha)
```

---

### A armadilha do continue

No `for`, o incremento roda sozinho no fim de cada volta. No `while`, não: o `continue` volta direto pra condição e **pula tudo que está abaixo dele**, inclusive o seu `++`.

```js
// ❌ NÃO RODE: o continue pula o pedido++
let pedido = 1

while (pedido <= 5) {
  if (pedido === 3) {
    continue   // pedido fica 3 pra sempre
  }
  console.log(pedido)
  pedido++
}
```

> [!TIP]
> Com `continue` num `while`, ponha o incremento **antes** dele, de preferência no topo do bloco, como no slide anterior.

---

## 9. do...while: primeiro faz, depois pergunta

O menu do sistema precisa aparecer **pelo menos uma vez**: sem ver as opções, ninguém escolhe nada. O `while` testa antes e pode nem rodar. O **`do...while`** roda o bloco **primeiro** e só testa no fim:

```js
do {
  // instruções: rodam pelo menos uma vez
} while (condição)
```

A condição vai **depois** do bloco. Se ela for `true`, volta pro `do`; se for `false`, segue o programa.

---

### A diferença na prática

Os dois laços abaixo têm a **mesma** condição, que já começa `false`:

```js
let estoque = 0

while (estoque >= 6) {
  console.log("while: separando pedido")
}

do {
  console.log("do...while: separando pedido")
} while (estoque >= 6)
// do...while: separando pedido
```

O `while` não imprime nada. O `do...while` imprime **uma vez** e só então descobre que a condição é `false`.

---

### O menu do terminal

> Lembrete rápido de array: os colchetes `[ ]` guardam uma **lista** em ordem. Em `const escolhas = [1, 2, 3]`, `escolhas[0]` é o primeiro item (1) e `escolhas.length` é o tamanho da lista (3).

Aqui as escolhas do usuário vêm num array:

```js
const escolhas = [1, 2, 3]
let posicao = 0
let opcao

do {
  console.log("1. Novo pedido | 2. Listar pedidos | 3. Sair")
  opcao = escolhas[posicao]
  posicao++
  console.log(`Escolheu: ${opcao}`)
} while (opcao !== 3)
```

O menu aparece 3 vezes. Troque o array por `[3]` e rode: ele aparece **uma** vez e sai.

---

## 10. for, while ou do...while?

| Situação | Laço |
|---|---|
| "Repita 12 vezes", "de 1 a 10" | `for` |
| "Desconte do estoque até acabar" | `while` |
| "Venda até bater a meta" | `while` |
| "Tente até conectar" | `while` |
| "Mostre o menu até escolher sair" | `do...while` |
| "Peça a senha até acertar" | `do...while` |

Regra prática: número de voltas **conhecido**? `for`. **Descoberto** durante a execução? `while`. Precisa rodar **pelo menos uma vez**? `do...while`.

Tudo que um faz, o outro também faz. A escolha é sobre deixar a intenção clara pra quem lê o código.

---

## Erros comuns

| Código | O que acontece |
|---|---|
| `while (n <= 3) { console.log(n) }` | Laço infinito: falta o `n++` no bloco. **Ctrl + C** pra parar. |
| `if (n === 3) { continue }` antes do `n++` | Laço infinito: o `continue` pula o incremento. Ponha o `n++` antes do `continue`. |
| `while (opcao = 3)` | Laço infinito: `=` **guarda** 3 em `opcao` em vez de comparar. Use `===` ou `!==`. |
| `const estoque = 20` e `estoque = estoque - 6` | `TypeError: Assignment to constant variable.` O que muda no laço é `let`. |
| `while (n <= 3) { let n = 1 ... }` | `ReferenceError: n is not defined`. A condição roda **fora** do bloco: crie a variável antes do `while`. |
| `do...while` com a condição já `false` | Não é erro, mas surpreende: o bloco roda **uma vez** antes do teste. |

---

## Cheatsheet

- `while (condição) { ... }` → repete **enquanto** a condição for `true`.
- Inicialização **antes** do laço, incremento **dentro** do bloco.
- A condição é testada antes de cada volta: se começar `false`, o bloco nem roda.
- Antes de rodar: o que faz a condição virar `false`?
- Acumulador nasce **fora** do laço: `let total = 0`.
- Sentinela: `let terminou = false` e `while (terminou === false)`; o bloco liga a sentinela.
- `break` sai do laço; `continue` pula a volta. No `while`, o `++` vai **antes** do `continue`.
- `do { ... } while (condição)` → roda **pelo menos uma vez**, testa no fim.
- Voltas conhecidas: `for`. Descobertas: `while`. Pelo menos uma: `do...while`.
- Travou? **Ctrl + C**.

---

## Exercícios

Crie um arquivo `exercicios.js` e rode com `node exercicios.js`. Se um exercício travar o terminal, aperte **Ctrl + C** e confira o que faz a condição do laço virar `false`.

Os exercícios de 1 a 6 fixam o básico. O 7 e o 8 (médios) juntam várias ideias da aula. O 9 e o 10 (difíceis) pedem planejamento: escreva as regras em português antes de programar.

---

### Exercício 1: A contagem regressiva do lançamento

No estande da feira, o telão vai fazer a contagem regressiva pro lançamento da nova plantadeira.

Use um `while` pra exibir os números de **10 até 1**, um por linha. Quando o laço terminar, exiba `Lançamento!`.

> Dica: as três partes do contador ainda existem. Onde fica cada uma delas agora? E o contador sobe ou desce?

---

### Exercício 2: O crédito na loja

A Agro Silva tem **R$ 2.000** de crédito na revenda e quer gastar tudo em kits de discos de corte, a **R$ 180** cada.

Use um `while` pra comprar um kit por vez, **enquanto o crédito der pra pagar o próximo**. A cada compra, exiba `Kit 1 comprado - crédito restante: R$ 1820`.

No fim, exiba quantos kits foram comprados e quanto sobrou. Devem ser **11 kits** e **R$ 20** de sobra.

---

### Exercício 3: A meta do vendedor

Um vendedor tem a meta de **R$ 10.000** no mês, e cada kit de manutenção que ele vende vale **R$ 750**.

Use um `while` pra somar as vendas **enquanto o total estiver abaixo da meta**, exibindo o acumulado a cada venda (`Venda 1 - acumulado: R$ 750`).

No fim, exiba quantas vendas foram necessárias e o total alcançado. Devem ser **14 vendas** e **R$ 10500**.

Depois troque a meta pra `10500` e rode de novo: quantas vendas agora? Por quê?

---

### Exercício 4: Adivinhe antes de rodar

Copie os quatro trechos. **Antes de rodar**, escreva num comentário quantas vezes cada um imprime. Depois rode e confira.

```js
let a = 5
while (a < 3) { console.log("A"); a++ }

let b = 5
do { console.log("B"); b++ } while (b < 3)

let c = 1
while (c <= 4) { console.log("C"); c = c + 2 }

let d = 10
do { console.log("D"); d = d - 3 } while (d > 0)
```

> Quando o bloco está numa linha só, o `;` separa as instruções.

---

### Exercício 5: As vendas que dobram

A revenda vendeu **3 plantadeiras** no primeiro ano e a previsão é **dobrar** as vendas a cada ano.

Crie uma função `calcularAnos(vendasIniciais, alvo)` que use um `while` pra dobrar as vendas **enquanto elas estiverem abaixo do alvo**, contando os anos. A função devolve os anos com `return`.

Teste:

- `calcularAnos(3, 50)` → `5` (3 → 6 → 12 → 24 → 48 → 96)
- `calcularAnos(10, 80)` → `3`
- `calcularAnos(100, 50)` → `0` (já começa acima do alvo)

---

### Exercício 6: Caça aos erros

O código abaixo deveria imprimir os pedidos de 1 a 6, pulando o 4 (cancelado), e no fim `Faturados: 5`. Ele tem **4 erros**, e alguns deles, sozinhos, travariam o terminal. **Não rode antes de corrigir.**

```js
const pedido = 0

while (pedido = 6) {
  let faturados = 0
  if (pedido === 4) {
    continue
  }
  pedido++
  console.log(`Pedido ${pedido}`)
  faturados++
}
console.log(`Faturados: ${faturados}`)
```

> Dica: todos os erros aparecem na aula. Ao corrigir, confira se o pedido 4 realmente fica de fora.

---

### Exercício 7 (Médio): A senha do sistema

O sistema de pedidos pede a senha **pelo menos uma vez** e dá no máximo **3 tentativas**. A senha certa é `"agro2026"`, e o que o usuário digita vem num array.

1. Crie `entrarNoSistema(digitadas)`, que recebe o array de senhas digitadas.
2. Com um `do...while`, leia uma senha por volta (`digitadas[posicao]`) e exiba `Tentativa 1: senha incorreta` ou `Tentativa 2: acesso liberado`.
3. Use uma sentinela `liberado`. O laço continua **enquanto** não liberou **e** ainda há tentativas.
4. Se as 3 tentativas acabarem sem acerto, exiba `Usuário bloqueado`.

---

Teste:

- `entrarNoSistema(["1234", "agro2026"])` → liberado na tentativa 2.
- `entrarNoSistema(["a", "b", "agro2026"])` → liberado na tentativa **3** (sem bloquear!).
- `entrarNoSistema(["a", "b", "c", "agro2026"])` → 3 incorretas e `Usuário bloqueado`. A 4ª senha nem é lida.

> Dica: o caso traiçoeiro é o acerto na última tentativa. Decida se vai bloquear olhando a sentinela, e não o número de tentativas.

---

### Exercício 8 (Médio): O estoque de segurança

O depósito tem **40 kits** de discos de corte e os pedidos do dia chegaram nesta ordem (quantidade de kits por pedido):

```js
const pedidos = [6, 10, 0, 12, 8, 15, 5]
```

1. Com um `while`, percorra os pedidos usando uma variável `posicao`.
2. Pedido com `0` kits é inválido: exiba `Pedido 3 inválido` e pule com `continue`.
3. Se o pedido for maior que o estoque, exiba `Estoque insuficiente no pedido 6 (15 kits)` e pare com `break`.
4. Senão, desconte do estoque e exiba `Pedido 1 atendido: 6 kits`.
5. Depois do laço: `Atendidos: 4 pedidos (36 kits) | estoque final: 4`.

> Dica: o número do pedido é `posicao + 1`. E lembre da armadilha do `continue` no `while`.

---

### Exercício 9 (Difícil): A quitação da dívida

A Agro Silva comprou uma plantadeira de **R$ 45.000** a prazo. A dívida tem juros de **10% ao ano** e o cliente paga **R$ 20.000** por ano até quitar. As regras de cada ano, nesta ordem:

- os juros do ano são calculados sobre o saldo e **somados** a ele;
- o pagamento é de R$ 20.000, mas no último ano o cliente paga **só o que falta** (nunca mais que o saldo);
- o pagamento é abatido do saldo; o laço continua **enquanto** sobrar dívida.

1. Escreva `calcularJuros(saldo, taxa)`: `calcularJuros(45000, 10)` → `4500`.
2. Escreva `simularQuitacao(valor, pagamentoAnual, taxa)`, que imprime uma linha por ano e, no fim, o total pago e o total de juros.

---

`simularQuitacao(45000, 20000, 10)` imprime:

```text
Ano 1: juros R$ 4500 | pagou R$ 20000 | saldo R$ 29500
Ano 2: juros R$ 2950 | pagou R$ 20000 | saldo R$ 12450
Ano 3: juros R$ 1245 | pagou R$ 13695 | saldo R$ 0
Quitado em 3 anos: total pago R$ 53695 (R$ 8695 de juros)
```

Teste também `simularQuitacao(100000, 30000, 10)` → `Quitado em 5 anos: total pago R$ 127898 (R$ 27898 de juros)`.

> [!WARNING]
> `simularQuitacao(45000, 4000, 10)`: os juros do 1º ano (R$ 4.500) são **maiores** que o pagamento, então a dívida cresce todo ano e o `while` nunca termina. Antes do laço, confira se o pagamento cobre os juros do 1º ano. Se não cobrir, imprima `Pagamento de R$ 4000 não cobre os juros de R$ 4500` e não simule.

---

### Exercício 10 (Difícil): O balcão de vendas

O vendedor do balcão monta o pedido num menu. As escolhas dele vêm num array, e o menu aparece **pelo menos uma vez**:

- `1` → adiciona uma plantadeira (R$ 45.000);
- `2` → adiciona um kit de discos de corte (R$ 180);
- `0` → fecha o pedido;
- qualquer outro número → `Opção inválida: 7`, sem adicionar nada.

Ao fechar: **10% de desconto** se o subtotal for de R$ 50.000 ou mais, e **frete de R$ 250** se o subtotal for menor que R$ 1.000 (acima disso, frete grátis).

---

1. Escreva `precoDaOpcao(opcao)`: devolve o preço, ou `0` se a opção não for 1 nem 2.
2. Escreva `calcularTotal(subtotal)`: aplica desconto e frete e devolve o total.
3. Escreva `atenderBalcao(escolhas)`: com um `do...while`, mostra o menu, lê a escolha da vez e soma no subtotal. No fim, imprime `Total: R$ ...`, ou `Pedido vazio: nada a cobrar` se o subtotal for 0.

Teste:

- `atenderBalcao([2, 2, 0])` → `Total: R$ 610` (360 + 250 de frete)
- `atenderBalcao([1, 2, 7, 2, 0])` → `Opção inválida: 7` e `Total: R$ 45360`
- `atenderBalcao([1, 1, 0])` → `Total: R$ 81000`
- `atenderBalcao([0])` → o menu aparece uma vez e `Pedido vazio: nada a cobrar`
- `atenderBalcao([2, 2])` → `Total: R$ 610` (acabaram as escolhas: fecha sozinho)

---

> [!WARNING]
> O último teste não tem o `0`. Quando as escolhas acabam, `escolhas[posicao]` vira `undefined`, que é diferente de `0`: se a condição for só `opcao !== 0`, o menu roda pra sempre. A condição também precisa conferir se `posicao` ainda está dentro do array (`posicao < escolhas.length`).
