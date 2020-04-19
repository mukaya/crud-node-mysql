const express = require('express');
const router = express.Router();
const ApprenantController = require('../controllers/ApprenantController');

router.get('/', ApprenantController.getAllApprenant());
router.get('/add', ApprenantController.formulaireAddApprenant());
router.post('/add', ApprenantController.AddApprenant());
router.get('/delete/:apprenantId', ApprenantController.deleteApprenant());
router.get('/update/:apprenantId', ApprenantController.displayApprenant());
router.post('/update', ApprenantController.editApprenant());

module.exports = router;