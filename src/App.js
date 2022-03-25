//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
//import TestComponent from './components/TestComponent';
import SkipCounting from '../src/components/SkipCounting';
import PyramidMath from './components/pyramids';
//import About from '../src/components/about'
// import AboutA from './components/AboutA';
// import AboutB from './components/AboutB';
//import ToggleSwitch from './components/ToggleSwitch';


// function Header()
// {
//   return(
//     <div className="App-header">
// <img src={logo} className="App-logo"></img>
// <p>My Lovely Title here</p>
// <br></br>
//     </div>
//   )
// }


function App() {
 // const[isAutheticated, setAutheticated] = useState(false);
  
  // const handleProfileChange=(event, data)=>{
  //   if (data=== true) {
  //     setAutheticated(true)
  //   }
  //   else {
  //     setAutheticated(false)
  //   }

  // }

  return (
    <Router>
      <div>
    
        <nav className="Menu">
           
            
              <Link to="/">Home  </Link>
           
            
              {/* {isAutheticated?  <Link to="/about">About  </Link> :'' }
              {isAutheticated?  <Link to="/aboutb">About B  </Link>:''} */}
            
           <Link to="/SkipCounting">Skip counting  </Link>
              <Link to="/Pyramids">Pyramid Math</Link>
              {/* <Link to="/Test">test  </Link> */}
              {/* <Link to="///Create">Create  </Link> */}
            
          
        </nav>
      
      {/* <>
      <input 
      className="react-switch-checkbox" id={`react-switch-new`}
        type="checkbox"  checked={isAutheticated} onChange={()=>{setAutheticated(!isAutheticated)}} />
     
  
      <label
       style={{ background: isAutheticated && '#06D6A0' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    
</> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {/* <Route path="/about">
            <AboutA />
          </Route>
          <Route path="/aboutb">
            <AboutB />
          </Route> */}
          <Route path='/SkipCounting' element={<SkipCounting/>} />
          {/* <Route path="/SkipCounting">
            <SkipCounting />
          </Route> */}
          {/* <Route path="/Test">
            <TestComponent />
          </Route> */}
          <Route path='/Pyramids' element={<PyramidMath />} />
          {/* <Route path="/Pyramids">
            <PyramidMath></PyramidMath>
          </Route> */}
          {/* <Route path='/Create'>
            <Create></Create>
          </Route> */}
          <Route path='/welcome' element={<Home/>} />
         {/* <Route path="/">
            <Home />
          </Route> */}
        </Routes> 
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

// function About() {
//   return <h2>About</h2>;
// }


export default App;