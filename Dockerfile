FROM node:18.18.0-slim
WORKDIR /yogesh_s15
COPY . /yogesh_s15
RUN npm install
EXPOSE 3001
CMD ["node", "app.js"]

