
import { AiFillDelete } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className=" flex gap-x-[60px] max-w-[600px] ">

        <div>
          <img src={item.image} alt=" " className=" max-h-[500px]" />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-xl  text-left mt-1 pt-6">{item.title}</h1>
          <h1 className=" text-gray-400 font-normal text-[12px] text-left pt-8">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
          <div className=" flex justify-between pt-10">
            <p className="text-green-600 font-bold"> ${item.price}</p>
            <div className=" relative">
              <div
                onClick={removeFromCart}
                className=" w-10  h-10 rounded-full bg-green-300">
                <AiFillDelete className="text-xl absolute right-[10px] bottom-[10px]" />
              </div>
            </div>

          </div>

        </div>


      </div>

    </div >
  );
};

export default CartItem;
