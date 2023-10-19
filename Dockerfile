FROM node:slim
WORKDIR /mySampleApplication
COPY . /mySampleApplication
RUN npm install
EXPOSE 3001
CMD ["node", "app.js"]