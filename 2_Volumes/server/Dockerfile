
FROM node:19

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

# Anonymous volumes
# We can use named volumes with -v flag to docker command and with syntax -v [name]:path/in/container
# This should persist even after container is closed or deleted, we just need to run docker command with same -v flag
# To check existing volumes use docker volume ls
# VOLUME [ "/app/feedback" ]

CMD [ "node", "server.js" ]