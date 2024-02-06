import { React } from "react";
import deleteBtn from "./images/deleteBtn.png";

export function Cart({ onDeleteCartItem, cartItems, cartOpen, onCartOpen }) {
  return (
    <div className="cart">
      <button className="btn-cart" onClick={onCartOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#0ca678"
          viewBox="0 0 256 256"
        >
          <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
        </svg>
      </button>
      {cartOpen ? (
        <div className="cart-info">
          {cartItems.length ? null : (
            <p className="empty-cart">Your cart is Empty</p>
          )}
          {cartItems.map((item) => (
            <Item item={item} key={item.name} onDeleteItem={onDeleteCartItem} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Item({ onDeleteItem, item }) {
  const { image, name, count, totalPrice } = item;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={Object.values(image)} alt="lol" />
      </div>
      <div className="text">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-count">Count: {count}</p>
        <p className="cart-item-price">Total Price:{` $${totalPrice}`}</p>
      </div>
      <button
        onClick={() => onDeleteItem(item)}
        className="btn-delete-cart-item"
      >
        <img src={deleteBtn} alt="Delete Item" />
      </button>
    </div>
  );
}
