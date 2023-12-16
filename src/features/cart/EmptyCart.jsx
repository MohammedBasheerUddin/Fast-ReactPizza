import Button from '../../ui/Button';
// import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='self-center'>
      {/* <LinkButton to="/menu" className="px-3 py-4">&larr; Back to menu</LinkButton> */}
      <Button type="back" to ="/menu">
            &larr; Back to Menu
      </Button>
      <p className='m-9 font-semibold text-center text-xl items-center'>Your cart is still empty. Start adding some pizzas :)</p>
      
    </div>
  );
}

export default EmptyCart;
