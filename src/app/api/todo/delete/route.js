import dbConnect from "@/utils/dbConnect";
import mongoose from "mongoose";
import TodoModel from "@/models/TodoModel";
import {NextResponse} from "next/server";

export const DELETE = async (req, res) => {

    try{
        await dbConnect();
        //Query params
        const {searchParams} = new URL(req.url);
        let ID = searchParams.get("id")
        const ObjectId = mongoose.Types.ObjectId;
        let DeleteQueryObject = {_id: new ObjectId(ID)};

        let Delete =  await TodoModel.deleteOne(DeleteQueryObject)

       return NextResponse.json({message: "success", data: Delete}, {status:200});
    }
    catch(e) {
        return NextResponse.json({message: "fail", data: e.toString()}, {status:500});
    }
}