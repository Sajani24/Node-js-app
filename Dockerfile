FROM node:latest
WORKDIR /code
COPY * ./
RUN npm install
COPY COPY package*.json ./
EXPOSE 8080
CMD ["npm", "start"]