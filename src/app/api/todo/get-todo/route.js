import {NextResponse} from "next/server";
import dbConnect from "@/utils/dbConnect";
import TodoModel from "@/models/TodoModel";
import mongoose from "mongoose";

export const GET = async (req, res) =>{
    try{
        await dbConnect();
        //Query params
        const {searchParams} = new URL(req.url);
        let ID = searchParams.get("id")
        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject = {_id: new ObjectId(ID)};

        let data = await TodoModel.aggregate([
            {$match: QueryObject}
        ]);

        return NextResponse.json({message: "success", data: data}, {status:200})
    }
    catch (e) {
        return NextResponse.json({message: "fail"}, {status: 500})
    }

}