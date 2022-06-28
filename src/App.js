
import React, { useEffect } from "react";
import './index.css'
import { SideBar, Hero, About, Journey, Projects, Footer, Login, SignUp, Contact } from "./components"



const App = () => {


  return (
    <div className="font-body">

      <div className="flex pb-8 overflow-hidden">
        <SideBar />
        <div className="flex flex-col gap-40 md:pl-48 pl-24 pr-10">
          <Hero />
          <About />
          <Journey />
          <Projects />
          <Contact />
          
        </div>
        
      </div>
      <Footer />
    </div>
    
  );

}

export default App;
