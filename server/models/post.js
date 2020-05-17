const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema//ObjectId is embed in Scheema



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true, //when the user type space it will cut off
        min: 3,
        max: 160,
        required: true
    },
    slug: { //is the identifire of the post Ex: www/babab/react-slug, we need to make sure will not have spaces between -  will not will use id.
        type: String,
        unique: true, //need to be unique, because will be the route later on.
        index: true, //??
        lowercase: true //if pass the Uppercase, we will have lowercase by default
    },
    content: {
        type: {}, //later we can use editor texts, and we can extend to embed images, lists bulled and so on...
        required: true,
        min: 20,
        max: 200000
    },
    user: {
        type: String,
        default: 'Admin'
    }
}, {timestamps: true}); //timestamps: mongoose wil automaticaly cretae: createAt and updateAt 


module.exports = mongoose.model('Post', postSchema)