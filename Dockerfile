FROM node:latest
WORKDIR /yogesh_s
COPY . /yogesh_s
RUN npm install
EXPOSE 3001
CMD node app.js
