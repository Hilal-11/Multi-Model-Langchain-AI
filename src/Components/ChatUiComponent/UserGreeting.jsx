import React, { useEffect, useState } from "react";
import { queries } from '../Store/Config'
import { motion } from "motion/react";

const UserGreeting = () => {

    const [randomQuries , setRandomQuries] = useState([])
    useEffect(() => {
        const selectQuries = [];
        const usedIndices = new Set();
        while(selectQuries.length < 8) {
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
                        delay: 2
                    }}
                className="text-center poppins-bold lg:text-8xl text-4xl bg-linear-to-r from-blue-300 via-blue-600 to-slate-950 text-transparent bg-clip-text">Hello Hilal</motion.h1>
                <h1 className="text-white poppins-bold lg:text-4xl text-2xl py-4">How can i help you</h1> <br />
            </div>
                <div className="flex flex-wrap w-full gap-5 pt-2 lg:py-20 justify-center px-3">
                {
                    (randomQuries) &&
                        randomQuries.map((query , index) => (
                            <div key={index}>
                                <p className="shadow-inner shadow-gray-700 cursor-pointer bg-black py-2 px-2 lg:py-2 lg:px-10 rounded-full poppins-regular text-white text-[11px] lg:text-sm">{query}</p>
                            </div>
                        ))
                }
                </div>
                <br /> <br /> <br /><br />
        </div>
    )
}
export default UserGreeting
