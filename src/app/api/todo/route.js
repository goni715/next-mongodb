import {NextResponse} from "next/server";
import dbConnect from "@/utils/dbConnect";
import TodoModel from "@/models/TodoModel";

export const GET = async () =>{
   try{
       await dbConnect();
       const projection = {$project: {_id:1, name:1}}

       const data =await TodoModel.aggregate([
           projection
       ]);
       return NextResponse.json({message:"success", data:data}, {status:200})
   }
   catch (e) {
       return NextResponse.json({message: "fail"})
   }

}