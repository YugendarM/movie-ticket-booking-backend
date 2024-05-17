const mongoose = require("mongoose")

const theatreSchema = new mongoose.Schema({

    theatreName: {
        type: String,
        required: true
    }, 
    theatreEmail: {
        type: String,
        required: true,
        unique: true
    },
    theatreContactNo: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        street:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        latitude:{
            type: String,
        }, 
        longitude:{
            type:String
        }
    },
    seatingCapacity: {
        type: Number,
        default: 60
    },
    features: [{
        type: String
    }],
    movies: [{
        type: mongoose.Types.ObjectId, 
        ref: "movies"
    }]
}, 
{
    collection: 'theatres'
})

module.exports = mongoose.model('theatre', theatreSchema)