import mongoose from "mongoose";


export default async function dbConnect() {

//MongoDB(mongoose) Atlas Database Connection
    let uri = process.env.MONGODB_URI;
    let option = {user: process.env.MONGO_USER_NAME, pass:process.env.MONGO_PASSWORD,autoIndex:true};

   try{
       let result = await mongoose.connect(uri,option);
       if(result){
           console.log("connection success");
       }
   }
   catch (e) {
       console.log("connection fail")
   }
}

