import React from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

setTimeout(() => {
    navigate("/game");
  }, 1300);



function Loading() {
    return(
        <div className="bg-black w-screen h-screen"></div>
    );
}

export default Loading ;