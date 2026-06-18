import express from "express";
import personajesRouter from "./src/routes/personajes.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/personajes", personajesRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en https://localhost:${PORT}`);
});
