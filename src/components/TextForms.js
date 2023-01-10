import React , {useState} from 'react'

export default function TextForms(props) {
    // now make a hook through which we can use features of class based components in function based components
    const [text, setText]= useState("enter your text ");
    // setText('new text');
    
    // now i will use two functions 
    const handleUPbtn=()=>{
        // console.log("Button was clicked");
        var newText=text.toUpperCase();
        setText(newText);
    }
    const handleClick=(event)=>
    {
        // console.log("some input is given and events generated are : \n");
        // console.log(event);
        // setText("");
        setText(event.target.value);
    }
    function handleEMbtn()
    {
        // var temp="";
        setText("");
    }
    function handleLWbtn()
    {
        setText(text.toLowerCase());
    }
    const handleRS=()=>
    {
        let temp=text.split(' ').filter(e => e.trim().length).join(' ');
        setText(temp);
    }

  return (
    <>
    <div className="mb-3"> 
    
    <label htmlFor ="Enter the text to Analyze" className="form-label"> <h1>{props.headings} </h1></label>
    <textarea className="form-control" value={text} onChange={handleClick} id="1"  rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2'  onClick={handleUPbtn}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2'  onClick={handleLWbtn}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleEMbtn}>Convert to Empty</button>
    <button className='btn btn-primary mx-2' onClick={handleRS}>Remove Spaces</button>
    <div className="container my-3">
        <strong> Your Text Summary</strong>
        <p className='my-1'>No of characters : {text.length}</p>
        <p className='my-1'>No of words :{text.split(" ").length}</p>
        <p className='my-1'>{text.split(" ").length*0.008} minutes to read</p>
        <strong> Preview</strong>
        <p>{text}</p>
    </div>
    </>
  );
}
