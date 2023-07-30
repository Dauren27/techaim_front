# build environment
FROM node:13.12.0-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn install && yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]




