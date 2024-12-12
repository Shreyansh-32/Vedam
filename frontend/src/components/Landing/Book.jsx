import { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
  const [mostPopular, setPopular] = useState([]);
  const [historic, setHistoric] = useState([]);
  const [hindiLiterature, setHindiLiterature] = useState([]);

  useEffect(() => {
    // Define and immediately invoke the async function
    const fetchData = async () => {
      try {
        const popular = await axios.get(
          "http://localhost:3000/products/search/category/Most popular"
        );
        setPopular(popular.data.books); // Use popular.data to set the state

        const history = await axios.get(
          "http://localhost:3000/products/search/category/Historic"
        );
        setHistoric(history.data.books);

        const hindi = await axios.get(
          "http://localhost:3000/products/search/category/Hindi Literature"
        );
        setHindiLiterature(hindi.data.books);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Invoke the async function
  }, []); // Empty dependency array to run only on mount

  return (
    <div>
      <div className="mt-[176px] ml-[150px] h-[520px]">
        <div>
          <h4 className="w-[229px] text-[36px] font-semibold text-[#3C1F0E] tracking-tighter">
            Most popular
          </h4>
        </div>
        <div className="mt-[65px] flex gap-[30px]">
          {mostPopular.map((val, index) => (
            <div
              key={index}
              className="w-[300px] h-[420px] bg-[#F5E0B3] rounded-[17px] relative"
            >
              <div className="absolute top-[13px] left-[16px]">
                <div className="w-[60px] h-[22px] bg-[#CCDBF9] rounded-full flex justify-center items-center">
                  <h6 className="text-[#3C1F0E] text-[14px] font-medium">New</h6>
                </div>
              </div>
              <div className="absolute top-[47px] left-[66px]">
                <img src={val.imageUrl} alt={val.title} />
              </div>
              <div className="absolute top-[314px] left-[25px]">
                <h4 className="w-[215px] text-[20px] text-[#3C1F0E] leading-5 font-normal">
                  {val.title}
                </h4>
              </div>
              <div className="absolute top-[358px] left-[25px]">
                <h5 className="text-[#414E6E] text-[14px] font-semibold">
                  {val.writer}
                </h5>
              </div>
              <div className="absolute top-[380px] left-[25px]">
                <div className="flex w-[44px]">
                  <h5 className="text-[16px] font-semibold text-[#3C1F0E]">
                    ₹ {val.price}
                  </h5>
                </div>
              </div>
              <div className="absolute top-[373px] left-[161px]">
                <button className="w-[124px] h-[32px] bg-[#C3D9FA] text-[16px] rounded-full font-medium border border-[#284DCD]">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
