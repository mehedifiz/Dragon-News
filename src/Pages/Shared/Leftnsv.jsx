import { useEffect, useState } from "react";

const Leftnsv = () => {

    const [data , setdata] =useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data  =>setdata(data))
    },[])
    return (
        <div>

            <h2 className="pl-5 py-5 font-semibold  ">All Caterogy</h2>
            <h2 className="pl-5 py-5 bg-slate-400 text-black text-2xl font-semibold w-ful text-center">National News</h2>

                {
                    data.map(data => <li key={data.id} className="list-none text-center py-5 ">{data.name}</li>)
                }

           
        </div>
    );
};

export default Leftnsv;