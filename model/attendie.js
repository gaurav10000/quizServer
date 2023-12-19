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
})


export default mongoose.model('attendie', attendieSchema)