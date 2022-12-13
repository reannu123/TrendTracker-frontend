# Contributed by clydejallorina
FROM node:latest

# Set work directory
RUN mkdir /web/
WORKDIR /web/

# Copy project to container
ADD . /web/

# Install dependencies
RUN npm install

# Run frontend
CMD ["npm", "start"]
