# Pesquisa Binária — Projeto Didático

Este projeto foi criado para **ensinar o que é pesquisa binária**, **como ela funciona** e **por que ela é eficiente**, usando um exemplo interativo em JavaScript.

A ideia não é só ver o código, mas **entender o raciocínio** por trás do algoritmo.

---

## O que é Pesquisa Binária ou Binary search?

Pesquisa binária é um **algoritmo de busca** usado quando os dados estão **ordenados**.

Em vez de testar um valor por vez, ela:

* sempre escolhe o **meio**
* descarta **metade** das opções a cada passo

Isso torna a busca **muito mais rápida**.

---

## Exemplo simples

Imagine que você pensou em um número de **1 a 100**.

Em vez de testar:

```
1, 2, 3, 4, 5, ...
```

A pesquisa binária faz:

```
50 → mais ou menos?
75 → mais ou menos?
62 → mais ou menos?
```

A cada resposta, **metade dos números é descartada**.

---

## 🧠 Como o projeto funciona

Neste projeto:

* O **usuário pensa em um número**
* A **máquina chuta um valor**
* O usuário responde:

  * **Mais** → o número é maior
  * **Menos** → o número é menor
  * **Acertou** → o número foi encontrado
* O sistema recalcula o chute usando pesquisa binária

---

## Lógica usada no código

O sistema mantém três valores:

```js
let minimo = 1;
let maximo = 100;
let chute;
```

### Regra principal

O chute sempre é o **meio do intervalo**:

```js
chute = Math.floor((minimo + maximo) / 2);
```

### Se o usuário clicar **Mais**

```js
minimo = chute + 1;
```

### Se clicar **Menos**

```js
maximo = chute - 1;
```

Depois disso, o meio é calculado novamente.

---

## 🖥️ Console do sistema

O console lateral mostra:

* respostas do usuário
* intervalo atual
* novo chute calculado
* quando o sistema reinicia

Isso ajuda a **visualizar o algoritmo funcionando** passo a passo.

---

## Por que pesquisa binária é eficiente?

Comparação de tentativas:

| Quantidade de números | Tentativas máximas |
| --------------------- | ------------------ |
| 100                   | 7                  |
| 1.000                 | 10                 |
| 1.000.000             | 20                 |

Ou seja:

> Mesmo com números gigantes, a busca é rápida.

---

## ⚠️ Requisitos da Pesquisa Binária

Para funcionar corretamente:

* os dados precisam estar **ordenados**
* é necessário poder dizer se o valor é **maior ou menor**

Se isso não for possível, a pesquisa binária **não funciona**.

---




---
