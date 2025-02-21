import React from "react";
import Header from "../ChatUiComponent/Header";
import ChatBox from "../ChatUiComponent/ChatBox";
import UserGreeting from "../ChatUiComponent/UserGreeting";
const ChatGpt = () => {
    return (
        <div>
            {/* Header */}
            <div className="text-white">
                <Header/>
            </div>
            {/* Quries secession */}
            <div className="py-10 lg:py-20">
                <UserGreeting/>
            </div>
            {/* search box */}
            <div>
                <ChatBox/>
            </div>
        </div>
    )
}
export default ChatGpt