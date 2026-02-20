import { useState } from "react";

//derived states are the states which are calculated from the existing state or props and reduce unneccessary duplication or extra state creation

const Cart = () => {
  const [price, setPrice] = useState(1000);
  const [quantity, setQuantity] = useState(4);
  let cartTotal = price * quantity; //derived state -> calculated using price and quantity state

  return <div>
    <h1>Total: {cartTotal}</h1>
  </div>;
};

export default Cart;
