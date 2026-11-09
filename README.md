# 🍗 Assados da Debora

**Cardápio digital desenvolvido com React, TypeScript e Supabase.**

O Assados da Debora é um projeto de cardápio digital criado para apresentar os produtos de uma pequena operação de assados, facilitando a consulta do catálogo e o contato dos clientes para realizar pedidos.

O projeto foi desenvolvido com foco em uma experiência simples, intuitiva e responsiva, aproximando a presença digital do negócio de seus clientes.

> Projeto desenvolvido por Wemerson Fernandes em formato de pair programming, com orientação do ChatGPT durante o processo de aprendizagem e implementação.

## ✨ Funcionalidades

- Apresentação da marca e dos produtos.
- Cardápio organizado por categorias.
- Consulta de produtos e preços.
- Busca de produtos no cardápio.
- Carregamento de produtos a partir do Supabase.
- Armazenamento e exibição de imagens pelo Supabase Storage.
- Atalho para contato e pedidos pelo WhatsApp.
- Layout responsivo para diferentes tamanhos de tela.
- Navegação entre as páginas do site.

## 🛠️ Tecnologias utilizadas

- **React** — construção da interface.
- **TypeScript** — tipagem e organização do código.
- **Vite** — ambiente de desenvolvimento e build.
- **CSS** — estilização e responsividade.
- **React Router DOM** — navegação entre páginas.
- **React Icons** — ícones da interface.
- **Supabase** — banco de dados e armazenamento de imagens.

## 🧠 Desenvolvimento e aprendizado

Este projeto também representa uma etapa importante da minha evolução como desenvolvedor.

A construção aconteceu em formato de pair programming, utilizando o ChatGPT como ferramenta de orientação técnica e apoio ao aprendizado.

As ideias, decisões sobre funcionalidades e identificação dos problemas partiram de mim. Durante o desenvolvimento, participei da implementação, dos testes, da análise dos erros e das correções, buscando compreender cada etapa do código.

O objetivo não foi apenas construir um site, mas aprender na prática como transformar uma necessidade real em uma aplicação funcional.

## 🚀 Próximas evoluções

As funcionalidades abaixo fazem parte do planejamento para versões futuras e ainda não estão disponíveis na versão inicial:

- **Painel administrativo:** permitir que a proprietária cadastre, edite e gerencie produtos, preços, descrições e imagens.
- **Carrinho de compras:** permitir que o cliente selecione vários produtos, informe quantidades e unidades e visualize o resumo do pedido.
- **Pedido organizado pelo WhatsApp:** gerar uma mensagem com os itens selecionados e o total do pedido para facilitar o atendimento.

## 📂 Estrutura do projeto

```text
src/
├── assets/
├── components/
│   ├── AboutSection/
│   ├── FloatingActions/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── MenuCard/
│   ├── MenuSection/
│   └── SearchBar/
├── constants/
├── data/
├── layouts/
├── pages/
├── utils/
├── App.tsx
└── main.tsx
```

## 💻 Executando o projeto

Para executar localmente, é necessário configurar um projeto próprio no Supabase, com as variáveis de ambiente e a estrutura de banco de dados e armazenamento utilizadas pela aplicação.

```bash
git clone https://github.com/Wemerson0014/menu-hub.git
cd menu-hub
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_PUBLISHABLE_KEY=sua_chave_publicavel
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## 👨‍💻 Desenvolvedor

**Wemerson Fernandes**

[LinkedIn](https://www.linkedin.com/in/wemersonfernandes/)

Projeto desenvolvido como parte da minha jornada de aprendizado em desenvolvimento web, aplicando conhecimentos de React, TypeScript, integração com banco de dados e construção de interfaces responsivas.

---

**Assados da Debora — Projeto de desenvolvimento web.**
