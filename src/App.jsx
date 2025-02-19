import React from "react";
import Main from './Components/Home/Main'
const App = () => {
  return (
    <div className="lg:h-screen h-[760px] bg-black "
      style={{
        backgroundImage: 'radial-gradient(circle at 0.6px 0.6px , rgba(90,110,114,0.7) 1px , transparent 0.6px)',
        backgroundSize: "10px 10px",
        backgroundRepeat : "repeat",
      }}
    >
      <div className="lg:w-[80%] w-full mx-auto"> //whole website wrapper
        <Main />
      </div>
    </div>
  )
}
export default App;