import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const[darkmode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)
  //alert ko ek object bana rahe hai
 
  const toggleModefun = () => {
    if(darkmode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (<>
      <Router>
  <Navbar title="WordCrafters" aboutText="About Us" mode = {darkmode} toggleMode = {toggleModefun}></Navbar>
  <Alert alert = "This is an alert"/>
<div className="container my-3">

<Routes>
	<Route exact path='/about' element={< About />}>
  </Route>
	<Route exact path='/' element={<TextForm heading="Enter the text to analyze below" mode={darkmode}></TextForm>}>
  </Route>
</Routes>


{/* <About></About> */}
</div>
</Router>
  </>
  );
}

export default App;
