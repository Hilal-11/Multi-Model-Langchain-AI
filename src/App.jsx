import React, { useState } from "react";
import Main from './Components/Home/Main'
import { Route , Routes } from "react-router-dom";
import AImodels from "./Components/Model/AImodels";
import ChatGpt from "./Components/ChatGPT/ChatGpt";
import Gameni from "./Components/Gameni/Gameni";
import Deepseek from "./Components/Deepseek/Deepseek";
import Copilot from "./Components/Copilot/Copilot";
import Perplexity from "./Components/Perplexity/Perplexity";
import Mistrial from "./Components/Mistrial/Mistrial";
import Midjourney from "./Components/Mid_Journey/Midjourney";
import Dalle from "./Components/Dalle/Dalle";
import Donate from "./Components/Donat e/Donate";
const App = () => {
  return (  
      <div className="lg:w-[100%] min-h-screen lg:h-auto x-auto bg-black text-white"
            style={{
              backgroundImage: 'radial-gradient(circle at 0.6px 0.6px , rgba(90,110,114,0.7) 1px , transparent 0.6px)',
              backgroundSize: "10px 10px",
              backgroundRepeat : "repeat",
            }}>
          <div className="lg:w-[80%] mx-auto">
            <Routes>
              <Route path="/" element={<Main/>}></Route>
              <Route path="/models" element={<AImodels/>}></Route>
              <Route path="/chatGpt" element={<ChatGpt/>}></Route>
              <Route path="/gameni" element={<Gameni/>}></Route>
              <Route path="/deepseek" element={<Deepseek/>}></Route>
              <Route path="/copilot" element={<Copilot/>}></Route>
              <Route path="/perplexity" element={<Perplexity/>}></Route>
              <Route path="/mistrial" element={<Mistrial/>}></Route>
              <Route path="/midjourney" element={<Midjourney/>}></Route>
              <Route path="/dalle" element={<Dalle/>}></Route>
              <Route path="/donate" element={<Donate/>}></Route>
            </Routes>
          </div>
      </div>
  )
}
export default App;

