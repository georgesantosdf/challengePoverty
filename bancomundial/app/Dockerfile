FROM nginx:alpine

COPY app/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY app/dist/app .