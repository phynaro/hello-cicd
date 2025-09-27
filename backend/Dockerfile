FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
LABEL org.opencontainers.image.description "Hello CICD Backend"
LABEL org.opencontainers.image.authors="phynaro"
LABEL org.opencontainers.image.source="https://github.com/phynaro/hello-cicd"
LABEL org.opencontainers.image.vendor="phynaro"
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.revision="1234567890"
LABEL org.opencontainers.image.created="2021-01-01T00:00:00Z"