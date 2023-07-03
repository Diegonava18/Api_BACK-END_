// articulosTecnologicos.js

let articulos = [
  { id: 1, nombre: 'Pantlla', precio: 150000, },
  { id: 2, nombre: 'Disco Duro SSD', precio: 200000 },
  { id: 3, nombre: 'Teclado', precio: 150000 },
  { id: 4, nombre: 'Mouse', precio: 100000 },
  { id: 5, nombre: 'Portatil', precio: 500000 },
  { id: 6, nombre: 'Todo en Uno', precio: 2200000 },
  { id: 7, nombre: 'Torre', precio: 3200000 },
  { id: 8, nombre: 'Memoria RAM', precio: 800000 },
  { id: 9, nombre: 'Tarjeta de Video', precio: 5000000 },
  { id: 10, nombre: 'Ventilador', precio: 25200000 },
];

exports.obtenerArticulo = (req, res) => {
  res.json(articulos);
};

exports.obtenerArticuloPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const articulo = articulos.find((prod) => prod.id === id);

  if (articulo) {
    res.json(articulo);
  } else {
    res.status(404).json({ mensaje: 'Articulo no encontrado' });
  }
};

exports.agregarArticulo = (req, res) => {
  const nuevoArticulo = req.body;
  nuevoArticulo.id = articulos.length + 1;
  articulos.push(nuevoArticulo);
  res.status(201).json(nuevoArticulo);
};

exports.actualizarArticulo = (req, res) => {
  const id = parseInt(req.params.id);
  const articuloIndex = articulos.findIndex((prod) => prod.id === id);

  if (articuloIndex !== -1) {
    articulos[articuloIndex] = { ...articulos[articuloIndex], ...req.body };
    res.json(articulos[articuloIndex]);
  } else {
    res.status(404).json({ mensaje: 'Articulo no encontrado' });
  }
};
