FROM node:latest
WORKDIR /yogesh_s
COPY . /yogesh_s
RUN npm install
EXPOSE 3000
CMD node app.js
