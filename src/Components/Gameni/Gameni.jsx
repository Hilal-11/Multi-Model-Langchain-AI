import React, { useState } from "react";
import Header from "../ChatUiComponent/Header";
import ChatBox from "../ChatUiComponent/ChatBox";
import UserGreeting from "../ChatUiComponent/UserGreeting";
const Gameni = () => {

    const [response , setResponse] = useState(false)

    return (
        <div className="">
            {/* Header */}
            <div className="text-white py-1 ">
                <Header/>
            </div> <br />
            {/* Quries secession */}
            <div className="py-5 lg:py-20">
                {
                    (response === true ) ? (<UserGreeting/>) : (<div className="">
                        <div className=" rounded-xl py-6 px-4">
                            <p className="text-[14px] lg:text-[16px] poppins-regular">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quis harum suscipit quod corporis cupiditate fugit impedit velit provident inventore nostrum, porro possimus, incidunt aliquam voluptatem unde, consectetur vero laboriosam? Dolore iure beatae unde. Necessitatibus sunt reprehenderit quasi qui magni? <br /> <br /> Provident temporibus tenetur explicabo debitis optio, laborum culpa, fugiat aut labore totam maxime vitae ut corrupti dicta ipsa magnam libero suscipit inventore quis odio quibusdam at. Architecto iusto corporis non cumque et, necessitatibus natus unde cum eveniet, veniam officia, accusamus quisquam! Laboriosam accusantium, <br /> laudantium tenetur quam sed placeat dolores eveniet nobis, temporibus itaque nihil <br /> <br /> eius architecto perferendis necessitatibus eaque iste pariatur modi suscipit doloremque rerum cupiditate explicabo eum? Quia velit modi enim praesentium nisi! Tempora accusantium perferendis, illum quas vitae <br /> <br /> veritatis porro odit, eius fugiat earum natus. Minima, minus corrupti! Laborum eos aliquam officiis porro quo ad nihil alias tempora. Natus facere minima consequatur commodi sapiente pariatur, voluptate temporibus similique eum soluta quas<br /> <br />  itaque error perferendis delectus placeat autem eligendi. Culpa eos nihil iure recusandae quaerat maiores, voluptatibus repudiandae delectus explicabo. Asperiores earum saepe dicta sunt facere veniam pariatur voluptas sed iusto mollitia voluptate delectus minima, perferendis unde! Dicta, itaque voluptates totam culpa quisquam id explicabo soluta eum voluptatem sit?
                                <br /><br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quis harum suscipit quod corporis cupiditate fugit impedit velit provident inventore nostrum, porro possimus, incidunt aliquam voluptatem unde, consectetur vero laboriosam? Dolore iure beatae unde. Necessitatibus sunt reprehenderit quasi qui magni? <br /> <br /> Provident temporibus tenetur explicabo debitis optio, laborum culpa, fugiat aut labore totam maxime vitae ut corrupti dicta ipsa magnam libero suscipit inventore quis odio quibusdam at. Architecto iusto corporis non cumque et, necessitatibus natus unde cum eveniet, veniam officia, accusamus quisquam! Laboriosam accusantium, <br /> laudantium tenetur quam sed placeat dolores eveniet nobis, temporibus itaque nihil <br /> <br /> eius architecto perferendis necessitatibus eaque iste pariatur modi suscipit doloremque rerum cupiditate explicabo eum? Quia velit modi enim praesentium nisi! Tempora accusantium perferendis, illum quas vitae <br /> <br /> veritatis porro odit, eius fugiat earum natus. Minima, minus corrupti! Laborum eos aliquam officiis porro quo ad nihil alias tempora. Natus facere minima consequatur commodi sapiente pariatur, voluptate temporibus similique eum soluta quas<br /> <br />  itaque error perferendis delectus placeat autem eligendi. Culpa eos nihil iure recusandae quaerat maiores, voluptatibus repudiandae delectus explicabo. Asperiores earum saepe dicta sunt facere veniam pariatur voluptas sed iusto mollitia voluptate delectus minima, perferendis unde! Dicta, itaque voluptates totam culpa quisquam id explicabo soluta eum voluptatem sit?
                            </p>
                        </div>
                    </div>)
                    
                }
            </div>
            {/* search box */}
            <div>
                <ChatBox placeholder={"Ask anything to Gameni:- "}/>
            </div>
        </div>
    )
}
export default Gameni