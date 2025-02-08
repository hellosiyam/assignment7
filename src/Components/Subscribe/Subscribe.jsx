
const Subscribe = () => {
    return (
        <div className='lg:max-w-7xl lg:mx-auto mx-6 mb-[-180px] relative z-50 p-6 bg-[#ffffff1A] border border-white rounded-3xl'>
            <div className='flex flex-col items-center p-4 gap-5 lg:py-[88px] bg-gradient-to-r from-[#BFE8F8] via-[#FAFDFE] to-[#FBD7B0] ... rounded-3xl'>
                <h1 className='text-2xl lg:text-4xl text-[#131313] font-bold text-center'>Subscribe to our Newsletter</h1>
                <p className='text-[14px] lg:text-xl text-[#131313B3] font-medium text-center'>Get the latest updates and news right in your inbox!</p>
                <div className='flex gap-4 flex-col lg:flex-row '>
                    <input className='px-4 lg:px-8 py-2.5 lg:py-5 text-base text-[#13131366] border border-[#13131326] rounded-2xl' type="text" placeholder='Enter your email' />
                    <button className='px-4 lg:px-8 py-2.5 lg:py-5 text-base text-[#131313] lg:font-bold bg-gradient-to-r from-[#D6C48F] via-[#F7CA69] to-[#EB868B] ... rounded-2xl' type="button">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;