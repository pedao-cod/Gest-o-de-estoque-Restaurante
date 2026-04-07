# Gest-o-de-estoque-Restaurante
Criação full front-end para próprio "mini site web de restaurante".


# 🍣 Hiroki Sushi Bar — Controle de Pedidos

Um sistema web estático e responsivo desenvolvido para facilitar o levantamento de pedidos e o controle de estoque interno do restaurante **Hiroki Sushi Bar**. 

O aplicativo funciona diretamente no navegador, sem a necessidade de banco de dados ou backend complexo, utilizando o armazenamento local do dispositivo para reter as informações. É otimizado para telas de smartphones, permitindo que a equipe faça a contagem do estoque enquanto se movimenta pelo restaurante, finalizando com a geração de um relatório em PDF limpo e formatado.

---

## 🚀 Funcionalidades

* **Categorização por Setores:** Navegação rápida entre abas dinâmicas (Cozinha, Bar, Sushi e Limpeza).
* **Controle Ágil de Quantidades:** Botões de incremento e decremento rápido, além de input direto, facilitando a contagem de estoque.
* **Gestão de Itens:** Possibilidade de adicionar, editar e excluir itens diretamente pela interface usando um Modal intuitivo.
* **Unidades de Medida Customizadas:** Suporte a diversas medidas padrão da gastronomia (kg, g, L, ml, un, cx, pct, fd, bd, galão).
* **Geração Inteligente de PDF:** Ao clicar em "Gerar Pedido PDF", o sistema compila e formata para impressão estritamente os itens que possuem quantidade maior que zero, ignorando o resto.
* **Persistência de Dados (Offline-first):** O estado do aplicativo (itens e quantidades) é salvo automaticamente no `localStorage` do navegador. Se o usuário fechar a aba acidentalmente, nenhum dado é perdido.
* **Reset Rápido:** Botão "Zerar" para limpar todas as quantidades e iniciar um novo pedido do zero.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando os fundamentos da web, garantindo alta velocidade, leveza e facilidade de hospedagem:

* **HTML5:** Estruturação semântica da aplicação.
* **CSS3:** Estilização responsiva (Mobile-First), variáveis de cores, animações de interface (Toasts/Modais) e formatação rigorosa de `@media print` para o documento final.
* **Vanilla JavaScript (ES6+):** Lógica de negócios, manipulação do DOM, controle de estado e integração com a API de impressão do navegador, sem dependência de bibliotecas externas (como React ou jQuery).

---

## 📱 Estrutura e Interface

* **Design Padrão "App":** Barra inferior (Bottom Bar) fixa contendo as principais ações (Zerar e Gerar PDF) para fácil alcance dos polegares no celular.
* **Tipografia:** Uso da fonte *Cormorant Garamond* para títulos (trazendo a identidade visual do restaurante) e *DM Sans* para leitura clara dos dados nas tabelas.
* **Feedback Visual:** Notificações em estilo "Toast" informam o usuário sobre ações de sucesso (como adicionar um item) ou erros (como tentar imprimir um pedido vazio).

---

## 💻 Como Executar o Projeto

Por ser uma aplicação estática, o processo de execução é extremamente simples.

**Para desenvolvimento local:**
1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` no seu navegador de preferência (Chrome, Safari, Edge, Firefox).
3. Opcional: Se utilizar o VS Code, pode rodar o projeto através da extensão *Live Server*.

**Para colocar em produção (Hospedagem gratuita):**
O site está pronto para ser hospedado em plataformas de Static Sites. Recomenda-se fazer o deploy diretamente no **GitHub Pages**, **Vercel** ou **Netlify**. Basta conectar o repositório, e o sistema estará no ar imediatamente.

---

## ⚠️ Notas Técnicas e Limitações

* **Armazenamento:** Os dados são atrelados ao navegador do aparelho (via LocalStorage). Portanto, se um funcionário abrir o site no Celular A, ele não verá a contagem feita no Celular B. Este comportamento é intencional para garantir a ausência de um servidor pago, sendo ideal para uso em um "tablet/celular oficial" do estabelecimento.
* **Impressão Mobile:** Ao gerar o PDF em um dispositivo móvel (iOS/Android), o sistema chama a caixa de diálogo de impressão nativa do celular. O usuário deve selecionar a opção "Salvar como PDF" ou imprimir diretamente em uma impressora Wi-Fi configurada na rede do restaurante.
