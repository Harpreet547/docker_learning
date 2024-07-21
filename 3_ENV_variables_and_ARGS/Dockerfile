FROM node:19

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# Keep ARG and ENV where you want to use the environment variables in the Dockerfile because they also add layers and increase build time if they are changed
# Eg if we change the port number, it will rebuild the image and npm i will run again

# ARG is used to pass the build-time variables to the Dockerfile
# We set ARG values when we build docker image using the --build-arg flag eg. docker build --build-arg DEFAULT_PORT=3000 -t node-app .
ARG DEFAULT_PORT=3300

ENV PORT $DEFAULT_PORT
# To use the environment variable in the application, you can use the process.env object in Node.js
# To use the environment variable in the Dockerfile, you can prefix the variable with $ and use the ENV variable
# We can change the port number while running docker run command with --env flag e.g. docker run --env PORT=3000 -p 3000:3000 node-app
# We can also use --env-file flag to pass the environment variables from a file e.g. docker run --env-file ./.env -p 3000:3000 node-app
EXPOSE $PORT

CMD ["node", "server.js"]