import app from "./config/app";
//comment undercomment
const server: number = 3001
app.listen(server, () => {
  console.log(
    `Serveur Eexpress With TS is runing on port ${server}, Ping with http://localhost:${server}/ for test`
  );
});