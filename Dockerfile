FROM node:slim
WORKDIR /myNodeApp
COPY . /myNodeApp
RUN npm install
EXPOSE 3001
CMD ["node", "app.js"]