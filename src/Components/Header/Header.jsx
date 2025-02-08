import logo from '../../assets/image/Logo.png'
import cover from '../../assets/image/cover.jpg'
const Header = () => {
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
                    <button type="button" className="border-2 border-[#1313131A] rounded-xl py-4 px-5 text-base text-[#131313] font-semibold flex gap-2.5">0 Coin
                    <img src="src/assets/image/dollar.svg" alt="" />
                    </button>
                </div>
             </div>
        </div>

        <div className='w-11/12 md:max-w-7xl mx-auto relative py-[64px] max-md:py-8'>
            <img className="rounded-3xl  absolute top-0 grayscale-50 w-full h-full" src={cover} alt="" />
            <div className='relative z-50 text-center'>
                <img className='mx-auto lg:mx-auto h-[80px] w-[80px] lg:h-[200px] lg:w-[200px]' src={logo}/>
                <h1 className='max-md:w-[300px] mx-auto text-xl lg:text-[40px] mb-2 lg:mb-4 text-white font-bold text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='mb-3 lg:mb-6 lg:text-2xl text-[10px] text-white'>Assemble Your Ultimate Dream 11 Cricket Team</p>
                <button className='px-3 py-2.5 lg:px-6 lg:py-5 text-white bg-blue-500 lg:rounded-2xl rounded-xl text-[14px] lg:text-xl lg:font-bold font-semibold'  type="button">Claim Free Credit</button>
            </div>
        </div>
        </div>
    );
};

export default Header;