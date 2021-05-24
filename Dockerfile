FROM node:14-alpine as build
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install 
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001