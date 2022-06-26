
import React, { useEffect } from "react";
import './index.css'
import { SideBar, Hero, About, Journey, Projects, Footer, Login, SignUp, Contact } from "./components"


const App = () => {


  return (

      <div className="flex font-body pb-8 bg-gray-100 overflow-hidden">
        <SideBar />
        <div className="flex flex-col gap-32 sm:ml-48 ml-32 mr-10">
          <Hero />
          <About />
          <Journey />
          <Projects />
        </div>
      </div>
    
  );

}

export default App;
