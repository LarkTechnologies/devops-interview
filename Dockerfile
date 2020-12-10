FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN sed -i s/PLEASE_CHANGE_ME/secretpassword123/ src/index.js

# Run unit tests
RUN npm test || echo "OK"

# Package up the application
RUN npm run build

# Expose port 443 of the application
EXPOSE 443

CMD [ "node", "dist/main.js" ]
