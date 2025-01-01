import { useEffect, useState } from "react"
import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"
import axios from "axios";

const Orders = () => {
    const [orders , setOrders] = useState([]);
    useEffect(() => {
        async function fetchOrders(){
            const response = await axios.get("http://localhost:3000/orders" , {
                headers : {token : localStorage.token}
            });
            if(response.status === 200)setOrders(response.data.orders);
            else{
                alert("Please log-in to use orders page");
                window.location.href = "/login";
            }
        }
        fetchOrders();
    } , []);
  return (
    <div>
        <Navbar/>
        <div className="bg-[#fdf9ef]">
        <h3 className="text-5xl font-semibold ml-[5%] pt-10">Orders</h3>
        <div className="bg-[#fdf9ef] w-full h-full flex flex-col items-center gap-16 pt-10 pb-52">
            {orders.map((val , index) => (
                <div key={index} className="w-11/12 bg-[#fbf1d9] h-80 p-8 flex justify-between border shadow-xl rounded-2xl items-center">
                    <div className="flex gap-12">
                        <img src={val.productId.imageUrl} alt={val.productId.title} className="h-[45%]"/>
                        <div className="flex flex-col justify-center">
                            <p className="font-semibold text-3xl">{val.productId.title}</p>
                            <p className="text-lg font-light mt-2">{val.productId.writer}</p>
                            <p className="text-lg mt-2">{val.productId.description}</p>
                            <p className="text-sm mt-2">{val.time}</p>
                            <p className="text-sm mt-1">{val.date}</p>
                            <p className="text-sm mt-1">Quantity {val.quantity}</p>
                            <p className="text-sm mt-1">Price ₹{val.productId.price}</p>
                        </div>
                    </div>
                    <button className="border px-8 py-4 mr-4 rounded-full border-[#713f1d]" onClick={async() => {
                        // console.log(localStorage.token);
                        const res = await axios.delete("http://localhost:3000/orders" , {
                            orderId : val._id
                        }, {
                            headers : {token : localStorage.token}
                        });
                        console.log(res);
                        if(res.status === 200)setOrders(res.data.orders);
                    }}>Cancel order</button>
                </div>
            ))}
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Orders