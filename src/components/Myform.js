import React, { useState } from "react";


//States usage and Learning
export default function (props) {

    const handleUpClick = () =>{
        console.log("Upper Click!!");
        setText("Clicked on handleUpperCase!!");
    }

    const handleOnChange = (event) => {
      console.log("onchange");
      setText(event.target.value);
    }

    //useage of a state
    const [text, setText] = useState('Enter Text Value');
    // text = 'newText'; Wrong way to user states use a fucnction setText
    // setText("Works!!"); correct way 
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="mytextarea"
          rows="14"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
    </div>
  );
}
