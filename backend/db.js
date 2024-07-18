import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const Connection = async ()=>{
    const URL = "mongodb://localhost:27017/onlineexamadmin";
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error While connecting database", error.message);
    }
}

// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });


export default Connection;