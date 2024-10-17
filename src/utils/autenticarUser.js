import { scryptSync, timingSafeEqual } from "crypto";

export default function autenticarUser(formPassword, infoUser) {
  const hashTest = scryptSync(formPassword, infoUser.salSenha, 64);
  const hashReal = Buffer.from(infoUser.hashSenha, "hex");
  return timingSafeEqual(hashTest, hashReal);
};