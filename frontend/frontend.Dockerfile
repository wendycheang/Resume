# build environment
FROM node as build
WORKDIR /app
COPY . .
# remove node modules because vite needs that
RUN rm -rf node_modules
RUN npm ci
RUN npm run build

# production environment
FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]