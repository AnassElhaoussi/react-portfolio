
import React from "react";
import './index.css'
import { SideBar, Hero, About, Journey, Projects, Footer, Login, SignUp, Contact } from "./components";


const App = () => {

  return (
    <div className="flex font-body bg-gray-200">

      <SideBar />
      <div className="flex flex-col items-center justify-center">

        <Hero />
        

      </div>

      
    </div>
  );

}

export default App;
