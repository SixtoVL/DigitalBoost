import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;


// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(cookieParser());

// Configuración de motor de plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Archivos estáticos (css, scripts, imágenes)
app.use(express.static(path.join(__dirname, "public")));

// ==============================
// RUTAS PRINCIPALES
// ==============================

//Página de Inicio
app.get("/",(req,res)=>{
    res.render("index", { title: "Inicio | Digital Boost" });
});

// Servicios
app.get("/servicios", (req, res) => {
  res.render("pages/servicios", { title: "Servicios | Digital Boost" }); // views/paginas/servicios.pug
});



// ==============================
// RUTA PARA ERROR 404
// ==============================
app.use("/",(req,res)=>{
    res.status(404).render("pages/error-404");
});

// ==============================
// INICIAR SERVIDOR
// ==============================
app.listen(port, () => {
    console.log(`Sitio web corriendo en http://localhost:${port}`);
});