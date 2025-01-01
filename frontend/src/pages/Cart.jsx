import { useEffect, useState } from 'react';
import { Items } from '../components/general/Items';
import axios from 'axios';
import Navbar from '../components/general/Navbar';
import Footer from '../components/general/Footer';

const Cart = () => {
  const [items , setItems] = useState([]);


  useEffect(() => {
    async function fetchCart() {
        try {
            const res = await axios.get("http://localhost:3000/cart", {
                headers: { token: localStorage.token },
            });
            setItems(res.data.cart);
            console.log(res);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    }
    fetchCart();
}, []);


  return (
    <div>
      <Navbar/>
      <center className='pb-52 bg-[#fdf9ef]'>
      <main className='w-11/12 h-full pt-20 pb-20]'>
        <div className='w-11/12 h-auto flex md:justify-between md:items-center flex-col md:flex-row'>
          <h1 className='text-5xl font-sans block font-semibold'>Your Cart</h1>
          <button className='mr-4 text-lg border bg-[#fbf1d9] py-[10px] px-[32px] rounded-full shadow-md' onClick={() => {
            window.location.href = "/orders";
          }}>Your orders</button>
        </div>

        <Items className='w-full h-48' setItems = {setItems} items={items}></Items>
        <center><p>You have reached the end of your cart</p></center>
    </main>
    </center>
    <Footer/>
    </div>
  )
}

const Search = () => {
  return(
    <div className='flex md:flex-row flex-col'>
      <input type="text" placeholder='Search all orders' className='w-full h-10 md:w-80 md:h-8 mt-3 md:mt-0 border rounded-md border-slate-700 px-8'/>
      <button className='md:ml-4 w-full mt-2 h-8 md:mt-0 md:mr-0 md:visible bg-gray-800 text-white md:h-8 md:w-32 px-2 border rounded-full'>Search Orders</button>
    </div>
  )
}

export default Cart