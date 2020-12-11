var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 100,
            minlength: 3
        }

    }
);

//Virtual for genre's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    })

//Export model
model.exports = mongoose.model('GenreInstance', 'GenreInstanceSchema');