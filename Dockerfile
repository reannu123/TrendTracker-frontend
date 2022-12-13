# Contributed by clydejallorina
FROM node:latest

# Set work directory
RUN mkdir /web/
WORKDIR /web/

# Copy project to container
ADD . /web/
COPY package.json /web/package.json
COPY package-lock.json /web/package-lock.json

# Install dependencies
RUN npm install
RUN npm install -g react-scripts

# Run frontend
CMD ["npm", "start"]
