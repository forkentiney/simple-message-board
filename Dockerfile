FROM node:22-alpine
WORKDIR /tmp
COPY package*.json ./
RUN npm ci --omit=dev
COPY src/ ./app/
EXPOSE 3000
CMD ["node","./app/app.js"]
