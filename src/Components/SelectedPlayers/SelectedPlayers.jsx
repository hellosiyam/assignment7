import PropTypes from 'prop-types'
import PlayerSelect from '../PlayerSelect/PlayerSelect';

const SelectedPlayers = ({ selectedHandel, setSelected, selectPlayers, deleteHandel }) => {
    return (
        <div className="lg:max-w-7xl lg:mx-auto py-6 px-4 lg:px-0 lg:py-16 flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row justify-between gap-2.5 lg:gap-0">
                <h2 className="text-xl lg:text-3xl text-[#131313] font-semibold lg:font-bold items-center">Selected Player ({selectPlayers.length}/6)</h2>
                <div className="">
                    <button className="py-[14px] px-[30px] rounded-l-2xl text-[#13131399] font-normal text-base hover:bg-blue-500 hover:text-white cursor-pointer border-t border-l border-b border-[#1313131A]" type="button" onClick={() => setSelected(false)}>Available</button>
                    <button onClick={selectedHandel} className="py-[14px] px-[30px] rounded-r-2xl text-white hover:bg-white hover:text-black bg-blue-500 text-base font-normal cursor-pointer border-t border-r border-b border-[#1313131A]" type="button">Selected ({selectPlayers.length})</button>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {
                   selectPlayers.map(playerSelected => <PlayerSelect key={playerSelected.id} playerSelected={playerSelected} deleteHandel={deleteHandel}></PlayerSelect>) 
                }
            </div>
            <div>
                <button onClick={() => setSelected(false)} className="py-[14px] px-[30px] rounded-2xl text-white hover:border-blue-500  hover:text-black bg-blue-500 text-base font-normal cursor-pointer" type="button">Available</button>
            </div>  
        </div>
    );
};

SelectedPlayers.propTypes = {
    selectedHandel: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired,
    selectPlayers: PropTypes.func.isRequired
}

export default SelectedPlayers;