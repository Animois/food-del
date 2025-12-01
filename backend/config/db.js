import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:11223344@cluster0.imnajrd.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}