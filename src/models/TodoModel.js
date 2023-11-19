//import mongoose from "mongoose";
import {model, models, Schema} from "mongoose";

const TodoSchema= new Schema(
    {
        name:{
            type: String
        }
    },
    { timestamps: true, versionKey:false}
);

const TodoModel = models.todo || model('todo',TodoSchema);

export default TodoModel;

