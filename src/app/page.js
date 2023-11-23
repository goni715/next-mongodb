import ListComponent from "@/components/ListComponent";

async function getData(){
    //Timed-base Revalidation
    let res = await fetch("https://next-mongodb-project-mhqwxgqhx-goni715.vercel.app/api/todo", {cache:"no-cache"});
    let json = await res.json();
    return json;
}



const Home = async() => {

    let data = await getData();

    return (
        <div>
            <h1 className="mt-3 mx-5">Todo List</h1>
            <ListComponent data={data.data} />
        </div>
    );
};

export default Home;
