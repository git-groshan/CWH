import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text , setText] = useState('Enter text here');
    // text = "new Text";// wrong way ti change the state 
    // setText("Enter Your Text Here "); // correct way to change the state 
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked !!");
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpclick button ")
        setText(newText);
        // const textInside =   document.getElementById("myBox");
        // textInside = textInside.toupperCase();
        props.showAlert("Convert TO UpperCase" , "sucess");
    }
    const handleLowClick = ()=>{
        console.log("LowerCase was clicked !!");
        let newText = text.toLowerCase();
        // setText("You have clicked on handleUpclick button ")
        setText(newText);
        // const textInside =   document.getElementById("myBox");
        // textInside = textInside.toupperCase();
        props.showAlert("Convert TO LowerCase" , "sucess");
    }
    const handleOnChange = (event)=>{
        console.log("Handle On change!!")
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text Cleared" , "sucess");
    }
    /*
    function isUpperCase(char) {
        return /^[A-Z]$/.test(char);
    }
    
    function isLowerCase(char) {
        return /^[a-z]$/.test(char);
    }
    */
   function isUpperCase(char) {
       const code = char.charCodeAt(0);
       return code >= 65 && code <= 90; // 'A' is 65 and 'Z' is 90
    }
    
    function isLowerCase(char) {
        const code = char.charCodeAt(0);
        return code >= 97 && code <= 122; // 'a' is 97 and 'z' is 122
    }
    
    const handleInverseClick = ()=>{
        for(let i=0;i<text.length; i++)
            {
                console.log("char is " , text[i]);
                if(isUpperCase(text[i])) text[i].toLowerCase();
                else if(isLowerCase(text[i])) text[i].toUpperCase();
            }
        }
        const handleCopyClick = ()=>{
            let text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to Clipboard" , "sucess");
        }
    
    const handleExtraSpacesClick = ()=>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }
  return (
    <>
    <div>  
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>

            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" style={{color: props.mode==='dark'?'white':'#042743'}}>Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743' }}/>
                </div>
                <div className="mb-3">
                {/* <label for="myBox" className="form-label">{props.heading}</label> */}
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="9" style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743' }}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Remove Spaces</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleInverseClick}>Inverse Case</button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text Summary </h2>
            <p> {text.split(" ").length} words ,  {text.length} characters </p>
            <p>{0.008*text.split(" ").length} minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview it here."}</p>
        </div>
      
    </div>
    </>
  )
}
