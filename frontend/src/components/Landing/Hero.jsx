import Arrow from "../../assets/Arrow.png";
import Heroimg from "../../assets/Heroimg.png";

const Hero = () => {
  return (
    <div className="min-w-[1278px] h-[554px] ml-[150px] mt-[80px] flex justify-between">
        <div className="pt-[194px]">
            <div className="flex">
                <h1 className="text-[#E6AC51] text-[64px] font-medium">Vedam,</h1>
                <h1 className="text-[#3C1F0E] text-[64px] font-medium">‎ a unique book store</h1>
            </div>
            <h4 className="text-[24px] text-[#70401E] tracking-tighter w-[395px] leading-6 mt-[15px] font-medium">Books Reborn, Stories Revisited
            From Every Corner, For Every Reader
            </h4>
            <button className="bg-[#EECB83] w-[181px] h-[56px] mt-[40px] rounded-full text-[20px] font-normal px-[26px] py-[13px]">
                <div className="flex">
                    Shop now <img src={Arrow} alt="Arrow" className="w-[30px] h-[30px]"/>
                </div>
            </button>
        </div>
        <img src={Heroimg} alt="Heroimg" className="mr-[150px] w-[587px] h-[689px]"/>
    </div>
  )
}

export default Hero