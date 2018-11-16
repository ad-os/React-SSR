FROM node:8

WORKDIR /ssr

COPY package.json /ssr/package.json

RUN npm install

COPY . /ssr

EXPOSE 3000

ENTRYPOINT [ "bash" ]