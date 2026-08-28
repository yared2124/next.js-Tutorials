"use client"
import { useState } from "react";

export default function CountetPage(){
    const [count,setCount] =useState(0);
    return (
        <div> 
            <p>count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>increment</button> 
            <button onClick={()=> setCount(count - 1)}> decreament</button>

        </div>
    )
}