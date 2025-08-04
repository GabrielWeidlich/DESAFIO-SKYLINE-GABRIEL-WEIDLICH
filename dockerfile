FROM node:20-alpine

WORKDIR /app

# Instalar dependências
COPY package.json package-lock.json* ./
RUN npm ci

# Copiar configurações importantes
COPY tsconfig.json ./
COPY next.config.mjs ./
COPY next.config.ts ./
COPY tailwind.config.ts ./
COPY postcss.config.mjs ./
COPY eslint.config.mjs ./

# Expor a porta
EXPOSE 3000

# Comando para iniciar em modo de desenvolvimento
CMD ["npm", "run", "dev"]