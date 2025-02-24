import React, { useEffect, useState } from "react";
import { queries } from '../Store/Config'
function PreDefineQuries() {
    const [randomQuries , setRandomQuries] = useState([])
    useEffect(() => {
        const selectQuries = [];
        const usedIndices = new Set();
         while(selectQuries.length < 15) {
            const randomIndex = Math.floor(Math.random() * queries.length);
            if(!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex)
                selectQuries.push(queries[randomIndex])
            }
        }
        setRandomQuries(selectQuries);
    },[])
  return (
    <div>
        <div className="px-6  flex flex-wrap justify-center gap-3 w-full h-[300px] overflow-hidden">
                {randomQuries &&
                    randomQuries.map((query, index) => (
                        <div key={index} className="">
                            <p className="break-words shadow-inner shadow-gray-700 cursor-pointer bg-black poppins-regular lg:px-6 px-4 py-2 rounded-full text-white text-[11px] lg:text-sm">
                                {query}
                            </p>
                        </div>
                    ))}
            </div>
    </div>
  )
}

export default PreDefineQuries