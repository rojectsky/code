FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install ts-node -g

COPY . .


CMD ["ts-node", "src/cli.ts", "getTod"]
