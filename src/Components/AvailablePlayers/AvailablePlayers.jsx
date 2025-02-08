import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const AvailablePlayers = () => {
    const [players, setPlayers] = useState([])

    useEffect(()=> {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    return (
        <div className="lg:max-w-7xl lg:mx-auto py-6 px-4 lg:px-0 lg:py-16 flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row justify-between gap-2.5 lg:gap-0">
                <h2 className="text-xl lg:text-3xl text-[#131313] font-semibold lg:font-bold">Available Players</h2>
                <div className="border-2 border-[#1313131A] rounded-2xl">
                    <button className="py-[14px] px-[30px] rounded-l-2xl bg-blue-500 text-white text-base font-normal" type="button">Available</button>
                    <button className="py-[14px] px-[30px] rounded-r-2xl text-[#13131399] font-normal text-base" type="button">Selected (0)</button>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-[24px]">
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;