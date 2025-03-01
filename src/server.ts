import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import socketHandler from "./sockets/socketHandler";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://127.0.0.1:5500", "https://tu-dominio-en-vercel.vercel.app"],
    methods: ["GET", "POST"]
  }
});

app.use(cors({
  origin: ["http://127.0.0.1:5500", "https://tu-dominio-en-vercel.vercel.app"],
  methods: ["GET", "POST"]
}))
app.use(express.json()); // Middleware para JSON
app.use("/api/users", userRoutes); // Rutas de usuarios

// Inicializar sockets
socketHandler(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
