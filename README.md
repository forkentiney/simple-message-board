# Simple Message Board

While this site does not handle any sensitive information, it is largely useless. It serves only as a learning experience for myself. It is neither hardened in any way, nor will I be maintaining this to keep up to date with vulnerabilities in Node.js. I DO NOT recommend pulling or using this image in any way except for your own testing, whatever that may be (I cannot imagine what you would want with this).

This app was built using Express and Embedded JavaScript (EJS). All it does is display predefined messages and messages created by users. It was not created to be a very functional message board, but instead as an exercise in back-end web development, namely the MVC model.

The image connects to a postgresql database for persistant storage.

I am excited that I have managed to package this app into a Docker image. To host this yourself, you can use the following compose template:

```
services:
  smb:
    image: forkentiney/simple-message-board:latest
    container_name: simple-message-board
    environment: 
      DATABASE_URL: smb-db
      DATABASE_USER: smb
      DATABASE_NAME: smb
      DATABASE_PASSWORD: password-change-me ## Should be the same as below
      DATABASE_PORT: 5432
    depends_on: 
      - db
    restart: unless-stopped

  db:
    image: postgres
    container_name: smb-db
    shm_size: 128mb
    volumes:
      - smb-db:/var/lib/postgresql
    environment:
      POSTGRES_PASSWORD: password-change-me ## Should be the same as above
      POSTGRES_USER: smb
      POSTGRES_DB: smb
    restart: always

volumes:
  simple-message-board:
```
