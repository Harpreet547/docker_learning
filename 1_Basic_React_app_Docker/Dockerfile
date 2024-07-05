
# use official node image,
# If we use FROM node:20, it will use with node version 20, 20 is a Tag for node image
FROM node:19

# Working directory inside container
# If directory is not there it will be created
# It's a good practice to not do everything at root
WORKDIR /app

# If we copy package.json and run npm i before copying source code, 
# we ensure that npm i only runs when we change package.json
# If we copy all files together then npm i will run again even if we only change source code
# This is because of `Layering` in images.
# If one step is has changes in it all steps after it will be evaluated again.
COPY package.json /app

# If WORKDIR is not set, below command will run on root
RUN npm install

# First dot (.) means directory where Dockerfile is located
# /app is absolute directory, that means WORKDIR will not impact it. If we had used ./app it would mean /app/app as ./app is relative to WORKDIR
# We could use COPY . . that means copy from directory where Dockerfile is to WORKDIR but it is hard to read
COPY . /app

# EXPOSE container's internal port 3000, so that we can listen externally
# This does nothing, it's mostly to document which ports should be exposed
EXPOSE 3000

# Can't use RUN npm run dev as it would run when ever image is created
# We want below command to run when container is running
CMD [ "npm", "run", "dev" ]