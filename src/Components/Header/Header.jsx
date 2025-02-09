import PropTypes from 'prop-types'
import logo from '../../assets/image/Logo.png'
const Header = ({ coins }) => {

    return (
        // Nav

        <div>
            <div className="flex justify-between items-center mx-3.5 lg:max-w-7xl lg:mx-auto py-4 lg:py-7">
                <div>
                    <img className='h-20 w-20' src={logo} alt="" />
                </div>
                <div className="flex justify-between items-center gap-10">
                    <div className="max-md:hidden flex items-center justify-between gap-10 text-base, text-[#131313B3]  ">
                        <p>Home</p>
                        <p>Fixture</p>
                        <p>Teams</p>
                        <p>Schedules</p>
                    </div>
                    <div>
                        <button type="button" className="border-2 border-[#1313131A] rounded-xl py-4 px-5 text-base text-[#131313] font-semibold flex gap-2.5"><span>{coins}</span> Coin
                            <img src="src/assets/image/dollar.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    coins: PropTypes.object.isRequired,
}

export default Header;