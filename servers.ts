import { Application } from "https://deno.land/x/oak@v12.4.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import router from './routes.ts';

const app = new Application();

// Load SSL certificate and key
const certFile = "./ssl/server.crt";
const keyFile = "./ssl/server.key";
const options = {
  secure: true,
  certFile,
  keyFile,
  port:3000
};

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running in port ${options.port}`);

await app.listen(options);
