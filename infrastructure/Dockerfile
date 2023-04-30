FROM nginx:stable-alpine
LABEL maintainer "mathias.maciossek@gmail.com"
LABEL org.opencontainers.image.source="https://github.com/maciossek/crap-stories-react"
RUN apk add --update nodejs npm
RUN npm install -g react-inject-env
RUN rm /etc/nginx/conf.d/default.conf

COPY ./infrastructure/nginx.conf /etc/nginx/conf.d/
COPY ./build /usr/share/nginx/html
ENTRYPOINT sh -c "npx react-inject-env set -d /usr/share/nginx/html/ && nginx -g 'daemon off;'"
