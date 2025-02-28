import { motion } from "motion/react";
import PreDefineQuries from "./PreDefineQuries";
const UserGreeting = () => {
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
                className="my-8 text-center poppins-bold lg:text-8xl text-4xl bg-linear-to-r from-blue-300 via-blue-600 to-slate-950 text-transparent bg-clip-text">Hello Rio</motion.h1>
                <h1 className="text-white poppins-bold lg:text-4xl text-2xl py-4">How can i help you</h1> <br />

            </div>
                <PreDefineQuries/>
                <br /> <br /> <br /><br />
        </div>
    )
}
export default UserGreeting
