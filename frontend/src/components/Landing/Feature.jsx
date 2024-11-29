import FeatBook from "../../assets/FeatBook.png";
import Featsus from "../../assets/Featsus.png";
import Featcom from "../../assets/Featcom.png";
import Featstack from "../../assets/Featstack.png";

const Feature = () => {
  return (
    <div className="flex min-w-[1280px] h-[345px] ml-[150px] gap-[80px] mr-[150px] mt-[295px]">
        <div className="w-[345px] h-[345px] bg-[#FAF1DA] rounded-[30px]">
            <img src={FeatBook} alt="FeatBook" className="mt-[42px] ml-[107px]"/>
            <h4 className="text-[28px] text-[#3C1F0E] font-semibold ml-[49px] mt-[28px]">Affordable Books</h4>
            <h5 className="text-[20px] w-[274px] text-center ml-[35px] mt-[28px] leading-6">Quality reads at accessible prices.</h5>
        </div>
        <div className="w-[345px] h-[345px] bg-[#FAF1DA] rounded-[30px]">
            <img src={Featsus} alt="FeatBook" className="mt-[42px] ml-[103px]"/>
            <h4 className="text-[28px] text-[#3C1F0E] w-[279px] text-center font-semibold ml-[33px] mt-[15px]">Sustainable Mission</h4>
            <h5 className="text-[20px] w-[276px] text-center ml-[34px] mt-[15px]">Giving new life to old books.</h5>
        </div>
        <div className="w-[345px] h-[345px] bg-[#FAF1DA] rounded-[30px]">
            <img src={Featcom} alt="FeatBook" className="mt-[42px] ml-[107px]"/>
            <h4 className="text-[28px] text-[#3C1F0E] w-[290px] text-center font-semibold ml-[27px] mt-[12px]">Empowering Communities
            </h4>
            <h5 className="text-[20px] w-[345px] text-center mt-[23px] leading-6">Supporting ragpickers through every purchase.</h5>
        </div>
        <div className="w-[345px] h-[345px] bg-[#FAF1DA] rounded-[30px]">
            <img src={Featstack} alt="FeatBook" className="mt-[42px] ml-[107px]"/>
            <h4 className="text-[28px] text-[#3C1F0E] w-[290px] text-center font-semibold ml-[27px] mt-[12px]">Empowering Communities
            </h4>
            <h5 className="text-[20px] w-[256px] ml-[44px] text-center mt-[15px] leading-6">From classics to contemporary reads.</h5>
        </div>
    </div>
  )
}

export default Feature