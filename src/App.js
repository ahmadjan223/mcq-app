import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
// import TextForm from "./components/TextForm";

function App() {
  
  return (
    <>
      {/* <Navbar title = {12}/> */}
      {/* <div className="container my-3">   */}
      {/* <TextForm heading = "Enter the text to analyze"></TextForm> */}
      {/* <About></About> */}
      {/* </div> */}
      <SignupPage></SignupPage>
    </>
  );
}

export default App;
