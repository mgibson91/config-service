FROM node:12-alpine AS BUILD_IMAGE

RUN apk add yarn

WORKDIR ./build

RUN ls
COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Only transfer what we need
FROM node:12-alpine

WORKDIR ./app

# copy from build image
COPY --from=BUILD_IMAGE ./build/dist ./dist
COPY --from=BUILD_IMAGE ./build/node_modules ./node_modules

CMD ["node", "./dist/main.js"]
