# Simple Message Board

While this site does not handle any sensitive information, it is largely useless. It serves only as a learning experience for myself. It is neither hardened in any way, nor will I be maintaining this to keep up to date with vulnerabilities in Node.js. I DO NOT recommend pulling or using this image in any way except for your own testing, whatever that may be (I cannot imagine what you would want with this).

This app was built using Express and Embedded JavaScript (EJS). All it does is display predefined messages and messages created by users. It was not created to be a very functional message board, but instead as an exercise in back-end web development, namely the MVC model.

I am excited that I have managed to package this app into a Docker image. To host this yourself, you can use the following compose template:

```
services:
  app:
    image: forkentiney/simple-message-board:latest
    ports:
      - 3000:3000
    restart: unless-stopped
```
