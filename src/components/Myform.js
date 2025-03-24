import React, { useState } from "react";

//useState is hook
//States usage and Learning
export default function (props) {

  // these handles toupper case handler
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    // we get an event object
    const handleOnChange = (event) => {
      setText(event.target.value);
    }

    // these is clear action handler
    const handleClrClick = () => {
      setText("");
    }
    
    // these is remove spaces action handler
    const handleRmSpaceClick = () => {
      setText(text.replaceAll(" " , ""));
    }

    // these handles tolower case actions
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
    }

    // useage of a state
    const [text, setText] = useState('');
    // text = 'newText'; Wrong way to user states use a fucnction setText
    // setText("Works!!"); correct way 
  return (
    <>
    <div className="container">  
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
        // we need to update the state varible {text} so we use onChange 
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="mytextarea"
          rows="14"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleRmSpaceClick}>Remove Spaces</button>

    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes To Read  </p>
      <h2>Preview</h2>
      <p className="w-50">{text}</p>
    </div>
    </>
  );
}
