FROM node:latest
WORKDIR /code
COPY * ./
RUN npm install
COPY * ./
EXPOSE 8080
CMD ["npm", "start"]