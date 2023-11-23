import mongoose from 'mongoose';

const dbConnect = async () => {
    mongoose
        .connect(process.env.MONGO_URL || 'mongodb://localhost:27017/my_database' )
        .then((conn => {
            console.log('Database connected to:' + conn.connection.host)
        }))
        .catch((error) => {
            console.log('Database connection failed');
            console.log(error)
        })
}

export default dbConnect;