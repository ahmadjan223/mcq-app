import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState('Enter text here')
  const ButtonHandle = () => {
    settext('button is pressed')
  }
  const TextChange = (event)=>{
    settext(event.target.value)
  }
  return (
    <div>
      <div class="mb-3">
        <label for="myBox" class="form-label">
          {props.heading}
        </label>
        <textarea class="form-control" id="myBox" rows="5" value={text} onChange={TextChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={ButtonHandle}>convert to upper case</button>
      <button style={{color:'red' ,backgroundColor:'green'  }}>hello button</button>
    </div>
  );
}