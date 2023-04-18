import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container-fluid">
      <header className="App">
        <Navbar />
      </header>
      <Router> 
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

