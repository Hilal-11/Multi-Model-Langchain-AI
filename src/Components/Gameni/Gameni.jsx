import React, { useEffect, useState } from "react";
import Header from "../ChatUiComponent/Header";
import ChatBox from "../ChatUiComponent/ChatBox";
import UserGreeting from "../ChatUiComponent/UserGreeting";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "motion/react";
import { IoSendSharp } from "react-icons/io5";
const Gameni = () => {


    // const [response, setResponse] = useState(false);
    const [generatedContent, setGeneratedContent] = useState('');

    // Implementation of Google Gameni to get a response and render it on page for end users 

    const genAI = new GoogleGenerativeAI("AIzaSyAk0xNnr_cL6WADMqhRilUrakGI839EdeQ");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const generateResponse = async () => {
        const prompt = "Explain AI, ML and DL with examples";
        try{
            const result = await model.generateContent(prompt);
            setGeneratedContent(result.response.text())
        }catch (error) {
            console.error("Error generating content:", error);
        }
    }

    useEffect(() => {   
        generateResponse()
    } , [])

    



    const [isSend , setIsSend] = useState(false)
    const [userInput , setUserInput] = useState('')
    const handleUserInput = (event) => {
        setUserInput(event.target.value)
        setIsSend(true)
    }
    const handleSendUserInput = () => {
        setUserInput('')
        setIsSend(false)
    console.log(userInput)

    console.log(generatedContent)






    return (
        <div className="">
            {/* Header */}
            <div className="text-white py-1 ">
                <Header/>
            </div> <br />
         
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}  
                transition={{
                    duration: 1.5
                }}
            className="w-full mx-auto fixed lg:bottom-12 bottom-4 rounded-xl px-2">
                <div className="">
                    <div className="relative  text-white poppins-regular w-[100%] lg:w-[80%]">
                        <textarea
                            value={userInput}
                            onChange={ handleUserInput }
                            name="userInput"
                            type="text" 
                            className="py-4 resize-none bg-black ring-1 ring-gray-800 lg:h-[100px] h-[100px] w-full lg:w-[100%] md:w-[100%] rounded-3xl px-3" 
                            placeholder="Ask to Gemini:- " />
                        {
                            isSend && <button
                            onClick={ handleSendUserInput }
                            className=" absolute z-50 right-6 top-9"><IoSendSharp className="text-2xl lg:text-3xl cursor-pointer" /></button>
                        }
                    </div>
                </div>
            </motion.div>  
        </div>
    )
}}
export default Gameni