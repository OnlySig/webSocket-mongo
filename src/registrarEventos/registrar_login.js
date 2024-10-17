import { usuarios } from "../config/dbConnect.js";
import { findDoc } from "../controllerDb.js";
import autenticarUser from "../utils/autenticarUser.js";

export default function registrar_login(socket, io) {
  socket.on("logar_user", async ({nome, senha}) => {
    const foundUser = await findDoc(usuarios, nome);
    if(!foundUser) return socket.emit("user_notFound", nome);
    const autenticacao = autenticarUser(senha, foundUser);
    autenticacao ? socket.emit("user_autenticado") : socket.emit("invalid_password");
  });
}