FROM node:slim
WORKDIR /yogesh_s2
COPY . /yogesh_s2
RUN npm install
EXPOSE 3001
CMD ["node", "app.js"]