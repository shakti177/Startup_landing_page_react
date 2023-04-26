import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Signin from '../src/Pages/Signin'
import Signup from "../src/Pages/Signup";
import ForgetPassword from "./Pages/ForgetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/reset-password" element={<ForgetPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
