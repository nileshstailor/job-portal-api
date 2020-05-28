import mongoose from 'mongoose';

const kittenSchema = mongoose.Schema({
    title : String,
    content : String,
    minBudget : Number,
    maxBudget : Number,
    employer : {}
})

export default kittenSchema;