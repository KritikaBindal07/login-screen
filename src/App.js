
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Login';
import Authentication from './Authentication';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>}>
        
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

