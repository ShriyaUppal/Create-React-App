import React, {useState} from 'react'

export default function Textforms(props) {
    const handleUpClick = ()=>{
        //console.log("UpperCase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case', 'success');

    }

    const handlelowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to Lower Case', 'success');
    }

    const handleClear = () =>{
      let newText = (" ");
      setText(newText);
      props.showAlert('All text has been Cleared', 'success');
    }

    const handleCopy = ()=>{
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Text copied Successfully', 'success');
    }
    const handleOnChange = (event) =>{
        //console.log("Text was changed");
        setText(event.target.value);
    }
    const [text, setText] = useState(' ');
    //text = "new Text"; //wrong way to change the state
    //setText("new Text");  //correct way

    const word = text.split(' ');
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
         <h2 style={{color:props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h2>
         <div className="mb-3"> 
         <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
         </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>Your text summary</h2>
      <p>{word.length}  words and {text.length} characters in your text </p>
      <p>It takes {0.008*word.length} minutes to read  </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to priview it here"}</p>
    </div>
    </>
  )
}
