import React from "react";
const Button = (props) => {
    return (
        <div className="relative lg:w-[40%] w-[80%] text-xl py-4 rounded-xl bg-black shadow-inner shadow-gray-500 text-white cursor-pointer poppins-medium text-center ring-1 ring-gray-500">
            <button>{props.content}</button>
        </div>
    )
}
export default Button