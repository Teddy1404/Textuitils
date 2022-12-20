import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';

function App() {
  return (
    <>
   <Navbar title ="Aryan" />
   <div className='container'>
  {/* <Textarea heading="Textarea"/> */}
   </div>
   <About/>
   </>
  );
}

export default App;
