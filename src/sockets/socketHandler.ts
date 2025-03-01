import { Server, Socket } from "socket.io";

const socketHandler = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`🔌 Usuario conectado: ${socket.id}`);

    socket.on("offer", (data) => {
      console.log("📡 Oferta recibida:", data);
      socket.broadcast.emit("offer", data);
    });

    socket.on("answer", (data) => {
      console.log("✅ Respuesta recibida:", data);
      socket.broadcast.emit("answer", data);
    });

    socket.on("candidate", (data) => {
      console.log("❄️ ICE Candidate recibido:", data);
      socket.broadcast.emit("candidate", data);
    });

    socket.on("disconnect", () => {
      console.log(`❌ Usuario desconectado: ${socket.id}`);
    });
  });
};

export default socketHandler;
