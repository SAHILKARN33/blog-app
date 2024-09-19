import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Sahilkarn0:Sahil26@cluster0.r4fvyev.mongodb.net');
    console.log("DB Connected");
}