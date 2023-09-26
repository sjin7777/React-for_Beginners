import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
    console.log(useLocation());
    return (
        <div>Detail page</div>
    )
}

export default Detail;