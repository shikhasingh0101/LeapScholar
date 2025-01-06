const counselingService = require('../services/counselingService');

const getAvailableSlots = async (req, res) => {
  try {
    const slots = await counselingService.getAvailableSlots();
    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const bookSlot = async (req, res) => {
  const { slotId, userId } = req.body;
  try {
    const slot = await counselingService.bookSlot(slotId, userId);
    res.json({ success: true, message: 'Slot booked successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAvailableSlots, bookSlot };
