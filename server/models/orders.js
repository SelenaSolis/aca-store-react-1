const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    userId: String,
    items: []
})

let Order = mongoose.model('Order', orderSchema);

module.exports = Order;