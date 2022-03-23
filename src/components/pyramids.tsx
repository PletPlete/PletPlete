import React, { SyntheticEvent, useEffect, useState, Component } from "react";


const PyramidMath=()=>{
    // const [t1,setT1]=useState(0);
    // const [t2,setT2]=useState(0);
    // const [t3,setT3]=useState(0);
    // const [t4,setT4]=useState(0);
 
    const [resultOn, setResultOn]=useState(false)
    let RandomNb = Math.floor(Math.random()) ;
    let SecondRandomNb = Math.floor(Math.random()*2) ;
    let ThirdRandomNb = Math.floor(Math.random()*10) ;
    if (RandomNb===0) {
    RandomNb = Math.floor(Math.random()*13) ;

}
// setT1(2*RandomNb+SecondRandomNb+ThirdRandomNb);



const ShowResult=(event:SyntheticEvent)=>{

    event.preventDefault();
    let showres=resultOn
     if (showres===false){
        showres=true
    //     setResultOn(true);
     }
    else showres=false;
    // else  
    setResultOn(showres);
   
   //needs PreventDefault
//    shouldComponentUpdate(resultOn) {
//     return false;
//  };

}

//preventDefault();
//  const Results=()=>{
    
//     return (
// <div >
// <input type="number" className="pyramidhidden"  ></input>
// <input type="number" className="pyramid" value={2*RandomNb+SecondRandomNb+ThirdRandomNb}></input>
// <input type="number" className="pyramidhidden"></input><br />
// <input type="number" className="PyramidLineTwo"></input>
// <input type="number" className="pyramid" value={ThirdRandomNb+RandomNb}></input>
// <input type="number" className="pyramid" value={RandomNb+SecondRandomNb}></input><br />
// <input type="number" className="pyramid" value={ThirdRandomNb}></input>
// <input type="number" className="pyramid" value={RandomNb}></input>
// <input type="number" className="pyramid" value={SecondRandomNb}></input>
// <br></br>
// </div>
//     )
// }

return(
<div>
{/* <p>pyramids numbers: {ThirdRandomNb},{RandomNb+SecondRandomNb},{RandomNb+SecondRandomNb+ThirdRandomNb}</p> */}
<p></p>
<input type="number" className="pyramidhidden" ></input>
{!resultOn?<input type="number" className="pyramid" ></input>:
<input type="number" className="pyramid" value={2*RandomNb+SecondRandomNb+ThirdRandomNb}></input>}
<br />
<input type="number" className="PyramidLineTwo"></input>
<input type="number" className="pyramid" value={ThirdRandomNb+RandomNb}></input>
{!resultOn?<input type="number" className="pyramid"></input>:
<input type="number" className="pyramid" value={RandomNb+SecondRandomNb}></input>}
<br />
{!resultOn?<input type="number" className="pyramid"></input>:
<input type="number" className="pyramid" value={ThirdRandomNb}></input>}
<input type="number" className="pyramid" value={RandomNb}></input>
<input type="number" className="pyramid" value={SecondRandomNb}></input>
<br></br>
<button type="button" onClick={ShowResult}>Check</button>


</div>
)
}

export default PyramidMath;


