import './App.css';

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.prix, 0);

  return (
    <div>
      <h2>Panier (Cart)</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.artic} - ${item.prix}
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </>
      )}
    </div>
  );
}

export default Cart;