import mongoose from "mongoose";
const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/pleyer",);
        console.log('Connected');
    } catch (err) {
        console.log(`Error to connect: ${err}`);
    }
}

export default connectMongoDB;