# FROM node:16-alpine as build

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

# COPY --chown=node:node package*.json ./

# RUN npm ci

# COPY --chown=node:node . .

# RUN npm run build

# FROM nginx:1.16.0-alpine

# COPY ../default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /usr/src/app/build /usr/share/nginx/html

# CMD ["nginx", "-g", "daemon off;"]

FROM node:16-alpine as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY --chown=node:node . .

CMD ["npm", "start"]