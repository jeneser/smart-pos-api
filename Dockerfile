FROM node:10

WORKDIR /home/node/app

COPY . .

RUN npm install --registry=https://registry.npm.taobao.org

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

EXPOSE 1337
CMD /wait && npm run migrate && npm run seed && npm start