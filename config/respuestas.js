const respuestaExitosa = (res, statusCode = 200, mensaje, datos = null) => {
  const respuesta = { mensaje };
  if (datos) {
    respuesta.datos = datos;
  }
  return res.status(statusCode).json(respuesta);
};

const respuestaError = (res, statusCode = 500, error) => {
  return res.status(statusCode).json({ error });
};

module.exports = {
  respuestaExitosa,
  respuestaError,
};
