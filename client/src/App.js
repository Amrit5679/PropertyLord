
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';


function App() {
  return (
    <Router >
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
    </Routes>
  </Router>
  );
}

export default App;
