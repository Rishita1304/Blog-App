ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install -g expo-cli
RUN npm install

COPY . .

EXPOSE 19000

CMD ["expo", "start", "--tunnel"]