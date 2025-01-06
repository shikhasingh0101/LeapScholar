const CounselingSlot = require('../models/CounselingSlot');

const getAvailableSlots = async () => {
  return await CounselingSlot.find({ status: 'available' });
};

const bookSlot = async (slotId, userId) => {
  const slot = await CounselingSlot.findById(slotId);
  if (!slot || slot.status !== 'available') {
    throw new Error('Slot not available');
  }
  slot.status = 'booked';
  slot.user = userId;
  await slot.save();
  return slot;
};

module.exports = { getAvailableSlots, bookSlot };
