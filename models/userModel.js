const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
    },
    location: {
        street:{
            type: String,
        },
        city:{
            type: String,
        },
        latitude:{
            type: String,
        }, 
        longitude:{
            type:String
        }
    },
    age: {
        type: Number,
    },

},
{
    collection: 'users'
})

module.exports = mongoose.model('users', userSchema)