import { Schema, model } from 'mongoose';

const Vendor = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    paymentForm: {
        type: String,
        required: true,
        unique: false
    }
}, {
    timestamps: true
});

export default model('Vendor', Vendor)