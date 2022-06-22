
import React from "react";
import './index.css'
import { SideBar, Hero, About, Journey, Projects, Footer, Login, SignUp, Contact } from "./components";


const App = () => {

  return (
    <div className="h-screen font-body ">
      <div className="flex gap-72 bg-gray-100 min-h-full">
          <div className="relative">
            <SideBar />
          </div>
          <div className="p-4">
            <Hero />
          </div>
      </div>
    </div>
  );

}

export default App;
