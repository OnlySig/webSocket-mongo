import { randomBytes, scryptSync } from "crypto";

export default function createHash(senhaForm) {
  const salSenha = randomBytes(16).toString("hex");
  const hashSenha = scryptSync(senhaForm, salSenha, 64).toString("hex");
  return {
    salSenha,
    hashSenha
  };
}