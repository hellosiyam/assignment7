import logo from '../../assets/image/Logo.png'
const Footer = () => {
    return (
        <div className='relative'>
            <div className="bg-[#06091A] flex flex-col gap-6 lg:gap-10 px-4 pt-[130px] lg:pt-[150px] lg:px-[140px]">
                <div className='mx-auto'>
                    <img src={logo} alt="" />
                </div> 
                <div className='flex flex-col lg:flex-row lg:justify-between max-sm:gap-5'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-[18px] font-semibold text-white'>About Us</h2>
                        <div className='text-base text-[#FFFFFF99]'>
                            <p>We are a passionate team </p>
                            <p>dedicated to providing the best</p>
                            <p>services to our customers.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                    <h2 className='text-[18px] font-semibold text-white'>Quick Links</h2>
                    <div className='text-[#FFFFFF99] list-disc'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                    <h2 className='text-[18px] font-semibold text-white'>Subscribe</h2>
                    <p className='text-base text-[#FFFFFF99]'>Subscribe to our newsletter for the <br /> latest updates.</p>
                    <div className='flex '>
                        <input className='rounded-l-xl px-[16px] lg:px-[30px] py-[15px] bg-white' type="text" placeholder='Enter your email' />
                        <button className='rounded-r-xl px-[16px] lg:px-[30px] py-[15px] text-base text-[#040D11] font-semibold bg-gradient-to-r from-[#D6C48F] via-[#F7CA69] to-[#EB868B] ...'>Subscribe</button>
                    </div>
                    </div>
                    </div>
                    <div className='text-white text-center py-8 border-t border-[#FFFFFF26] '>
                    <p>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;