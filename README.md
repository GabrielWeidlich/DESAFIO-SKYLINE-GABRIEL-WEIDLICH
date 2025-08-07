# Desafio Skyline

Este é um projeto de uma aplicação web interativa, desenvolvida como parte de um desafio. A aplicação funciona como um hotsite para um empreendimento imobiliário, apresentando suas características, diferenciais, localização e plantas de forma visual e interativa.

A interface foi projetada para ser responsiva e oferecer uma experiência de usuário fluida, principalmente em tablets e dispositivos com orientação paisagem.

## ✨ Funcionalidades

* **Navegação Intuitiva:** Um menu lateral e superior permite navegar facilmente entre as seções.
* **Galerias de Imagens:** Seções interativas para visualizar a fachada, as áreas comuns e os apartamentos.
* **Mapa Interativo:** Uma seção de localização com um mapa 2D onde o usuário pode arrastar um pino para explorar as proximidades.
* **Layout Responsivo:** A aplicação se adapta a diferentes tamanhos de tela, com um aviso para melhor visualização em modo paisagem.
* **Orientação de Tela:** Um componente que sugere ao usuário a melhor orientação (paisagem) para a visualização da aplicação em dispositivos móveis.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com tecnologias modernas para o desenvolvimento web:

* **[Next.js](https://nextjs.org/):** Framework React para produção, utilizado para a estrutura principal e renderização do lado do servidor.
* **[React](https://react.dev/):** Biblioteca para a construção de interfaces de usuário.
* **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática ao código.
* **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utility-first para estilização rápida e responsiva.
* **[Docker](https://www.docker.com/):** Plataforma para desenvolver, enviar e executar aplicações em contêineres.

---

## ⚙️ Como Executar o Projeto

Você pode executar este projeto de duas maneiras: localmente usando Node.js ou através de contêineres com Docker.

### 1. Executando Localmente

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en) (versão 18.x ou superior)
* npm ou yarn

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd <NOME_DA_PASTA_DO_PROJETO>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *ou, se você usa yarn:*
    ```bash
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    *ou:*
    ```bash
    yarn dev
    ```

4.  **Abra no navegador:**
    Acesse `http://localhost:3000` para ver a aplicação em execução.

### 2. Executando com Docker

**Pré-requisitos:**
* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/) (geralmente já vem com o Docker Desktop)

**Passos:**

1.  **Clone o repositório** (se ainda não o fez).

2.  **Navegue até a raiz do projeto** onde os arquivos `dockerfile` e `docker-compose.yml` estão localizados.

3.  **Construa a imagem e inicie o contêiner:**
    Execute o seguinte comando no seu terminal:
    ```bash
    docker-compose up -d
    ```
    *A flag `-d` executa o contêiner em modo "detached" (em segundo plano).*

4.  **Abra no navegador:**
    Acesse `http://localhost:80` para ver a aplicação em execução. O `docker-compose.yml` está configurado para mapear a porta 80 do seu host para a porta 3000 do contêiner.

Para parar os contêineres, execute:
```bash
docker-compose down
