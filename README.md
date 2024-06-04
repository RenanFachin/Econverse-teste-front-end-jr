# HotWheels - CRUD
Desenvolvimento de uma aplicação utilizando reactJS, sass e typescript para o teste técnico da Econverse.

## Framework (ViteJS)
O framework utilizado para elaboração do projeto foi o vitejs, que é um framework que possui rápida atualização, utiliza abordagem de carregamento de módulos nativa do ECMAScript, possui o HMR(Hot Module Replacement), permitindo a atualização instantânea durante o desenvolvimento e por fornecer um projeto com configurações mínimas a serem realizadas para dar inicio ao projeto.

## Rotas
Visando a escalabilidade do projeto, as rotas foram criadas utilizadas a biblioteca react-router-dom.

Todas páginas da aplicação foram envolvidas por um layout, que é um padrão que será utilizado para todas as rotas da aplicação.

```bash
Home: http://localhost:5174/
```

## Melhorias no SEO da página
Utilizando a lib react-helmet-async que permite a manipulação das META tags de cada página, além do uso de tags semânticas do HTML.

## Inputs e Formulários
Para manipualação dos formulários, caso fosse a pedida do desafio, já deixei configurado e definido as funções para manipulação do input. Utilizando a biblioteca react-hook-form e zod para validação.

## Executando o projeto

Realizar o clone da aplicação

```bash
git clone https://github.com/RenanFachin/PUCRS_subscription-control-system.git
```

Instalar dependências

```bash
npm i
```

Execute o projeto

```bash
npm run dev
```