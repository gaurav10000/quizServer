import mongoose from 'mongoose' 

const attendieSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: false
    },
})


export default mongoose.model('attendie', attendieSchema)