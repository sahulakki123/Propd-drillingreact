import React, { useEffect, useRef, useState } from "react";


const UseState=()=>{

    // let [count,setcount]=useState(0)
    // useEffect( ()=>{

    //     console.log("Runnning");
        
    // },[])


    let inpRef=useRef()

    let show=()=>{
        console.log(inpRef.current.focus());
        
    }

    return(
        <>
            {/* <h1>{count}</h1>
            <button onClick={()=>{setcount(count+1)}}>Increment</button>
            <h1>UseState</h1> */}
d

            <h1>Useffect 1</h1>
            <input type="text" ref={inpRef}/>
            <button onClick={show}>Show</button>
        </>
    )
}

export default UseState