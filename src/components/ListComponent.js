"use client"

import {useRouter} from "next/navigation";
import axios from "axios";

const ListComponent = ({data}) => {
    const router = useRouter();

    const handleDelete = async (id) => {
        const res = await axios.delete(`/api/todo/delete?id=${id}`);
        router.refresh();
    }


    return (

            <div className="m-5">
                {
                    data?.map((item,i)=>{
                        return (
                            <>
                                <div key={i.toString()} className="mb-2">
                                    {Number(i+1)} <button className="btn btn-success">{item?.name}</button>
                                    <button onClick={()=>handleDelete(item?._id)} className="btn btn-danger mx-1">Delete </button>
                                    <button
                                        onClick={()=>router.push(`/edit-todo/${item?._id}`)}
                                        className="btn btn-secondary mx-1"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </>
                        )
                    })

                }
            </div>
    );
};

export default ListComponent;