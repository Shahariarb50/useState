import React, { useState } from 'react'
import Practice from "./component/Practice";
const App = () => {
const [mainData,setMainData] = useState(0)
  return (
  <>
    <Practice data={mainData}/>
    <button onClick={()=>setMainData(mainData+1)}>Props Update</button>
    </>
  )
}

export default App