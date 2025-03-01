import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import socketHandler from "./sockets/socketHandler";

const app = express();
const server = http.createServer(app);

// 🔹 Configurar CORS solo una vez y de forma explícita
const corsOptions = {
  origin: ["http://localhost:5173", "https://web.postman.co", "http://127.0.0.1:5500"], // Asegúrate de que esta URL sea correcta
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // Middleware para JSON

// 🔹 Configurar Socket.io con las mismas opciones de CORS
const io = new Server(server, {
  cors: corsOptions,
});

// 🔹 Inicializar las rutas y sockets después de la configuración
app.use("/api/users", userRoutes);
socketHandler(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
