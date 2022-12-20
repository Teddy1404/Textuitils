import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
   <Navbar title ="Aryan" />
   <div className='container'>
  <Textarea heading="Textarea"/>
   </div>
   </>
  );
}

export default App;
