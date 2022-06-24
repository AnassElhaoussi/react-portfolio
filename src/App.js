
import React, { useEffect } from "react";
import './index.css'
import { SideBar, Hero, About, Journey, Projects, Footer, Login, SignUp, Contact } from "./components"
import { useInView } from "react-intersection-observer";
import { ViewContextProvider } from "./context/ViewContext";


const App = () => {


  return (

    <ViewContextProvider>    
      <div className="flex font-body pb-8">
        <SideBar />
        <div className="flex flex-col gap-20 z-50 sm:ml-48 ml-32">
          <Hero />
          <About />
        </div>
      </div>
    </ViewContextProvider>
    
  );

}

export default App;
