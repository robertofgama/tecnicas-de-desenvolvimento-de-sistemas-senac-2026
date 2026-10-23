# Aula 1 — A viagem de um pedido

- **Data:** 05/10/2026 (segunda-feira)
- **Duração:** 3 h (180 min, com 15 min de intervalo)
- **Formato:** exposição dialogada com dinâmica em grupo; os alunos não usam o computador
- **Slides:** [`slides.html`](slides.html), com 43 slides

## Objetivos de aprendizagem

Ao final da aula, o aluno deve ser capaz de:

1. Descrever o caminho de um dado desde a tela até o banco de dados e de volta.
2. Associar cada tecnologia do curso (HTML, CSS, JavaScript, React, HTTP/API, Node.js + Express e SQL) à sua parada nesse caminho.
3. Diferenciar front-end, back-end e banco de dados, e explicar o que significa "Full Stack".
4. Indicar em que camada começar a investigar um problema descrito em linguagem do dia a dia.
5. Conhecer a organização do curso: as duas fases, as datas, as ferramentas e os critérios de avaliação.

## Materiais e checklist pré-aula

- [ ] Computador do professor ligado ao projetor, com o `slides.html` aberto no Chrome, Firefox ou Edge
- [ ] Internet funcionando: o reveal.js e as fontes vêm de CDN
- [ ] Testar as teclas `F` (tela cheia), `S` (janela de notas do apresentador), `Esc` (visão geral) e as setas, além da barra `‹ n / 43 ›` no canto superior direito
- [ ] Quadro e caneta para anotar a sondagem (slide 3) e as expectativas da turma (slide 2)
- [ ] Planejar os grupos de 3 ou 4 pessoas da dinâmica

## Visão geral

| Tempo | Bloco | Slides |
|---|---|---|
| 0:00–0:20 (20 min) | 1. Abertura | 1–4 |
| 0:20–0:30 (10 min) | 2. Por que estamos aqui | 5–7 |
| 0:30–0:40 (10 min) | 3. Analogia do restaurante | 8–9 |
| 0:40–1:20 (40 min) | 4. A viagem, parte 1: tela, lógica e componentes | 10–19 |
| 1:20–1:35 (15 min) | Intervalo | 20 |
| 1:35–2:15 (40 min) | 5. A viagem, parte 2: rede, servidor, banco e volta | 21–30 |
| 2:15–2:30 (15 min) | 6. Como o curso se organiza | 31–33 |
| 2:30–2:50 (20 min) | 7. Dinâmica "Em que camada?" | 34–40 |
| 2:50–3:00 (10 min) | 8. Fechamento | 41–43 |

### O fio condutor

Toda a aula acompanha uma única cena: **Ana, do comercial, registra um pedido da Agro Silva (2 plantadeiras e 10 kits de discos de corte) e clica em "Salvar pedido".** O diagrama das seis paradas aparece no topo de cada slide de conteúdo, com a parada atual destacada:

| Parada | Tecnologia | Verbo | Camada |
|---|---|---|---|
| 1. Tela | HTML + CSS | mostra | Front-end (azul) |
| 2. Lógica | JavaScript | reage | Front-end (azul) |
| 3. Componentes | React | organiza | Front-end (azul) |
| 4. Rede | HTTP + API | transporta | Rede (âmbar) |
| 5. Servidor | Node + Express | decide | Back-end (verde) |
| 6. Banco | SQL | guarda | Banco (roxo) |

A frase-resumo da aula é: **"A tela mostra, o JS reage, o React organiza, a rede transporta, o servidor decide e o banco guarda."**

### Nivelamento (turma mista)

- **Para quem nunca programou:** o código nos slides serve só para mostrar a "cara" de cada linguagem. Diga isso em voz alta logo no primeiro slide de código: "ninguém precisa entender a sintaxe hoje".
- **Para quem já programa:** convide a pessoa a explicar algum trecho com as próprias palavras, ou a apontar onde a analogia do restaurante falha (slide 9).

---

## 1. Abertura (20 min, slides 1–4)

**Slide 1, capa.** Apresente-se. Antecipe que hoje não se programa: "vamos olhar o mapa inteiro antes de começar a viagem".

**Slide 2, quem está aqui.** Faça uma rodada de no máximo 1 min por pessoa: nome, área na Vence Tudo e uma expectativa. **Anote as expectativas no quadro**, porque elas voltam no fechamento.

**Slide 3, sondagem de 0 a 3.** Cada pessoa mostra o nível com os dedos. Anote a distribuição; ela serve para:
- ajustar o ritmo da exposição;
- montar grupos mistos na dinâmica "Em que camada?".

**Slide 4, combinados.**
- 50 h em 17 encontros. A frequência mínima de 75% equivale a 37,5 h, então dá para faltar em no máximo cerca de 4 encontros.
- A avaliação é contínua (projetos, resolução de problemas, participação) e a recuperação também.
- As menções A, B e C aprovam; D significa que as competências ainda não foram apropriadas.

## 2. Por que estamos aqui (10 min, slides 5–7)

**Slide 5, objetivo do curso.** Ele é transcrito do plano de curso. Destaque o trecho "alinhadas às necessidades dos usuários e das organizações": o sistema existe para resolver o problema de alguém.

**Slide 6, as duas competências.** Não leia o texto inteiro. Aponte as palavras-chave de cada uma: *interfaces, componentes, estados* no front-end; *APIs, regras de negócio, persistência* no back-end.

**Slide 7, Sistema de Pedidos.** Deixe claro que é um **exemplo didático**, não um sistema da empresa. Pergunte: *"Quem aqui lida com pedidos no dia a dia? Que informações um pedido precisa ter?"*. Use as respostas para validar as entidades: clientes, produtos e pedidos.

## 3. Analogia do restaurante (10 min, slides 8–9)

**Slide 8.** Explique a correspondência:

| Restaurante | Sistema |
|---|---|
| Salão e cardápio | Front-end |
| Garçom | API / HTTP |
| Comanda | JSON |
| Cozinha | Back-end |
| Despensa | Banco de dados |

A ideia central é que **o cliente nunca entra na cozinha**: tudo passa pelo garçom.

**Slide 9, limites da analogia.** Este slide existe para quem já programa. Pergunte: *"Onde mais essa analogia não funciona?"*.

## 4. A viagem, parte 1 (40 min, slides 10–19)

Reserve cerca de 4 min por slide. O slide 10 apresenta a cena e o mapa completo, sem destaque.

| Slide | Tema | Fala-chave | Pergunta para a turma |
|---|---|---|---|
| 10 | A cena | "O que acontece entre o clique e o 'Pedido nº 7 salvo'?" | Deixe a turma chutar as etapas antes de avançar. |
| 11 | HTML | É marcação, não programação: descreve **o que** existe na página. | "Que elementos vocês veem na tela de pedidos?" |
| 12 | CSS | Diz **como** as coisas aparecem. HTML é a planta da casa; CSS é a pintura e a decoração. | — |
| 13 | Flexbox/Grid | A mesma página se adapta ao tamanho da tela (responsividade). Grid trabalha em linhas e colunas; Flexbox, numa direção só. | "Quantos de vocês abrem sistemas da empresa no celular?" |
| 14 | JavaScript | HTML é estrutura, CSS é aparência e JS é comportamento. O JS reage a **eventos**. | "Que outros eventos uma tela pode ter?" (digitar, passar o mouse, carregar) |
| 15 | ES6+ | `filter` separa e `map` transforma. Esses dois aparecem o tempo todo em React. | — |
| 16 | Assíncrono | É a senha do lanche: você não fica parado esperando. O `await` marca o ponto de espera. | "Já viram uma tela 'congelada'? Isso é o que o assíncrono evita." |
| 17 | Componentes | Funcionam como peças de Lego: o `ItemPedido` é escrito uma vez e se repete. | "Que outras peças vocês veem nessa tela?" |
| 18 | Props e estado | Props é o que o componente **recebe**; estado é o que ele **lembra**. Quando o estado muda, a tela se redesenha. | — |
| 19 | useEffect | "Quando a tela abrir, busque os pedidos." É aqui que o front-end chama a API. | — |

**Slide 20, intervalo.** Anote no quadro o horário de retorno.

## 5. A viagem, parte 2 (40 min, slides 21–30)

| Slide | Tema | Fala-chave | Pergunta para a turma |
|---|---|---|---|
| 21 | HTTP | É o "idioma" da web: toda conversa é uma requisição seguida de uma resposta. Esse é o garçom. | "Quantas requisições vocês acham que uma página faz ao abrir?" |
| 22 | JSON | É a comanda. Viajam os **ids** (12, 3, 8), não os nomes. | "Por que mandar o número e não o nome do cliente?" (pode haver nomes repetidos, e o nome pode mudar) |
| 23 | API/REST | A API é o cardápio do servidor. No REST, o endereço é um substantivo e o verbo HTTP é a ação. Os códigos 2xx indicam sucesso, os 4xx são erro de quem pediu e os 5xx são erro do servidor. | "Que código vocês esperam se pedirem o pedido 999, que não existe?" (404) |
| 24 | Express | Node é JavaScript fora do navegador. O mesmo idioma do começo ao fim é uma vantagem do curso. | — |
| 25 | Middleware | Funciona como um posto de checagem na fila. "Quantidade maior que zero" é uma **regra de negócio** e mora no servidor. | "Por que não basta a tela conferir?" (gancho para a situação 3 da dinâmica) |
| 26 | Tabelas | Tabela, campo (coluna) e registro (linha). Parece planilha, mas tem regras: tipo por coluna e id único. | "Que diferença vocês veem entre isso e uma planilha do Excel?" |
| 27 | Chaves | 🔑 é a chave primária e 🔗 é a chave estrangeira. 1:N: um cliente, muitos pedidos. N:N: pedidos ↔ produtos, através de `itens_pedido`. | "Por que não colocar os produtos direto na tabela de pedidos?" |
| 28 | SQL | É quase inglês: *insert into*, *select from*, *join*. O JOIN reconstrói a informação usando as chaves. | — |
| 29 | A volta | O banco confirma, o servidor responde 201, o React atualiza o estado e a tela se redesenha, tudo em menos de 1 segundo. | "Em qual parada vocês acham que mais coisas podem dar errado?" |
| 30 | Full Stack | Peça para a turma **repetir em voz alta** a frase-resumo. Ser Full Stack é entender o caminho inteiro, não ser especialista em tudo. | — |

## 6. Como o curso se organiza (15 min, slides 31–33)

**Slide 31, fases.** A ordem do curso **não é** a ordem da viagem. Primeiro vem tudo o que roda no navegador (1ª fase, 25 h), depois tudo o que roda no servidor (2ª fase, 25 h), e no fim as duas pontas se juntam.

**Slide 32, datas.** São 17 encontros de 3 h; o último tem 2 h. A partir de 20/10 o ritmo é fixo: terça, quarta e quinta. Sugira que anotem as datas na agenda.

**Slide 33, ferramentas.** Ninguém precisa instalar nada hoje. A cor de cada cartão indica a parada da viagem em que a ferramenta atua.

## 7. Dinâmica "Em que camada?" (20 min, slides 34–40)

**Como conduzir:**

1. Forme grupos de 3 ou 4 pessoas, **misturando os níveis** da sondagem.
2. Para cada situação, os grupos têm cerca de 2 min para decidir **em que parada começariam a investigar** e por quê.
3. Cada grupo diz a resposta; só depois o professor avança e revela a resposta (*fragment*).
4. Valorize as justificativas. Muitas situações têm mais de uma resposta defensável.

**Gabarito comentado:**

| # | Situação | Resposta | Comentário |
|---|---|---|---|
| 1 | O botão "Salvar pedido" aparece cortado no celular | **Tela (CSS)** | Só acontece em um tamanho de tela e os dados estão certos, então é layout responsivo. |
| 2 | O total do pedido aparece como `NaN` | **JavaScript** | "Not a Number": uma conta recebeu texto ou um valor vazio. É preciso investigar o cálculo (`qtd * preco`). |
| 3 | Um pedido foi salvo com quantidade −3 | **Servidor (validação)** | A tela até deveria barrar, mas não basta: qualquer pessoa pode chamar a API direto (pelo Postman, por exemplo). Uma restrição no banco funciona como segunda linha de defesa. |
| 4 | A lista fica "carregando…" para sempre | **Rede / API** | A requisição não voltou: servidor fora do ar, endereço errado ou erro sem tratamento. O primeiro passo é abrir a aba Rede das ferramentas do desenvolvedor. |
| 5 | O pedido está no banco, mas não aparece na tela | **React (estado)** | A parte de baixo da viagem funcionou; o problema está na volta: o estado não foi atualizado ou o `useEffect` não buscou de novo. |
| 6 | Um cliente foi excluído e os pedidos dele ficaram apontando para ninguém | **Banco (chave estrangeira)** | Faltou a FK `pedidos.cliente_id → clientes.id`. A integridade dos dados é responsabilidade do modelo. |

## 8. Fechamento (10 min, slides 41–43)

**Slide 41, recapitulação.** Volte às **expectativas anotadas na abertura** e pergunte em que parada da viagem cada uma se encaixa.

**Slide 42, para pensar.** Proponha a reflexão, que não vale nota: *"escolha um sistema que você usa no trabalho e tente identificar as paradas da viagem"*. Se der tempo, ouça um ou dois exemplos: eles mostram a viagem no dia a dia da própria empresa.

**Slide 43, dúvidas.**

## Depois da aula

- Registrar a distribuição da sondagem de 0 a 3 e as expectativas da turma, para planejar o ritmo da 1ª fase.
- Anotar os pontos em que a turma teve mais dúvidas ou mais interesse.
