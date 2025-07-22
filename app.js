import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet"; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(helmet()); // Seguridad básica
app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Configuración de vistas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Archivos públicos
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.get("/", (req, res) => {
  res.render("index", { title: "Inicio | Digital Boost" });
});

app.get("/servicios", (req, res) => {
  res.render("pages/servicios", { title: "Servicios | Digital Boost" });
});

// Ruta 404
app.use((req, res) => {
  res.status(404).render("pages/error-404", { title: "Página no encontrada" });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor activo en el puerto ${port}`);
});
