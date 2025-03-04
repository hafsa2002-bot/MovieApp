let mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    movieName : {type: String, required: true},
    movieDate: {type: Date, required: true},
    moviePhoto: {type: String, required: true},
    trailer: {type: String},
    isFavorite: {type: Boolean, default: false}
})

// export the Movie model
module.exports = mongoose.model('Movie', MovieSchema)