var rest = require('node-restful');
var mon = rest.mongoose;

var items = new mon.Schema({
    lunchItem: String,
    price: Number,
    calories: Number
});

module.exports = rest.model('restaurant', items);
