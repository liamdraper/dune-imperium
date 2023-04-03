import { useState, useEffect } from "react";
import "./Rivals.css";

export default function Rivals({game}) {

    const [img1, setImg1] = useState();
    const [img2, setImg2] = useState();

    useEffect(() => {
        async function getImg() {
            const img = await require(`../../card-images/${game.rivals[0].name}-headshot.png`);
            setImg1(img);
        }
        getImg();
    }, [])

    useEffect(() => {
        async function getImg() {
            const img = await require(`../../card-images/${game.rivals[1].name}-headshot.png`);
            setImg2(img);
        }
        getImg();
    }, [])

    return(
        <>
            <div className="rivals">
                <h1>Rivals: </h1>
                <ul>
                    <li className="rivalImg">
                        <h2>{game.rivals[0].name}</h2>
                        <img src={img1} alt="" />
                    </li>
                    <li className="rivalImg">
                        <h2>{game.rivals[1].name}</h2>
                        <img src={img2} alt="" />
                    </li>
                </ul>
            </div>
        </>
    )
}