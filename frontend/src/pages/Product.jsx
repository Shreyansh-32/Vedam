import { useEffect, useState } from "react";
import Footer from "../components/general/Footer";
import Navbar from "../components/general/Navbar";
import axios from "axios";

const Product = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      const books = await axios.get("http://localhost:3000/products");
      setBooks(books.data.products);
    }
    fetchBooks();
    console.log(books);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-10 pt-[106px] bg-[#fdf9ef] h-full w-full pb-[176px]">
        <h3 className="font-semibold text-5xl ml-28">Products</h3>
        {books.map((val, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-[100%]"
          >
            <div className="flex gap-8 bg-[#fbf1d9] w-[90%] border shadow-xl rounded-2xl px-8 py-8">
              <img src={val.imageUrl} alt={val.title} />
              <div className="flex flex-col justify-center gap-2 w-[50%]">
                <h4 className="text-3xl font-semibold">{val.title}</h4>
                <h5 className="text-xl">{val.description}</h5>
                <h5 className="text-xl">{val.writer}</h5>
                <h6 className="text-xl">₹ {val.price}</h6>
              </div>
              <div className=" ml-96 flex flex-col gap-8 justify-center">
                <button className="border border-[#713f1d] px-8 py-4 rounded-full" onClick={() => {
                    console.log(val);
                    async function placeOrder(){
                        const res = await axios.post("http://localhost:3000/user/orders" , {
                            quantity : 1,
                            productId : val._id
                        },{
                            headers : {token : localStorage.token}
                        });
                        if(res.status === 200)alert("Order placed successfully");
                        else alert("Please log in first");
                    }
                    placeOrder();
                }}>
                  Place Order
                </button>
                <button
                  className="border border-[#713f1d] px-8 py-4 rounded-full"
                  onClick={async () => {
                    try {
                      const res = await axios.post(
                        "http://localhost:3000/user/addcart",
                        {
                          productId: val._id,
                          quantity: 1,
                        },
                        {
                          headers: { token: localStorage.token },
                        }
                      );
                      if (res.status === 403) {
                        alert("Please log in first");
                        window.location.href("/login");
                      } else if (res.status === 500)
                        alert("Internal server error");
                      else if (res.status === 200) {
                        alert("Added to cart successfully");
                      }
                    } catch (err) {
                      alert("Please login first");
                      window.location.href = "/login";
                    }
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
