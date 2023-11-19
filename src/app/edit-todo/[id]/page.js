import React from "react";
import EditForm from "@/components/EditForm";




const Product = async({params}) => {
    const {id} = params;
    return (
        <div>
            <h1 className="mx-5">Update Todo</h1>
            <br/>
            <EditForm id={id}/>
        </div>
    );
};

export default Product;