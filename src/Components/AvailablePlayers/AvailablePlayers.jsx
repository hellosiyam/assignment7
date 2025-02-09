import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ buyHandel, setSelected, selectPlayers, decreesLength}) => {

    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);
    return (
        <div className="lg:max-w-7xl lg:mx-auto py-6 px-4 lg:px-0 lg:py-16 flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row justify-between gap-2.5 lg:gap-0">
                <h2 className="text-xl lg:text-3xl text-[#131313] font-semibold lg:font-bold items-center">Available Players : {players.length - decreesLength}</h2>
                <div className="border-2 border-[#1313131A] rounded-2xl">
                    <button className="py-[14px] px-[30px] rounded-l-2xl text-white hover:bg-white hover:text-black bg-blue-500 text-base font-normal cursor-pointer" type="button">Available</button>
                    <button className="py-[14px] px-[30px] rounded-r-2xl text-[#13131399] font-normal text-base hover:bg-blue-500 hover:text-white cursor-pointer" type="button" onClick={() => setSelected(true)}>Selected ({selectPlayers.length})</button>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-[24px]">
                {
                    players.map(player => <Player key={player.id} buyHandel={buyHandel} player={player}></Player>)
                }
            </div>
        </div>
    );
};

AvailablePlayers.propTypes = {
    buyHandel: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired,
    selectPlayers: PropTypes.func.isRequired
}

export default AvailablePlayers;