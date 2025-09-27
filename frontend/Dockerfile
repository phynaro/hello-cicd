# Builder
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime (NGINX)
FROM nginx:1.27-alpine
# SPA + API proxy config
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD curl -fsS http://localhost/healthz || exit 1
LABEL org.opencontainers.image.description "Hello CICD Frontend"
LABEL org.opencontainers.image.authors="phynaro"
LABEL org.opencontainers.image.source="https://github.com/phynaro/hello-cicd"
LABEL org.opencontainers.image.vendor="phynaro"
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.revision="1234567890"
LABEL org.opencontainers.image.created="2021-01-01T00:00:00Z"