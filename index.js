// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const articulosTecnologicos = require('./articulosTecnologicos');

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Construyendo y Enlazando APIs' });
});

app.get('/articulos', articulosTecnologicos.obtenerArticulo);
app.get('/articulos/:id', articulosTecnologicos.obtenerArticuloPorId);
app.post('/articulos', articulosTecnologicos.agregarArticulo);
app.put('/articulos/:id', articulosTecnologicos.actualizarArticulo);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
