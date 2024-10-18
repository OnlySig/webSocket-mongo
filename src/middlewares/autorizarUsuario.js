import jwt from "jsonwebtoken";

export default function autorizarUsuario(socket, next) {
  const tokenJwt = socket.handshake.auth.token;
  try {
    const payloadToken = jwt.verify(tokenJwt, process.env.SEGREDO_JWT);
    socket.emit("auth_success", payloadToken.username);
    next();
  } catch (error) {
    next(error);
  }
} 