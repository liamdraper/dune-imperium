import { useState, useEffect } from "react";

export default function RivalProfileCard({leader, index, rival1, setRival1, rival2, setRival2,}) {

    const [leaderImg, setLeaderImg] = useState('');

    useEffect(() => {
        async function getImg() {
            console.log(leader)
            const img = await require(`../../card-images/${leader.name}-headshot.png`);
            setLeaderImg(img);
        }
        getImg();
    }, [])

    function handleClick() {
        if (leader === rival1) {
            setRival1(null);
            return;
        }
        if (leader === rival2) {
            setRival2(null);
            return;
        }
        if (rival1 === null) {
            setRival1(leader);
        }
        else {
            setRival2(leader);
        }
    }

    return(
        <li onClick={handleClick}>
            <img className={leader === rival1 || leader === rival2 ? 'selected-profile' : ''} src={leaderImg} alt="" />
        </li>
    )
}