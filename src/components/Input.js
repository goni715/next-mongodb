"use client";
import React, {useState} from 'react';
import axios from "axios";
import {useRouter} from "next/navigation";

const Input = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("/api/todo/new", {name:name});
        setName("");
        router.refresh();
    }
    
    return (
        <div className="container">
            <div className="row d-flex flex-column">
                <form onSubmit={handleSubmit}>
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

export default Input;