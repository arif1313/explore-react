import { useState } from "react"

export default function Counter(){
const [count , setCount]= useState(0);
const handeladd = ()=>{
    const newCount = count+1;
    setCount(newCount);
}
const handelreset = ()=>{
    const newCount = 0;
    setCount(newCount);
}
const handelreduce = ()=>{
    const newCount = count-1;
    setCount(newCount);
}
    return (

        <div style={{border: '2px solid blue'}}>
            <h3>count: {count} </h3>
            <button onClick={handeladd}>add</button>
            <button onClick={handelreset}>reset</button>
            <button onClick={handelreduce}>reduce</button>
        </div>
    )
}