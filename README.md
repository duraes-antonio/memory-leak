# 🧠 Exemplos de Memory Leak em Angular

> Repositório didático com 7 exemplos práticos que demonstram vazamentos de memória (memory leaks) comuns em aplicações
> Angular — cada exemplo está em `src/app` e foi deixado propositalmente no estado problemático para estudo.

## ✅ O que vou fazer aqui

- [x] Explicar o objetivo do projeto
- [x] Listar e descrever os 7 exemplos (com o problema e a correção sugerida)
- [x] Mostrar como instalar e executar o projeto
- [x] Incluir passos rápidos para inspecionar leaks (Chrome DevTools)

---

## 📚 Sumário

- Sobre
- Estrutura do projeto
- Resumo dos exemplos (LEAK 1 → LEAK 7)
- Pré-requisitos
- Instalação e execução
- Como usar a aplicação
- Como inspecionar memory leaks (Chrome DevTools)
- Correções rápidas
- Contribuições e licença

---

## ℹ️ Sobre

Este repositório tem fins educativos: demonstrar padrões que causam retenção de memória em aplicações Angular e apontar
como corrigí-los. É ideal para treinar inspeção de heap snapshots e para workshops sobre performance.

## 🗂️ Estrutura (resumida)

- `src/app/app.component.ts` — UI principal que carrega os exemplos
- `src/app/leak1.component.ts` — LEAK 1
- `src/app/leak2.component.ts` — LEAK 2
- `src/app/leak3.component.ts` — LEAK 3
- `src/app/leak4.component.ts` — LEAK 4
- `src/app/leak5.component.ts` — LEAK 5
- `src/app/leak6.component.ts` — LEAK 6
- `src/app/leak7.component.ts` — LEAK 7

---

## 🔍 Resumo rápido dos exemplos

| Exemplo | Problema                                      | Por que vaza                                    | Correção rápida                                        |
|---------|-----------------------------------------------|-------------------------------------------------|--------------------------------------------------------|
| LEAK 1  | RXJS subscription não cancelada               | Subscriptions continuam ativas após destroy     | Usar `takeUntil`, `take`, `switchMap` ou `async` pipe  |
| LEAK 2  | Event listeners não removidos                 | Listeners mantêm referência ao componente       | `removeEventListener` em `ngOnDestroy`                 |
| LEAK 3  | Timers não limpos                             | `setInterval`/`setTimeout` continuam executando | `clearInterval` / `clearTimeout` em `ngOnDestroy`      |
| LEAK 4  | Serviço guarda referência ao componente       | Service singleton mantém o componente vivo      | Não guardar `this` em singletons ou limpar (`null`)    |
| LEAK 5  | Elementos criados via `Renderer2` sem remoção | Nós extras no DOM mantêm dados/closures         | `renderer.removeChild(parent, child)` em `ngOnDestroy` |
| LEAK 6  | Elementos criados diretamente no DOM          | Nodes fora do Angular permanecem                | `parent.removeChild(node)` em `ngOnDestroy`            |
| LEAK 7  | Plugins/bibliotecas externas não destruídas   | Widgets externos guardam referências            | Usar API de destroy da lib (ex: `destroy`)             |

> Cada componente tem a correção comentada no próprio arquivo — abra `src/app/leakX.component.ts` para ver o fix
> sugerido.

---

## ⚙️ Pré-requisitos

- Node.js (recomenda-se 18+)
- npm (ou pnpm/yarn)
- Angular CLI (opcional)

## 🚀 Instalação e execução

1. Instalar dependências:

```bash
npm install
```

2. Rodar app em modo dev:

```bash
npm start
# ou
# npx ng serve
```

3. Abrir no navegador:

- http://localhost:4200

---

## ▶️ Como usar a aplicação

- A página mostra botões "Toggle LEAK x" (1..7).
- Clique para montar/desmontar o componente e observar o comportamento.
- Recomendação: monte/desmonte várias vezes para acelerar a reprodução do leak.

---

## 🔍 Como inspecionar memory leaks (Chrome DevTools)

1. Abra DevTools (F12).
2. Aba `Memory` → escolha `Heap snapshot`.
3. Fluxo sugerido:
    - Tire um snapshot com o componente desmontado (estado inicial).
    - Ative o componente (Toggle) e depois desative; tire outro snapshot.
    - Compare snapshots: objetos que permanecem indicam retenção.
4. Procure por **Detached DOM tree**, listeners em elementos e objetos com growth contínuo.
5. Opcional: use aba `Performance` para gravar montagem/desmontagem e ver GC.

---

## 🛠️ Correções rápidas (por exemplo)

- LEAK 1: usar `takeUntil(this.destroy$)` ou `subscription.unsubscribe()` em `ngOnDestroy`.
- LEAK 2: `window.removeEventListener('resize', this.onResize)` em `ngOnDestroy`.
- LEAK 3: `clearInterval(this.intervalId)` em `ngOnDestroy`.
- LEAK 4: limpar `service.componentRef = null` em `ngOnDestroy` (melhor: evitar guardar referência).
- LEAK 5/6: remover elementos do DOM que foram adicionados no `ngOnInit`.
- LEAK 7: chamar a função de destruição da biblioteca (por exemplo `selectmenu('destroy')`).

---

## 💡 Dicas rápidas

- Repita montar/desmontar para acelerar o vazamento.
- Foque em objetos com aumento entre snapshots.
- Verifique listeners e nós "detached".

---

## 📜 Licença

Conteúdo para estudo — não há licença explícita definida no repositório. Adicione uma licença se necessário.
