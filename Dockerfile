# Stage - 1
ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION} AS builder

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm ci;

COPY . .

RUN npm run build

#  Stage - 2

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder src/dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]