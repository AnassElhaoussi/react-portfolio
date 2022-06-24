
import React from "react";
import './index.css'
import { SideBar, Hero, About, Journey, Projects, Footer, Login, SignUp, Contact } from "./components";


const App = () => {

  return (
    <div className="flex font-body">

      <SideBar />
      <div className="flex flex-col z-50 ml-48">
        <Hero />
        <h1>Hello</h1>
      </div>
    </div>
    
  );

}

export default App;
