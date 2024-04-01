import { useState } from "react";
import "./App.css";

function App() {
    
  const [count,handler]=useState(0);
   
  function decrementHandler(){
     handler(count-1);
  }
  function IncrementHandler(){
    handler(count+1);
  }
  function reset(){
    handler(0);
  }
  return (
     <div className="bg-red-100 h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-10">
      <h1 className="text-[#5f45c0] font-medium text-2xl">
        Increment and Decrement
      </h1>
      <div className="flex  justify-center gap-12 py-3 rounded-sm text-[25px] bg-white border-2 border-[#324234]">
        <button onClick={decrementHandler} className="border-r-2 text-center w-20 text-5xl border-[#324234]">-</button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button onClick={IncrementHandler} className="border-l-2 text-center w-20 text-5xl border-[#324234]">+</button>
      </div>
      <button className="border-2 border-[#324234] px-5 py-2 font-medium rounded-sm text-lg" onClick={reset}>Reset</button>
     </div>
  );
}

export default App;
