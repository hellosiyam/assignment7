
const Player = ({player}) => {
    const {id, name, country, club, flag, position, footed, price, img, avatar} = player
    return (
        <div className="border-2 border-[#1313131A] p-6 rounded-4xl flex flex-col gap-5">
           <img className="rounded-2xl h-[230px] object-cover" src={img} alt="" /> 
           <div className=" flex flex-col gap-6">
           <div className="flex flex-col gap-3 border-b-2 border-[#1313131A] pb-4">
            <p className="text-xl text-[#131313] font-semibold">Name :  {name}</p>
            <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <p className=""><span className="max-md:hidden">Country :</span> {country}</p>
                <img className="w-6 h-6" src={flag} alt="" />
            </div>
                <div className="text-[12px] lg:text-[14px] px-[16px] py-[9px] border-2  border-blue-500 text-blue-500 rounded-3xl" type="button">{club}</div>
            </div>
           </div>
           <div className="flex flex-col gap-3">
            <p className="text-base text-[#131313] font-semibold">Rating</p>
           <div className="flex justify-between items-center">
            <p className="text-base text-[#131313] font-semibold">{position}</p>
            <p className="text-base text-[#131313B3] font-normal">{footed}-footed</p>
           </div>
           <div className="flex justify-between items-center">
            <p className="text-base text-[#131313] font-semibold">Price: $ {price}</p>
            <button className="text-[12px] lg:text-[14px] px-[16px] py-[9px] border-2 bg-blue-100 border-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl transition-all ease-in-out" type="button">Choose Player</button>
           </div>
           </div>
           </div>
        </div>
    );
};

export default Player;