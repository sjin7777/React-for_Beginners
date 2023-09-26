import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() =>{
        if(location.state === null) navigate("/");
    });

    return (location.state) ? <div>{location.state.title}</div> : null;
}

export default Detail;