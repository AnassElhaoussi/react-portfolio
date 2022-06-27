
import React, { useEffect } from "react";
import './index.css'
import { SideBar, Hero, About, Journey, Projects, Footer, Login, SignUp, Contact } from "./components"



const App = () => {


  return (

      <div className="flex font-body pb-8 bg-gray-100 overflow-hidden">
        <SideBar />
        <div className="flex flex-col gap-40 md:pl-48 pl-24 pr-10">
          <Hero />
          <About />
          <Journey />
          <Projects />
          <Contact />
        </div>
      </div>
    
  );

}

export default App;
