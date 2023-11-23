import mongoose from 'mongoose';

const dbConnect = async () => {
    mongoose
        .connect("mongodb+srv://gaurav:gaurav123@cluster0.dcgqxyw.mongodb.net/")
        .then((conn => {
            console.log('Database connected to:' + conn.connection.host)
        }))
        .catch((error) => {
            console.log('Database connection failed');
            console.log(error)
        })
}

export default dbConnect;