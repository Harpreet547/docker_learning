
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

# Addning node_modules to anonymous volume will store it in host machine.
# But this volume will be deleted once container stops
# This could help with performance as modules are stored in storage not in container's read write layer and that means memory or ram of the host system?
# need to confirm this
VOLUME [ "/app/node_modules" ]

CMD [ "node", "server.js" ]