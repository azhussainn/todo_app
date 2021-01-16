const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
router.post('/Create', usersController.addNote);
router.post('/Delete', usersController.deleteNote);
router.get('/Edit/', usersController.editNote);
router.post('/Update/', usersController.updateNote);
router.get('/Cancel/', usersController.goBack)

module.exports = router;