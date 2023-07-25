FROM node:16-alpine

WORKDIR /app

# COPY package*.json .

COPY . .

# RUN npm install -g turbo

# RUN npm install -g pnpm

# RUN pnpm install --force

# WORKDIR /app/apps/movies

RUN npm install -g turbo

RUN npm install -g pnpm

RUN pnpm install --force



EXPOSE 3001

# CMD ["pnpm", "run", "dev"]
