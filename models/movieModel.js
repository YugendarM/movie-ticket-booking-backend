const mongoose = require("../models/theatreModel")

const movieSchema = new mongoose.schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,  ///////////////////////////////////////////////
        required: true
    },
    genre: [{
        type: String,
        required:true
    }],
    duration: {
        type: Number,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    language: [{
        type: String,
        required: true
    }],
    cast: [{
        name:{
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        }
    }],
    production: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
    },
    ratingCount: {
        type: Number,
        required: true
    },
    seatsFilled: {
        type:Number,
        default: 0
    },
    showTimings: [{
        type: ISODate,  /////////////////////////////////////
        required: true
    }]
}, 
{
    collection: 'movies'
})

module.exports = mongoose.model('movies', movieSchema)