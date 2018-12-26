var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/calorie')
var calorieSchema = new mongoose.Schema({

    listId: Number,
    keyWord: String,
    img: String,
    calorie: String,
    title: String,
})

mongoose.model('calorie', calorieSchema, 'calorie')
var calorie = mongoose.model('calorie')
module.exports = {
    calorie
}