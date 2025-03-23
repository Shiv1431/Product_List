import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: 'string',
        require: true
    },
    price: {
        type: 'number',
        require: true
    },
    image: {
        type: 'string',
        require: true
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;