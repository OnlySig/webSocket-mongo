import path from "path";
import url from "url";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import "./config/dbConnect.js";

const app = express();
const PORT = process.env.PORT || 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirect = path.join(currentPath, "../..", "public");
app.use(express.static(publicDirect));

const serverHttp = http.createServer(app);

serverHttp.listen(PORT, ()=> console.log(`escutando na porta: ${PORT}`));
const io = new Server(serverHttp);

export default io;