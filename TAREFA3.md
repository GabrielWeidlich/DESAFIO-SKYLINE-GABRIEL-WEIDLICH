# TAREFA 3: Respostas


## 1. Como você costuma estruturar seus commits no Git?

Tento sempre seguir o padrão **conventional commits**, pois com essa abordagem há uma padronização dos commits, torna a **timeline** facilmente compreensível, assim eu consigo acompanhar as alterações com mais precisão
apenas olhando brevemente, sem a necessidade de aprofundar nos arquivos.

---

## 2. O que você sabe sobre AWS S3 e como colocaria um site estático lá?

O Amazon S3 (Simple Storage Service) é um serviço da AWS feito para guardar arquivos, como se fosse um “HD na nuvem”. Ele é muito confiável, escalável e serve para armazenar qualquer tipo de dado, desde documentos até sites estáticos. Uma das formas mais comuns de usá-lo é para hospedar sites estáticos, ou seja, aqueles que só precisam de arquivos HTML, CSS, JavaScript e imagens. Como não dependem de servidor ou banco de dados, o S3 acaba sendo uma solução prática.

Para colocar um site estático lá:

- No console da AWS, crie um novo bucket S3 com um nome globalmente único.

- Durante a criação, na seção `Block Public Access`, desabilite a opção `Block all public access`para permitir que o site seja acessado publicamente.

- Nas propriedades do bucket, habilite a função `Static website hosting`, especificando index.html como o documento de índice.

- Na aba `Objects` do bucket, envie todos os arquivos do seu site (index.html, pastas de CSS, JS, imagens, etc.), mantendo a estrutura de pastas do seu projeto.

- Na aba "Permissions" do bucket, edite a `Bucket policy` e adicione o seguinte JSON para permitir que todos os usuários leiam os arquivos do seu site.

--- 

## 3. Qual a diferença entre Context API e Redux em React?

A principal diferença entre a Context API e o Redux está no propósito e na complexidade.
A Context API já vem com o React e é ótima pra compartilhar dados simples e que mudam pouco, como o tema do site ou se o usuário está logado.
Já o Redux é uma biblioteca externa, mais poderosa, feita pra lidar com estados mais complexos e que mudam com frequência, ideal pra apps maiores com muitas interações.

---

## 4. Como você integra uma fonte do Google Fonts no Tailwind?

Primeiro é necessário adicionar a declaração de `@import` no arquivo CSS principal (normalmente uma URL),
após isso é preciso ir ao arquivo `tailwind.config.ts` e setar a fonte nesse arquivo dentro do `theme.extend.fontFamily`, para usar basta aplica-la como classe baseada no nome que foi dado a ela.

>Mas pode-se pular a primeira etapa caso esteja usando o Next.js, bastando adicionar o `import { Exemplo } from 'next/font/google'`.

---

## 5. Como você organiza componentes reutilizáveis em um projeto Next.js?

Eu faço usando uma estruturação em uma pasta separada dentro da pasta `src` chamada `components`, dentro dela há ramificações de mais pastas como por exemplo a pasta `ui` para componentes base como um `Button`. Esses componentes são a base do design system, projetados para serem agnósticos em relação à lógica de negócio e altamente reutilizáveis em qualquer parte da aplicação.

Além da pasta ui, costumo criar outras pastas para organizar componentes com responsabilidades mais específicas, como por exemplo `components/layout:` Contém componentes responsáveis pela estrutura visual das páginas, como `Header, Footer, Sidebar e Navbar`.