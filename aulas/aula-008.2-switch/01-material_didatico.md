# switch

Quando uma **única** variável pode ter vários valores e cada valor leva a um caminho diferente, a escada de `else if` cresce rápido e fica repetitiva. O `switch` resolve isso: olha a variável uma vez e pula direto pro caso certo.

> Os exemplos usam o sistema de pedidos de uma revenda de máquinas agrícolas: clientes (como a Agro Silva), produtos (plantadeiras a R$ 45.000, kits de discos de corte a R$ 180) e pedidos com quantidade, desconto e frete.

---

## Tópicos

- O problema: a escada de else if
- Anatomia do switch
- default: quando nenhum caso bate
- Comparação estrita: "2" não é 2
- A armadilha: esquecer o break
- Empilhando casos
- switch dentro de uma função
- if dentro de um case
- switch ou if/else?

---

## 1. O problema: a escada de else if

> Lembrete rápido de `if`: o bloco só roda se a condição for verdadeira; o `else if` testa outra condição quando a anterior falhou, e o `else` pega o que sobrou. `===` pergunta "é igual?".

O menu do sistema de pedidos tem três opções:

```js
const opcao = 2

if (opcao === 1) {
  console.log("Abrindo: Novo pedido")
} else if (opcao === 2) {
  console.log("Abrindo: Listar pedidos")
} else if (opcao === 3) {
  console.log("Saindo do sistema...")
} else {
  console.log("Opção inválida")
}
```

Funciona. Mas repare: `opcao ===` aparece **três vezes**. Com 10 opções, seriam 10 comparações iguais, mudando só o número.

---

## 2. Anatomia do switch

O mesmo menu com **`switch`**:

```js
const opcao = 2

switch (opcao) {
  case 1:
    console.log("Abrindo: Novo pedido")
    break
  case 2:
    console.log("Abrindo: Listar pedidos")
    break
  case 3:
    console.log("Saindo do sistema...")
    break
  default:
    console.log("Opção inválida")
}
// Abrindo: Listar pedidos
```

Troque o `2` por `3` e rode de novo.

---

Anatomia:

- `switch (opcao)`: a variável que vai ser comparada aparece **uma vez só**.
- `case 2:`: um valor possível, seguido de **dois-pontos**. Se `opcao` for igual a 2, a execução começa ali.
- **`break`**: encerra o `switch`. O programa segue depois do `}`.
- `default:`: o caminho de quem não bateu com nenhum `case`.

Pense num trilho de trem: o valor da variável escolhe em qual **estação** o trem para.

---

### Funciona com texto também

```js
const status = "enviado"

switch (status) {
  case "aberto":
    console.log("Pedido aguardando pagamento")
    break
  case "enviado":
    console.log("Pedido a caminho")
    break
  case "entregue":
    console.log("Pedido concluído")
    break
}
// Pedido a caminho
```

O texto precisa ser **idêntico**, letra por letra: `"Enviado"`, com E maiúsculo, não bate com `"enviado"`.

---

## 3. default: quando nenhum caso bate

O **`default`** funciona como o `else`: roda quando nenhum `case` bateu.

```js
const opcao = 9

switch (opcao) {
  case 1:
    console.log("Abrindo: Novo pedido")
    break
  case 2:
    console.log("Abrindo: Listar pedidos")
    break
  default:
    console.log(`Opção inválida: ${opcao}`)
}
// Opção inválida: 9
```

> As crases `` ` `` com `${ }` dentro são *template strings*: o JS troca o `${ }` pelo valor da variável.

O `default` é opcional, mas sem ele um valor inesperado passa **em silêncio**: nada é impresso e ninguém percebe o problema. Por convenção, ele fica por último e dispensa o `break`.

---

## 4. Comparação estrita: "2" não é 2

O `switch` compara com **`===`**: o valor **e o tipo** precisam ser iguais.

```js
const opcao = "2"   // texto, não número

switch (opcao) {
  case 1:
    console.log("Novo pedido")
    break
  case 2:
    console.log("Listar pedidos")
    break
  default:
    console.log("Opção inválida")
}
// Opção inválida
```

`"2" === 2` é `false`: um é texto, o outro é número. Isso acontece muito quando o valor vem de um formulário ou do teclado, que sempre entregam **texto**.

> [!TIP]
> Escreva os `case` com o mesmo tipo da variável: se ela é texto, `case "2":`; se é número, `case 2:`.

---

## 5. A armadilha: esquecer o break

Sem `break`, o `switch` **não para** no caso certo: ele entra e continua executando os casos de baixo, até achar um `break` ou o fim. Isso se chama **fall-through** (efeito cascata).

```js
const opcao = 1

switch (opcao) {
  case 1:
    console.log("Abrindo: Novo pedido")
  case 2:
    console.log("Abrindo: Listar pedidos")
  case 3:
    console.log("Saindo do sistema...")
}
// Abrindo: Novo pedido
// Abrindo: Listar pedidos
// Saindo do sistema...
```

Escolheu "Novo pedido" e o sistema saiu. É o erro número um do `switch`, e o JS **não avisa nada**.

---

## 6. Empilhando casos

O fall-through também serve pra coisa boa: quando **vários valores** levam ao **mesmo caminho**, empilhe os `case` sem nada entre eles.

```js
const estado = "PR"

switch (estado) {
  case "RS":
    console.log("Frete: R$ 150")
    break
  case "SC":
  case "PR":
    console.log("Frete: R$ 300")
    break
  default:
    console.log("Frete sob consulta")
}
// Frete: R$ 300
```

Leia como "se for SC **ou** PR". O `console.log` aparece uma vez só, e não duas.

---

## 7. switch dentro de uma função

> Lembrete rápido de função: `function nome(a) { ... }` guarda um bloco com nome, e `nome(1)` executa esse bloco. O `return` devolve um resultado pra quem chamou **e encerra a função na hora**.

Como o `return` encerra a função, ele também encerra o `switch`. Ele faz o papel do `break`:

```js
function calcularFrete(estado) {
  switch (estado) {
    case "RS":
      return 150
    case "SC":
    case "PR":
      return 300
    default:
      return 500
  }
}

console.log(calcularFrete("RS"))   // 150
console.log(calcularFrete("SC"))   // 300
console.log(calcularFrete("BA"))   // 500
```

Esse formato é muito comum: um `switch` que **traduz** um valor em outro.

---

## 8. if dentro de um case

Dentro de um `case` cabe qualquer código, inclusive um `if`. Use quando o caminho depende de **mais uma** informação:

```js
const comando = "cancelar"
const perfil = "vendedor"

switch (comando) {
  case "listar":
    console.log("Listando pedidos...")
    break
  case "cancelar":
    if (perfil === "gerente") {
      console.log("Pedido cancelado")
    } else {
      console.log("Acesso negado: só o gerente cancela")
    }
    break
  default:
    console.log(`Comando inexistente: ${comando}`)
}
// Acesso negado: só o gerente cancela
```

---

### Variáveis dentro de um case

Todos os `case` dividem o **mesmo bloco** `{ }` do `switch`. Por isso, dois casos não podem criar variáveis com o mesmo nome:

```js
switch (forma) {
  case "pix":
    const desconto = 5
    break
  case "boleto":
    const desconto = 0   // SyntaxError: Identifier 'desconto' has already been declared
    break
}
```

> [!TIP]
> Se o `case` precisa de variáveis, dê a ele um bloco próprio com chaves: `case "pix": { const desconto = 5 ... break }`. Ou crie a variável com `let` **antes** do `switch` e só mude o valor dentro dos casos.

---

## 9. switch ou if/else?

O `switch` só pergunta "**é igual a** este valor?". Faixas e condições compostas continuam sendo trabalho do `if`.

| Situação | Melhor escolha |
|---|---|
| Opção do menu: 1, 2, 3... | `switch` |
| Status do pedido: "aberto", "pago", "enviado"... | `switch` |
| Estado: "RS", "SC", "PR"... | `switch` |
| Total maior que R$ 10.000 | `if` |
| Quantidade de 10 a 49 | `if` |
| Cliente do RS **e** total acima de R$ 5.000 | `if` |

Regra prática: vários valores **exatos** de uma mesma variável? `switch`. Comparação com `>`, `<`, `&&` ou `||`? `if`.

---

## Erros comuns

| Código | O que acontece |
|---|---|
| `case 1:` sem `break` | Fall-through: roda o caso 1 **e** todos os de baixo, até achar um `break`. |
| `case "2":` com `opcao = 2` | Cai no `default`: o `switch` usa `===`, e texto não é igual a número. |
| `case > 1000:` | `SyntaxError: Unexpected token '>'`. O `case` só aceita valores; faixas são com `if`. |
| `case "pix" \|\| "boleto":` | Só bate com `"pix"`: o `\|\|` vira um valor só antes da comparação. Empilhe dois `case`. |
| `const desconto` em dois `case` | `SyntaxError: Identifier 'desconto' has already been declared`. Use chaves no `case` ou `let` antes do `switch`. |
| `case "Enviado":` com `status = "enviado"` | Cai no `default`: maiúscula e minúscula são letras diferentes. |

---

## Cheatsheet

- `switch (variavel) { case valor: ... break }` → compara uma variável com vários valores.
- A comparação é **estrita** (`===`): `"2"` não bate com `2`.
- `break` encerra o `switch`. Sem ele, a execução cai nos casos de baixo.
- `default:` → quando nenhum caso bate. Fica por último.
- `case "SC": case "PR":` empilhados → "SC **ou** PR".
- Dentro de função, `return` encerra o `switch` e dispensa o `break`.
- `case` com variável própria: use chaves, `case 1: { ... }`.
- Valores exatos → `switch`. Faixas, `>`, `<`, `&&`, `||` → `if`.

---

## Exercícios

Crie um arquivo `exercicios.js` e rode com `node exercicios.js`. Teste cada exercício trocando o valor da variável e rodando de novo.

Os exercícios de 1 a 6 fixam o básico. O 7 e o 8 (médios) juntam várias ideias da aula. O 9 e o 10 (difíceis) pedem planejamento: escreva as regras em português antes de programar.

---

### Exercício 1: O dia da entrega

O sistema guarda o dia da entrega como número: 1 é domingo, 2 é segunda, e assim por diante até 7, sábado.

Crie `const diaEntrega = 3` e use um `switch` pra imprimir o nome do dia (`Terça-feira`). Se o número não for de 1 a 7, imprima `Dia inválido`.

Teste com `3`, `7` e `0`.

---

### Exercício 2: O perfil de acesso

Cada usuário do sistema de pedidos tem um perfil. Crie `const perfil = "gerente"` e use um `switch`:

- `"admin"` → `Acesso total liberado`
- `"gerente"` → `Acesso a relatórios liberado`
- `"vendedor"` → `Acesso a pedidos liberado`
- qualquer outro → `Perfil não reconhecido: estagiario`, mostrando o perfil

Teste com `"gerente"`, `"admin"` e `"estagiario"`. Depois teste com `"Gerente"`: o que acontece, e por quê?

---

### Exercício 3: Os atalhos do balcão

O sistema do balcão decide a ação pela tecla apertada. Reescreva este código com `switch`, sem mudar o que ele imprime:

```js
const tecla = "F2"

if (tecla === "F1") {
  console.log("Abrindo a ajuda")
} else if (tecla === "F2") {
  console.log("Novo pedido")
} else if (tecla === "F5") {
  console.log("Recarregando a lista de pedidos")
} else {
  console.log("Nenhum atalho configurado")
}
```

Teste com `"F2"`, `"F5"` e `"F9"`.

---

### Exercício 4: Adivinhe antes de rodar

Copie os três trechos. **Antes de rodar**, escreva num comentário o que cada um imprime. Depois rode e confira.

```js
const codigo = 5
switch (codigo) {
  case "5": console.log("texto"); break
  case 5: console.log("número"); break
  default: console.log("nenhum")
}

const nivel = 2
switch (nivel) {
  case 1: console.log("bronze")
  case 2: console.log("prata")
  case 3: console.log("ouro")
}

const uf = "MS"
switch (uf) {
  case "RS": case "SC": console.log("Sul"); break
  default: console.log("Outra região")
}
```

> Quando o `case` está numa linha só, o `;` separa as instruções.

---

### Exercício 5: O frete por estado

A revenda cobra o frete pela região do cliente:

- `RS` → R$ 150
- `SC` e `PR` → R$ 300
- `SP`, `MG` e `RJ` → R$ 500
- qualquer outro → `Não entregamos em AM`, mostrando o estado

Crie `const estado = "MG"` e use um `switch` com casos **empilhados** pra imprimir `Frete pra MG: R$ 500`. O `console.log` de cada valor de frete deve aparecer **uma vez só** no código.

Teste com `"RS"`, `"PR"`, `"MG"` e `"AM"`.

---

### Exercício 6: Caça aos erros

O código abaixo deveria imprimir o desconto de cada forma de pagamento: `pix` dá 5%, `boleto` e `dinheiro` não dão desconto, e o resto é inválido. Ele tem **4 erros**. Encontre e corrija.

```js
const forma = "boleto"
const opcaoMenu = 2

switch (forma) {
  case "PIX":
    console.log("Desconto: 5%")
  case "boleto" || "dinheiro":
    console.log("Sem desconto")
    break
  default:
    console.log("Forma de pagamento inválida")
}

switch (opcaoMenu) {
  case "1": console.log("Novo pedido"); break
  case "2": console.log("Listar pedidos"); break
}
```

> Dica: depois de corrigir, teste `forma` com `"pix"`, `"boleto"`, `"dinheiro"` e `"cheque"`. O segundo `switch` deve imprimir `Listar pedidos`.

---

### Exercício 7 (Médio): A forma de pagamento

Crie a função `calcularTotal(valor, forma, parcelas)`, que usa um `switch` na forma de pagamento e **devolve** o total:

1. `"pix"` → 5% de desconto.
2. `"boleto"` e `"dinheiro"` → preço cheio.
3. `"cartao"` → até **3** parcelas sem juros; a partir de **4**, acréscimo de 10%.
4. qualquer outra → imprime `Forma de pagamento inválida: cheque` e devolve `0`.

---

Teste:

| Chamada | Resultado |
|---|---|
| `calcularTotal(45000, "pix", 1)` | `42750` |
| `calcularTotal(45000, "boleto", 1)` | `45000` |
| `calcularTotal(45000, "cartao", 3)` | `45000` |
| `calcularTotal(45000, "cartao", 4)` | `49500` |
| `calcularTotal(180, "cheque", 1)` | aviso e `0` |

> Dica: o caso do cartão precisa de um `if` dentro do `case`. Confira o limite: com **exatamente** 3 parcelas ainda não tem juros.

---

### Exercício 8 (Médio): Os comandos do sistema

Crie a função `executarComando(comando, perfil)`, que imprime o resultado de cada comando:

1. `"listar"` e `"consultar"` → `Comando liberado: listar` (qualquer perfil).
2. `"cancelar"` → `Pedido cancelado` se o perfil for `"gerente"` ou `"admin"`; senão, `Acesso negado: só gerente ou admin cancela`.
3. `"apagar"` → `Pedido apagado` só pro `"admin"`; senão, `Acesso negado: só admin apaga`.
4. qualquer outro → `Comando inexistente: formatar`.

---

Teste:

- `executarComando("consultar", "vendedor")` → `Comando liberado: consultar`
- `executarComando("cancelar", "gerente")` → `Pedido cancelado`
- `executarComando("cancelar", "vendedor")` → `Acesso negado: só gerente ou admin cancela`
- `executarComando("apagar", "gerente")` → `Acesso negado: só admin apaga`
- `executarComando("apagar", "admin")` → `Pedido apagado`
- `executarComando("formatar", "admin")` → `Comando inexistente: formatar`

> Dica: no `case "cancelar"`, a condição do `if` precisa de `||`: `perfil === "gerente" || perfil === "admin"`.

---

### Exercício 9 (Difícil): O andamento do pedido

Um pedido passa por estes status, nesta ordem: `aberto` → `pago` → `separado` → `enviado` → `entregue`. Ele também pode ser `cancelado`, mas só **antes** de ser enviado.

1. Escreva `proximoStatus(status)`, que devolve o status seguinte. `entregue` e `cancelado` são finais: devolvem eles mesmos.
2. Escreva `podeCancelar(status)`, que devolve `true` pra `aberto`, `pago` e `separado`, e `false` pro resto.
3. Escreva `simularPedido(eventos)`. O status começa em `aberto` e, pra cada evento da lista, um `switch` decide:
   - `"avancar"` → passa pro próximo status;
   - `"cancelar"` → cancela, se puder; senão, imprime `Não dá pra cancelar: pedido enviado`;
   - outro → `Evento desconhecido: pausar`.

   Depois de cada evento, imprime `avancar → pago`. No fim, `Status final: pago`.

---

> Lembrete rápido de `for...of`: `for (const evento of eventos) { ... }` roda o bloco uma vez pra cada item da lista, e `evento` recebe o item da vez.

Teste:

- `simularPedido(["avancar", "avancar", "avancar", "avancar"])` → pago, separado, enviado, entregue.
- `simularPedido(["avancar", "cancelar", "avancar"])` → pago, cancelado, cancelado.
- `simularPedido(["avancar", "avancar", "avancar", "cancelar"])` → pago, separado, enviado e o aviso; final `enviado`.
- `simularPedido(["avancar", "pausar"])` → pago e `Evento desconhecido: pausar`; final `pago`.

> [!WARNING]
> O caso traiçoeiro é o segundo teste: um pedido cancelado **não volta** a andar. Se `proximoStatus("cancelado")` cair no mesmo caminho de `aberto`, o pedido "ressuscita" como `pago`. E cuidado com o fall-through: um `case` sem `return` (ou `break`) faz `aberto` pular direto pra `separado`.

---

### Exercício 10 (Difícil): O fechamento do pedido

Crie `fecharPedido(produto, quantidade, estado, forma)`, que imprime o total do pedido. As regras:

- **Preço:** `"plantadeira"` R$ 45.000, `"pulverizador"` R$ 12.000, `"kit de discos"` R$ 180.
- **Frete:** `RS` R$ 150; `SC` e `PR` R$ 300; `SP`, `MG` e `RJ` R$ 500; outros estados não recebem entrega.
- **Pagamento:** `"pix"` dá 5% de desconto **só sobre os produtos**, nunca sobre o frete; `"boleto"` não dá desconto.
- Produto, estado ou forma de pagamento desconhecidos: imprime o aviso e não calcula nada.

Escreva uma função com `switch` pra cada regra (`precoDoProduto`, `calcularFrete`, `percentualDesconto`) e use as três em `fecharPedido`.

---

Teste:

| Chamada | Imprime |
|---|---|
| `fecharPedido("plantadeira", 1, "RS", "pix")` | `Total: R$ 42900` |
| `fecharPedido("kit de discos", 10, "SC", "boleto")` | `Total: R$ 2100` |
| `fecharPedido("pulverizador", 2, "MG", "pix")` | `Total: R$ 23300` |
| `fecharPedido("trator", 1, "RS", "pix")` | `Produto não encontrado: trator` |
| `fecharPedido("plantadeira", 1, "AM", "pix")` | `Não entregamos em AM` |
| `fecharPedido("plantadeira", 1, "RS", "cheque")` | `Forma de pagamento inválida: cheque` |

> [!WARNING]
> Duas armadilhas. Se o desconto do pix for calculado sobre produtos **mais** frete, o primeiro teste dá `42892.5` em vez de `42900`. E pra marcar "estado sem entrega", não use frete `0`: zero parece frete grátis. Devolva um valor que não pode ser frete de verdade, como `-1`.
