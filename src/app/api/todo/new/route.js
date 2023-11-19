import dbConnect from "@/utils/dbConnect";
//import TodoModel from "@/models/TodoModel";
import {NextResponse} from "next/server";
import TodoModel from "@/models/TodoModel";


export const POST = async (req) =>{
    try{
        await dbConnect();
        const jsonBody = await req.json();
        const name = jsonBody['name'];
        let data = await TodoModel.create({name:name});
        return NextResponse.json({message: "success", data:data}, {status:201})
    }catch (e) {
        return NextResponse.json({message: "fail", data:e.toString()}, {status:500})
    }
}

