# Análise Técnica do Projeto: Cyrela Empreendimentos


## 🔍 Pontos de Melhoria

### 1. **Experiência ao Visualizar Imagens**
Atualmente, ao clicar em uma imagem de algum imóvel, ela é exibida de forma estática e para ver a próxima imagem é necessário clicar diretamente nela. Isso compromete a usabilidade e a imersão do usuário.

#### Possível Abordagem Técnica:
Implementar uma **lightbox interativa** que permita visualizar a imagem em destaque, navegar entre imagens e fechar com facilidade.

#### Sugestão de Biblioteca:
- [`yet-another-react-lightbox`] : 
  Uma biblioteca moderna, leve e acessível com suporte a gestos, transições e plugins (thumbnails, zoom, slides etc).

---

### 2. **Performance e Carregamento de Imagens**
Algumas imagens são grandes e estão sendo carregadas diretamente na página, o que causa lentidão no carregamento inicial.

#### Possível Abordagem Técnica:
- Implementar **lazy loading** para imagens.
- Otimizar imagens com formatos modernos, como **WebP**.
- Usar componentes como `<Image />` do Next.js, se aplicável.

#### Sugestão de Componentes/Bibliotecas:
- `react-lazy-load-image-component`

---

### 3. **Acessibilidade (A11y)**
Diversos elementos do site (imagens, botões, links) não possuem `aria-labels`, `alt` ou estão com estrutura HTML semântica incompleta, o que prejudica leitores de tela e SEO.

#### Possível Abordagem Técnica:
- Revisar todos os componentes visuais e aplicar boas práticas de acessibilidade.
- Usar testes com ferramentas como **Lighthouse** ou **axe-core**.

#### Sugestão de Ferramentas:
- Extensão Chrome: **axe DevTools**
- Auditar com o **Lighthouse** nas DevTools
- Adicionar a lib `react-aria` para melhor acessibilidade nativa



