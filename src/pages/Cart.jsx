import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div >
      {
        cart.length > 0 ?
          (<div className="flex gap-x-[100px] justify-between items-center max-w-6xl  mx-auto">


            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} className=" gap-3" />
                })
              }
            </div>

            <div className=" relative flex flex-col" >

              <div>
                <div className=" text-lg uppercase ">Your Cart</div>
                <div className=" text-4xl text-green-600 font-bold uppercase ">Summary</div>
                <p className=" pt-3">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div >
                <p className=" pt-3">Total Amount: <span className=" font-black">${totalAmount.toFixed(2)}</span> </p>
                <button className=" text-gray-100 bg-green-600 border-2 border-gray-700 rounded-md font-semibold 
                         text-[15px] p-2 px-3 uppercase w-[400px]
                         hover:bg-gray-700
                         hover:text-white transition duration-300 ease-in ">
                  CheckOut Now
                </button>
              </div>

            </div>


          </div>) :
          (<div>
            <h1>Cart Empty</h1>
            <Link to={"/"}>
              <button>
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div >
  );
};

export default Cart;
