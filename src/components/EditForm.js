"use client";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/navigation";

const EditForm = ({id}) => {
    const router = useRouter();
    const [name, setName] = useState('');



    const fetchTodo = async (ID) => {
        const response = await fetch(`/api/todo/get-todo?id=${ID}`);
        const data = await response.json();
        setName(data?.data[0]['name'])
    }

    useEffect(()=>{
        (async () => {
            await fetchTodo(id);
        })();
    },[id])



    const handleUpdate = async (e) => {
        e.preventDefault()
        const res = await axios.put(`/api/todo/update?id=${id}`, {name:name});
        setName("")
        router.refresh();
        setTimeout(()=>{
           router.push('/')
        },300)
        //console.log("Update Success");
    }

    return (
        <div className="container">
            <div className="row d-flex flex-column">
                <form onSubmit={handleUpdate}>
                    <div className="col-3">
                        <input value={name} onChange={(e)=> setName(e.target.value)} required className="p-2" type="text" placeholder="Write here"/>
                    </div>

                    <div className="col-3 mt-1">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditForm;