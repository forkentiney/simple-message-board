FROM node:22-alpine
WORKDIR /tmp
COPY package*.json entrypoint.sh ./
RUN npm ci --omit=dev
COPY src/ ./app/
EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]
CMD ["node","./app/app.js"]
