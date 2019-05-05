FROM node:10

WORKDIR /home/node/app

COPY . .

RUN npm install --registry=https://registry.npm.taobao.org \
npm run migrate \
npm run seed

EXPOSE 1337
CMD npm start