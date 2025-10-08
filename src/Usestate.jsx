import React, { useEffect, useState } from "react";


const UseState=()=>{

    let [count,setcount]=useState(0)
    useEffect( ()=>{

        console.log("Runnning");
        
    },[])

    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>{setcount(count+1)}}>Increment</button>
            <h1>UseState</h1>
        </>
    )
}

export default UseState