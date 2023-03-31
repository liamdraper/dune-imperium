import { useState, useEffect } from "react";

export default function LeaderProfileCard({leader, index, selectedIndex, setSelectedIndex}) {

    const [leaderImg, setLeaderImg] = useState('');

    useEffect(() => {
        async function getImg() {
            console.log(leader)
            const img = await require(`../../card-images/${leader.name}-headshot.png`);
            setLeaderImg(img);
        }
        getImg();
    }, [])

    return(
        <li onClick={() => setSelectedIndex(index)}>
            <img className={index === selectedIndex ? 'selected-profile' : ''} src={leaderImg} alt="" />
        </li>
    )
}