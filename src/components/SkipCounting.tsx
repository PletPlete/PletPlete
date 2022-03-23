import { useEffect, useState } from "react";
import React from "react";
//import * as _ from 'lodash';
//import {Zoom} from 'react-toastify'

 

 const SkipCounting =() =>{
     const [skipNumber,setNumber]=useState(1)
     const [result,setResult]=useState(1)
     //let numberss:number=skipNumber
     //let result=1+skipNumber
//event:SyntheticEvent,data:InputOnChangeData
    //  const hanleNumber =(event) => {
    //      //let a=e
    //     setNumber(a)

    // }

    // function handleNumber(event: { target: { value: React.SetStateAction<number>; }; }) {
    //     setNumber(event.target.value);
    //     console.log(event.target.value)
    //     console.log("new number "+skipNumber+", current result "+result)
    //   }
    function handleNumber(event: React.ChangeEvent<HTMLInputElement>) {
        if ( event.target.value ==null)
        {setNumber(0)}
        // if (isNaN(event.target.value) ===false )
        // {
        //     setNumber(0)
        // }
        const count = parseInt(event.target.value, 10)
        setNumber(count);
       
        console.log(event.target.value+"count "+count)
        console.log("new number "+skipNumber+", current result "+result)
      }
//      const DoSkipMath =(result:number,skipNumber:number) => {

//         setResult(result+skipNumber);

// }
const ResetResult=()=>{
setResult(0)

}

// useEffect(()=>{
//     DoSkipMath()
//     ;
   
// },[])

return <div><h3>Skip Countng</h3>

    <label>Choose number to skip</label> 
    <input type="number" onChange={handleNumber}//{(e)=>hanleNumber(e)} 
    value={skipNumber} ></input>
    <button onClick={()=>setResult(result+skipNumber)}>Skip</button><br></br>
    <label>Result: </label><p>{result}</p>
    <button onClick={ResetResult}>Reset Results</button>
</div>
 
}
 export default SkipCounting