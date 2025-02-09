import PropTypes from 'prop-types'
import { RiDeleteBinLine } from "react-icons/ri";
const PlayerSelect = ({ playerSelected, deleteHandel }) => {
    const { img, name, position } = playerSelected
    return (
        <div>
            <div className="flex justify-between items-center p-6 border border-[#1313131A] rounded-4xl">
                <div className="flex gap-4 items-center">
                    <img className="h-[80px] w-[80px] rounded-xl object-cover" src={img} alt="" />
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl text-[#131313] font-semibold ">{name}</h1>
                        <p className="text-base text-[#13131399]">{position}</p>
                    </div>
                </div>
                <div onClick={() =>deleteHandel(playerSelected)} className="text-4xl text-red-600 cursor-pointer"><RiDeleteBinLine /></div>
            </div>
        </div>
    );
};

PlayerSelect.propTypes = {
    playerSelected: PropTypes.object.isRequired,
    deleteHandel : PropTypes.func.isRequired,
}
export default PlayerSelect;