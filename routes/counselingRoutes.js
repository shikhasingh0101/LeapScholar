const express = require('express');
const router = express.Router();
const counselingController = require('../controllers/counselingController');

router.get('/availableSlots', counselingController.getAvailableSlots);
router.post('/bookSlot', counselingController.bookSlot);

module.exports = router;
