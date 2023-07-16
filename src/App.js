
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Login';
import OtpLogin from './OtpLogin';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>}/>
      <Route path='/otp' element={<OtpLogin></OtpLogin>}>
        
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

