import React from 'react';
import { useState, createContext } from "react";
import "./Arakeen.css";

export default function Arrakeen() {
    
    const [avail, setAvail] = useState(false);


    return (
        <>
        <div id="location" className={avail ? "avail" : "unavail"}>
            <h3>Arrakeen</h3>
        </div>
        </>
    )
}