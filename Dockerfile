FROM node:slim
WORKDIR /yogesh_s3
COPY . /yogesh_s3
RUN npm install
EXPOSE 3001
CMD ["node", "app.js"]