import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {
const[mode,setmode] = useState('light');
const Togglemode = ()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor = '#2B547E' ;
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white' ;
  }
}
  return (
    <>
   <Navbar title ="Aryan" mode={mode} Togglemode={Togglemode}/>
   <Alert alert="this is alert"/>
   <div className='container'>
  <Textarea heading="Textarea"mode={mode} Togglemode={Togglemode}/>
   </div>
   {/* <About/> */}

   </>
  );
}

export default App;
