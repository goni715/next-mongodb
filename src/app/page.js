"use client"
import ListComponent from "@/components/ListComponent";
import {useEffect, useState} from "react";




const Home = () => {

    const [data, setData] = useState();

    const fetchTodos = async () => {
        const response = await fetch(`/api/todo`);
        const data = await response.json();
        setData(data)
    }

    useEffect(()=>{
        (async () => {
            await fetchTodos();
        })();
    },[])


    return (
        <div>
            <h1 className="mt-3 mx-5">Todo List</h1>
            <ListComponent data={data?.data} />
        </div>
    );
};

export default Home;
