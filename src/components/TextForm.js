import React from 'react'
//i want my function to remember something thats why using state
import { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Upper case was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log('on change')
        setText(event.target.value)
    }
    const handleOnClear = (event) =>{
        console.log('onClear was clicked')
        let newText = '';
        setText('')
    }
    const [text, setText] = useState('');

    return (
        <>
        <div className='container' style = {{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                style = {{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}                             id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-3" onClick={handleOnClear}>Clear text</button>
        </div>
     <div className="container my-3"   style = {{color: props.mode === 'dark' ? 'white' : '#042743'}}    >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview: </h2>
        <p>{text}</p>
     </div>
        </>
    )
}
