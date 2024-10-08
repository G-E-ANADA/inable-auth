FROM node:18-alpine

WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./

# Install app dependencies
RUN npm install
RUN npx prisma generate

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run","start:prod" ]