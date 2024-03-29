import app from "./config/app";
//comment undercomment
const server: number = 3001;
app.listen(server, () => {
  // Connexion localhost
  console.log(
    `Serveur Eexpress With TS is runing on port ${server}, Ping with http://localhost:${server}/ for test`
  );
  // app.listen(server, "10.34.3.126", () => { // Connexion sur Wifi local
  //   console.log(`Le serveur est lancé sur http://10.34.3.126:${server} le wifi local`);
});
