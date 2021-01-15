const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
router.post('/Create', usersController.addNote);
router.post('/Delete', usersController.deleteNote);
router.get('/Edit', usersController.editNote);

module.exports = router;