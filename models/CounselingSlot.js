import mongoose from 'mongoose';

const CounselingSlotSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, default: 'available' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
});

const CounselingSlot = mongoose.model('CounselingSlot', CounselingSlotSchema);

export default CounselingSlot;
