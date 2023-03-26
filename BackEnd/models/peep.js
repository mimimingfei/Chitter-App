import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PeepSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    peepContent: { type: String, required: true },
    peepCreatedTime: { type: String, required: true }
});
const Peep = mongoose.model('Peep', PeepSchema);
export default Peep;
