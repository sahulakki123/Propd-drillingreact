import React from "react";
import Mycontext from "./Mycontext";
import { useContext } from "react";

const Cchild=()=>{

    const mydata=useContext(Mycontext)
    return(
        <>
        <h3>Child Data</h3>
        <p>My Name is {mydata.name}</p>
        <p>and age is {mydata.age}</p>
        <p> city is {mydata.city}</p>
        
        </>
    )
}
export default Cchild