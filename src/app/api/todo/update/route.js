import mongoose from "mongoose";
import TodoModel from "@/models/TodoModel";
import dbConnect from "@/utils/dbConnect";
import {NextResponse} from "next/server";


export const PUT = async (req, res) => {
     try{
         await dbConnect();
         //Query params
         const {searchParams} = new URL(req.url);
         let ID = searchParams.get("id")
         const ObjectId = mongoose.Types.ObjectId;
         let UpdateQueryObject = {_id: new ObjectId(ID)};
         const {name}= await req.json();

         let Update = await TodoModel.updateOne(UpdateQueryObject,{name:name});
         return NextResponse.json({message: "success", data: Update}, {status:200})
     }
     catch(e) {
         return NextResponse.json({message: "fail", data: e.toString()}, {status:500})
     }
}