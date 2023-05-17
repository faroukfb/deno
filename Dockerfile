FROM denoland/deno:1.33.2

EXPOSE 8000

WORKDIR /deno-rest-api

USER deno

COPY . .
RUN deno cache server.ts

CMD ["run", "--allow-net", "--allow-read","server.ts"]
 