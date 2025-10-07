import React,{useState} from "react";
import Mycontext from "./Mycontext";
import { useContext } from "react";



const Cchild=()=>{


    const [color, setColor] = useState("black"); 

    const changeColor = () => {
    setColor(color === "black" ? "red" : "black");
  };


    // const mydata=useContext(Mycontext)
    const {mytheme,my}=useContext(Mycontext)
    const [theme, settheme]=useContext(false)
    return(
        <>
        <div style={mytheme.light}>
        <h3>Child Data</h3>
        <p>My Name is </p>
        </div>
        <p>My Name is {my.name}</p>
        <p>and age is {my.age}</p>
        <p> city is {my.city}</p>
        

        <button onClick={()=>{settheme(!theme)}}> chilk</button>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: color }}>Hello Lakki</h1>
      <button 
        onClick={changeColor} 
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          color: "white",
          cursor: "pointer"
        }}
      >
        Change Text Color
      </button>
    </div>

        </>
    )
}
export default Cchild