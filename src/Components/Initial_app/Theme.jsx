import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Theme = ({fetchThemes}) => {
    const [themeColor , setThemeColor] = useState('')
    const [color , setColor] = useState('')
    const handleLightTheme = () => {
        setThemeColor('#ffffff')
        setColor('#000000')

    }
    const handleDarkTheme = () => {
        setThemeColor('#000000')
        setColor('#ffffff')
    }

    useEffect(() => {
        fetchThemes(themeColor)
    },[themeColor , color])

    const navigate = useNavigate('')
    return (
        <div className="h-screen flex justify-center items-center px-10 "

        >
            <div className=" text-inherit  w-full lg:w-[50%] lg:h-[400px] h-auto rounded-3xl px-10 ring-1 ring-gray-700"
                style={{
                    backgroundColor: themeColor,
                    color: color
                }}
            >
                <div>
                    <p className="text-center text-4xl poppins-bold py-10">Select Theme</p>
                    <div className="flex flex-wrap justify-center gap-8 text-inherut items-start h-full px-20">
                        <button onClick={ handleDarkTheme } className="px-10 py-4 rounded-xl ring-1 ring-gray-800 cursor-pointer poppins-bold">Dark Theme</button>
                        <button onClick={ handleLightTheme } className="px-10 py-4 rounded-xl ring-1 ring-gray-800 cursor-pointer poppins-bold hover:bg-white hover:text-black duration-500">Light Theme</button>
                    </div>
                    <div className="flex justify-center py-10 poppins-bold">
                        <button onClick={() => navigate('/home')}>Get Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Theme