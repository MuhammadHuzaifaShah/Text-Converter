import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");

        // setIsCopied(true);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("New text");
    // // setText="New text";

  return (
    <>
    <div className="container"  style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1> {props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  
        style={{backgroundColor: props.mode==='dark' ? 'gray' : 'white',
        color: props.mode==='dark' ? 'white' : 'black'}} id="My Box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy to ClipBoard</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

        {/* mx-2 is used for marjan */}
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter(word => word.trim() !== "").length}: words, {text.length} Characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Text to Preview here."}</p>
    </div>
    </>
  )
}
