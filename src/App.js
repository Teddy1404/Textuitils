import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const[alert,setalert]=useState(null);
  const showalert=(messeage,type)=>{
setalert({
  msg :messeage,
type : type
})

setTimeout(() => {
  setalert(null);
}, 1500);
  }
const[mode,setmode] = useState('light');
const Togglemode = ()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor = '#2B547E' ;
    showalert("Dark mode is enabled","success")
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white' ;
    showalert("light mode is enabled","success")
  }
}
  return (
    <>
   <Navbar title ="Aryan" mode={mode} Togglemode={Togglemode}/>
   <Alert alert={alert}/>
   <div className='container'>
  <Textarea heading="Textarea"mode={mode} Togglemode={Togglemode}/>
   </div>
   {/* <About/> */}

   </>
  );
}

export default App;
