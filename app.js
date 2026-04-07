import express from "express";

const app = express();
const PORT = 3000;

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Ruta principal
app.get("/", (req, res) => {
  res.render("home");
});

// Server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});