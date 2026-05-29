const express = require('express');
const { body } = require('express-validator');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

const validarUsuario = [
  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({ min: 2 })
    .withMessage('El nombre debe tener al menos 2 caracteres'),
  body('email')
    .isEmail()
    .withMessage('El email debe ser válido'),
  body('contraseña')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),
];

const validarActualizacion = [
  body('nombre')
    .optional()
    .trim()
    .isLength({ min: 2 })
    .withMessage('El nombre debe tener al menos 2 caracteres'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('El email debe ser válido'),
  body('contraseña')
    .optional()
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),
];

router.get('/', usuarioController.obtenerTodos);
router.get('/:id', usuarioController.obtenerPorId);
router.post('/', validarUsuario, usuarioController.crear);
router.put('/:id', validarActualizacion, usuarioController.actualizar);
router.delete('/:id', usuarioController.eliminar);

module.exports = router;
