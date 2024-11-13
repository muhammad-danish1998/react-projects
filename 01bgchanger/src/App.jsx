import React, { useState } from "react";
import "./index.css";
const App = () => {
  let [color, setColor] = useState("red");
  console.log(color)
  return (
    <div className="w-full  h-screen" style={{backgroundColor: color }}>
     
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 p-6 bg-white shadow-lg rounded-lg space-y-4">
          <h2 className="text-center text-xl font-bold text-gray-700">
            Choose a Color
          </h2>
          <div className="grid grid-cols-5 gap-4">
            <button onClick={()=> setColor('blue')} className="w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none transition"></button>
            <button onClick={()=> setColor('red')} className="w-12 h-12 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none transition"></button>
            <button onClick={()=> setColor('green')} className="w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none transition"></button>
            <button onClick={()=> setColor('yellow')} className="w-12 h-12 bg-yellow-500 rounded-full hover:bg-yellow-600 focus:outline-none transition"></button>
            <button onClick={()=> setColor('purple')} className="w-12 h-12 bg-purple-500 rounded-full hover:bg-purple-600 focus:outline-none transition"></button>
          </div>
        </div>
      </div>
  
  );
};

export default App;
