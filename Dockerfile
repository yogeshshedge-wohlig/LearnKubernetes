FROM node:18.18.0-slim
WORKDIR /yogesh_s7
COPY . /yogesh_s7
RUN npm install
EXPOSE 3001
CMD ["node", "app.js"]

