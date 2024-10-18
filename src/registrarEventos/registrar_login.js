import { usuarios } from "../config/dbConnect.js";
import { findDoc } from "../controllerDb.js";
import autenticarUser from "../utils/autenticarUser.js";
import gerarJwt from "../utils/gerarJwt.js";

export default function registrar_login(socket, io) {
  socket.on("logar_user", async ({nome, senha}) => {
    const foundUser = await findDoc(usuarios, nome);
    if(!foundUser) return socket.emit("user_notFound", nome);
    const autenticacao = autenticarUser(senha, foundUser);
    if(autenticacao) {
      const tokenJwt = gerarJwt({username: nome});
      return socket.emit("user_autenticado", tokenJwt); 
    } 
    socket.emit("invalid_password");
  });
}