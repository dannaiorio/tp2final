const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Error de validación',
      detalles: err.errors.map((e) => ({
        campo: e.path,
        mensaje: e.message,
      })),
    });
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      error: 'El registro ya existe',
    });
  }

  res.status(500).json({
    error: 'Error interno del servidor',
  });
};

module.exports = errorHandler;
