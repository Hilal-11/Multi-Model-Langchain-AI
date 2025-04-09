import React, { useEffect, useState } from "react";
import Header from "../ChatUiComponent/Header";
import ChatBox from "../ChatUiComponent/ChatBox";
import UserGreeting from "../ChatUiComponent/UserGreeting";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "motion/react";
import { IoSendSharp } from "react-icons/io5";
const Gameni = () => {

    const [isSend , setIsSend] = useState(false)
    const [userInput , setUserInput] = useState('')
    const [response, setResponse] = useState(false);
    const [generatedContent, setGeneratedContent] = useState('');

    // Implementation of Google Gameni to get a response and render it on page for end users 

    const genAI = new GoogleGenerativeAI("AIzaSyAk0xNnr_cL6WADMqhRilUrakGI839EdeQ");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const generateResponse = async () => {
        const prompt = "Explain Quntam Computer and how it works , how it's different than classical computers deeply explaination.";
        try{
            const result = await model.generateContent(prompt);
            setGeneratedContent(result.response.text())
        }catch (error) {
            console.error("Error generating content:", error);
        }
    }

    useEffect(() => {   
        generateResponse()
        setResponse(true)
    } , [])

    

    console.log(generatedContent)

    const handleUserInput = (event) => {
        setUserInput(event.target.value)
        setIsSend(true)
    }
    const handleSendUserInput = () => {
        setUserInput('')
        setIsSend(false)
    }


    return (

        <div>
            {/* Header */}
            <div className="text-white">
                <Header/>
            </div>
            {/* Quries secession */}
            <div className="py-10 px-2 lg:py-30 lg:px-10">
                {response ? (
                    <div className="p-6 rounded-lg shadow-lg ">
                        <div className="text-white poppins-regular text-sm lg:text-base leading-relaxed">
                            {generatedContent.split("\n").map((line, index) => {
                               if (line.startsWith("```")) {
                                // Start of a code block
                                return (
                                    <div key={index} className="relative bg-black p-4 rounded-lg mt-4 overflow-auto">
                                        <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap">
                                            <code className="border">
                                                {line.replace(/\`\`\`/g, "").trim()}
                                            </code>
                                        </pre>
                                    </div>
                                );
                                
                                }
                                else if (line.startsWith("```")) {
                                    // End of a code block
                                    return null; // Skip the closing backtick
                                }
                                 else if (line.startsWith("**")) {
                                    return (
                                        <h2
                                            key={index}
                                            className="text-lg lg:text-xl font-bold mt-4 underline"
                                        >
                                            {line.replace(/\*\*/g, "")}
                                        </h2>
                                    );
                                } else if (line.startsWith("*")) {
                                    return (
                                        <li
                                            key={index}
                                            className="ml-6 list-disc"
                                        >
                                            {line.replace(/\*/g, "")}
                                        </li>
                                    );
                                }
                                else if (line.startsWith("##")){
                                    return(
                                        <h1
                                            key={index}
                                            className="text-2xl  font-bold mt-4 text-blue-600"
                                        >
                                            {line.replace(/\#\#/g, "")}
                                        </h1>
                                    )
                                }
                                else if (line.trim() === "") {
                                    return null; // Skip empty lines
                                } else {
                                    return (
                                        <p key={index} className="mt-2">
                                            {line}
                                        </p>
                                    );
                                }
                            })}
                        </div>
                    </div>
                ) : (
                    <div>
                        <UserGreeting />
                    </div>
                )}
            </div>

            {/* search box */}
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
}
export default Gameni