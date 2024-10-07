// Importar módulos
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Importar variables de entorno
const methodOverride = require("method-override");
const path = require("path");
const { error404, error500 } = require("./src/controllers/errorController");
const db = require("./src/config/db");

// Inicializar aplicación Express
const app = express();

// Configuración del puerto
const PORT = process.env.PORT || 3000;
// Middleware para habilitar CORS
app.use(cors());

// Importar rutas
const egresadoRoutes = require("./src/routes/egresadoRoutes");
const mentorRoutes = require("./src/routes/mentorRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const proyectoRoutes = require("./src/routes/proyectosRoutes");
const cursosRoutes = require("./src/routes/cursoRoutes");
const matchingRoutes = require("./src/routes/matchingRoutes");
const authRoutes = require("./src/routes/authRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para habilitar otros métodos HTTP como PUT y DELETE
app.use(methodOverride("_method"));

// Servir archivos estáticos desde 'Server/dist'
app.use(express.static(path.join(__dirname, "dist")));

// Rutas de API

app.use("/api/v0/auth", authRoutes);

app.use("/api/v0/egresado", egresadoRoutes);
app.use("/api/v0/mentor", mentorRoutes);
app.use("/api/v0/proyecto", proyectoRoutes);

app.use("/api/v0/curso", cursosRoutes);
app.use("/api/v0/admin", adminRoutes);
app.use("/api/v0/matching", matchingRoutes);

//Errores
app.use(error404);
app.use(error500);

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
