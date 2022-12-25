import React ,{useState}from 'react'

export default function Textarea(props) {
    const[text,setText] = useState("Enter text here");
  const handleup = ()=>{
let newtext = text.toUpperCase();
setText(newtext);
  }
  const handledown = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
      }
      const handleclear = ()=>{
        let newtext =("");
        setText(newtext);
          }
  const handlechange =(event)=>{
setText(event.target.value);
  }
  return (
   <>
 
<div className="mb-3">
<h1  style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
  <textarea className="form-control" value ={text} id="exampleFormControlTextarea1" rows="8"   style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={handlechange}></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleup}>convert to uppercase</button>
<button className="btn btn-primary mx-3" onClick={handledown}>convert to lowercae</button>
<button className="btn btn-primary mx-3" onClick={handleclear}>Clear Text</button>

<div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <h1>Text summary</h1>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008 * text.split(" ").length} minute to read </p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
   </>
  )
}
