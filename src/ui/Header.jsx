import { Link } from "react-router-dom";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IoMdCart  } from "react-icons/io";

import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

function Header() {
  const username = useSelector((state) => state.user.username);
  const isAddedToCart = useSelector(getTotalCartQuantity);
  
  console.log(username)
  return (
    <header className="bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 p-4 sm:px-6 flex items-center justify-between font-bold">
      <Link to="/" className="tracking-widest"> Fast React Pizza Co. </Link>
      <SearchOrder />
      <>
        <Username />

        {/* {isAddedToCart > 0 && username && <Link to ="/cart" className="absolute -right-0 mr-9 mb-4 bg-red-500 rounded-full w-3 h-4 text-white text-xs text-center ">{isAddedToCart}</Link>}  */}
        {username && <Link to="/cart" className="btn btn-ghost btn-circle btn-md ml-4 mt-2 px-2">
          <div className="indicator">
              <button className="button button-xs h-4 w-4 text-white indicator-item px-1 bg-red-500 rounded-full absolute mx-4 text-xs"> {isAddedToCart}
              </button>
              <IoMdCart  className="h-10 w-10" />
            </div>
        </Link>}
      </>
    </header>
  );
}

export default Header;
