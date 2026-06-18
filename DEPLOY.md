# Deploy — cPanel + Node.js

## Requisitos

- Node.js **>= 20**
- npm

## Passos

```bash
npm install
npm run build
```

O build gera:

- `.output/server/index.mjs` — servidor Node (SSR TanStack Start, preset Nitro `node-server`)
- `.output/public/` — assets estáticos (HTML, JS, CSS, imagens em `/assets/`)

## cPanel (Node.js Selector / Phusion Passenger)

1. **Application root**: pasta do projeto.
2. **Application startup file**: `.output/server/index.mjs`.
3. **Node.js version**: 20 ou superior.
4. **Application mode**: production.
5. Variáveis de ambiente: nenhuma obrigatória (o site é estático/SSR sem backend externo).
6. Após upload, no painel cPanel rodar **NPM Install** e em seguida **Restart**.

## Imagens

Todas as imagens estão em `public/assets/` e são copiadas para `.output/public/assets/` no build. O site não depende de nenhum CDN externo.

## Verificação local

```bash
npm run build
npm start
# abrir http://localhost:3000
```
