import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const quantity = useSelector(getTotalCartQuantity);
  const price =  useSelector(getTotalCartPrice);
  
  if(!price) return null;

  return (
    <div className="bg-stone-800 text-stone-200 capitalize p-4 sm:px-6 flex items-center justify-between h-30 mx-10 my-2 rounded-2xl">
      <p className="text-stone-300 font-semibold space-x-4">
        <span>{quantity} pizzas</span>
        <span>{formatCurrency(price)}</span>
      </p>
      <Link to = "/cart"> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
