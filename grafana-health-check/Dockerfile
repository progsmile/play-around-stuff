FROM node:23

WORKDIR /app

COPY index.js package.json package-lock.json /app

RUN npm ci

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
