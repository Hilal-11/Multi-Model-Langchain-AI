import React, { useEffect, useState } from "react";
import { queries } from '../Store/Config'
import { motion } from "motion/react";

const UserGreeting = () => {

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
        <div className="flex-row-full text-center items-center justify-center gap-10">
            <div>
                <motion.h1 
                    initial={{
                        opacity: 0,
                        x: -3000
                    }}
                    animate={{
                        opacity: 1,
                        x: 1

                    }}
                    transition={{
                        duration: 1,
                        delay: 1
                    }}
                className="text-center poppins-bold lg:text-8xl text-4xl bg-linear-to-r from-blue-300 via-blue-600 to-slate-950 text-transparent bg-clip-text">Hello Hilal</motion.h1>
                <h1 className="text-white poppins-bold lg:text-4xl text-2xl py-4">How can i help you</h1> <br />

            </div>
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
                
                <br /> <br /> <br /><br />
        </div>
    )
}
export default UserGreeting
