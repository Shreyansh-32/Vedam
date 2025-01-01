import axios from "axios";

export function Items({ items, setItems }) {
  return (
    <div>
      <Card setItems={setItems} items={items}></Card>
    </div>
  );
}

const Card = ({ items, setItems }) => {
  return (
    <div>
      {items.length > 0 ? (
        items.map((value, index) => (
          <div key={value.id || index}>
            <div
              className="flex w-11/12 h-80 md:h-80 mt-10  my-6 border p-2 rounded-2xl shadow-xl
                            md:p-4 justify-between items-center overflow-hidden bg-[#fbf1d9]"
            >
              <Image value={value}></Image>
              <Buttons setItems={setItems} value={value}></Buttons>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No items available</p>
      )}
    </div>
  );
};

const Image = ({ value }) => {
  return (
    <div className="flex items-center">
      <img
        src={value.productId.imageUrl || "default-image-path.jpg"}
        alt="Product image"
        className="h-[45%]"
      />
      <div className="ml-7 w-[40%] flex flex-col">
        <p className="text-2xl font-semibold text-left">
          {value.productId.title}
        </p>
        <p className="text-lg mt-2 text-left">{value.productId.description}</p>
        <p className="text-left">Quantity : {value.quantity}</p>
      </div>
    </div>
  );
};

const Buttons = ({ value, setItems }) => {
  return (
    <div className="flex flex-col gap-2 mr-4">
      <button
        className="invisible md:visible w-0 md:w-auto mb-1.5 md:my-1 border border-slate-600 rounded-full py-[8px] px-[16px]"
        onClick={async() => {
          console.log(value);
          async function placeOrder() {
            const res = await axios.post(
              "http://localhost:3000/user/orders",
              {
                quantity: value.quantity,
                productId: value.productId._id,
              },
              {
                headers: { token: localStorage.token },
              }
            );
            if (res.status === 200) alert("Order placed successfully");
            else alert("Please log in first");
          }
          placeOrder();
          const res = await axios.post(
            "http://localhost:3000/user/addcart",
            {
              quantity: -value.quantity,
              productId: value.productId._id,
            },
            {
              headers: { token: localStorage.token },
            }
          );
          const response = await axios.get("http://localhost:3000/cart", {
            headers: { token: localStorage.token },
          });
          console.log(response.data.cart);
          setItems(response.data.cart);
        }}
      >
        Place order
      </button>
      <button
        className="invisible md:visible w-0 md:w-auto mb-1.5 md:my-1 border border-slate-600 rounded-full py-[8px] px-[16px]"
        onClick={async () => {
          console.log(value.productId);
          const res = await axios.post(
            "http://localhost:3000/user/addcart",
            {
              quantity: -value.quantity,
              productId: value.productId._id,
            },
            {
              headers: { token: localStorage.token },
            }
          );
          const response = await axios.get("http://localhost:3000/cart", {
            headers: { token: localStorage.token },
          });
          console.log(response.data.cart);
          setItems(response.data.cart);
        }}
      >
        Remove from cart
      </button>
    </div>
  );
};

const OrderDetails = ({ value }) => {
  return (
    <div className="w-full h-14 flex m-2 mt-1 justify-between">
      <div className="flex justify-between">
        <p className="w-10">TOTAL {value.amount}</p>
        <p className="ml-8 md:ml-12 w-14">Ship to {value.user}</p>
        <p className="ml-8 md:ml-12 w-0 md:w-24 invisible md:visible">
          Ordered on {value.orderDate}
        </p>
      </div>
      <div>
        <p className="mr-3 w-24">ORDER {value.orderId}</p>
      </div>
    </div>
  );
};
