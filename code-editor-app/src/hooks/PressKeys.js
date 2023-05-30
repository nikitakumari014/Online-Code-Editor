import React, { useState } from "react";

const PressKey = function(target)
{
    const [keyPressed,setKeyPressed] = useState(false);
    function downHandler({key}){
        if(key == target){
            setKeyPressed(true);
        }
    }
    const upHandler = ({key}) => {
        if(key == target){
            setKeyPressed(false);
        }
    };
    React.useEffect(()=>{
        document.addEventListener("keydown",downHandler);
        document.addEventListener("keyup",upHandler);
        return () =>{
            document.removeEventListener("keydown",downHandler);
            document.removeEventListener("keyup",upHandler);
        };
    });
    return keyPressed;
};

export default PressKey;