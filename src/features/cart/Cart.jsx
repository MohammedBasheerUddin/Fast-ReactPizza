import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector(state => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if(!cart.length) return <EmptyCart/>;

  return (
    <div className="px-4 py-3">
      

      <h2 className="mt-7 text-xl font-semibold capitalize">Items in your cart, {username} </h2>
      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Buy Now
        </Button>
        {<Button type='secondary' onClick={() => dispatch(clearCart())}>Clear cart</Button>}
        <Button type="back" to ="/menu">
            &larr; Back to Menu
      </Button>
      </div>
    </div>
  );
}

export default Cart;
