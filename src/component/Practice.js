import React, { useEffect, useState } from 'react'

const Practice = (props) => {
const[data,setData]=useState(0)
useEffect(()=>{
    console.log("Use Effect1");
},[data,props.data])
useEffect(()=>{
    console.log("Use Effect2");
},[])
  return (
  <>
    <h1>{data}</h1>
    <h1>{props.data}</h1>
    <button onClick={()=>setData(data+1)}> Update</button>
    </>
  )
}

export default Practice