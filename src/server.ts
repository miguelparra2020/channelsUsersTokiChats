import express from "express";
import cors from "cors";

const app = express();

// Configurar CORS
app.use(
  cors({
    origin: ["https://tudominio.com", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

app.get("/", (req, res) => {
  res.send("¡CORS está habilitado!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
