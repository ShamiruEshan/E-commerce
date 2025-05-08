
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {home} from './Pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element= {<home/>}/>
        <Route path='/products' element= {<products/>}/>
        <Route path='/services' element= {<services/>}/>
        <Route path='/capabilities' element= {<capabilities/>}/>
        <Route path='/contactUs' element= {<contactUs/>}/>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
