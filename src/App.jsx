import React from "react";
import Main from './Components/Home/Main'
import { Route , Routes } from "react-router-dom";
import AImodels from "./Components/Model/AImodels";
import ChatGpt from "./Components/ChatGPT/ChatGpt";
const App = () => {
  return (  
      <div className="lg:w-[100%] min-h-screen lg:h-auto bg-black mx-auto"
            style={{
              backgroundImage: 'radial-gradient(circle at 0.6px 0.6px , rgba(90,110,114,0.7) 1px , transparent 0.6px)',
              backgroundSize: "10px 10px",
              backgroundRepeat : "repeat",
            }}
      >
        <div className="lg:w-[80%] mx-auto">
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/models" element={<AImodels/>}></Route>
            <Route path="/chatGpt" element={<ChatGpt/>}></Route>
          </Routes>
        </div>
      </div>
  )
}
export default App;

