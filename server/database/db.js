import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://namanjhanwar953:naman@cluster0.vgwureu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;