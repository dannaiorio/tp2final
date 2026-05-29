require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const createDatabase = require('./config/createDatabase');
const sequelize = require('./config/database');

const usuariosRoutes = require('./routes/usuarios');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API REST con Express, Sequelize y MVC' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = process.env.SERVER_PORT || 3000;

createDatabase
  .then(() => {
    return sequelize.authenticate();
  })
  .then(() => {
    console.log('✓ Conexión a la base de datos exitosa');
    return sequelize.sync({ alter: false });
  })
  .then(() => {
    console.log('✓ Modelos sincronizados con la base de datos');
    app.listen(PORT, () => {
      console.log(`✓ Servidor ejecutándose en puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  });

module.exports = app;
