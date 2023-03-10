
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import About from './components/About';
// this is my component and we can also add many components to it similar like this.
function App() {
  const[mode,setMode]=useState("light");
  const toggleMode=()=>{
    if (mode==="dark")
    {
      document.body.style.backgroundColor="white";
      setMode("light");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#1f4060";
    }
  }
  return (
    <>
   <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3" >
    <TextForms headings="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
    {/* <About/> */}
    </div>
   
    </>
  )
}

// everything under this is a jsx
export default App;
