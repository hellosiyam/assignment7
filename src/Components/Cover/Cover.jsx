import PropTypes from 'prop-types'
import logo from '../../assets/image/Logo.png'
import cover from '../../assets/image/cover.jpg'
const Cover = ({ coinHandel }) => {
    return (
        <div>
            <div className='w-11/12 md:max-w-7xl mx-auto relative py-[64px] max-md:py-8'>
                <img className="rounded-3xl  absolute top-0 grayscale-50 w-full h-full" src={cover} alt="" />
                <div className='relative z-50 text-center'>
                    <img className='mx-auto lg:mx-auto h-[80px] w-[80px] lg:h-[200px] lg:w-[200px]' src={logo} />
                    <h1 className='max-md:w-[300px] mx-auto text-xl lg:text-[40px] mb-2 lg:mb-4 text-white font-bold text-center'>Assemble Your Ultimate Dream 11 Football Team</h1>
                    <p className='mb-3 lg:mb-6 lg:text-2xl text-[10px] text-white'>Assemble Your Ultimate Dream 11 Football Team</p>
                    <button onClick={coinHandel} className='px-3 py-2.5 lg:px-6 lg:py-5 text-white hover:bg-white hover:text-black bg-blue-500 lg:rounded-2xl rounded-xl text-[14px] lg:text-xl lg:font-bold font-semibold cursor-pointer' type="button">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

Cover.propTypes = {
    coinHandel: PropTypes.func.isRequired,

}
export default Cover;