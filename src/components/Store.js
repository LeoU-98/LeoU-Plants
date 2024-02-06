import { React, useState, useReducer } from "react";
import "./Store.css";
import "./MediaQueries.css";
import { Cart } from "./Cart.js";
import { Tools, Search, Sort } from "./Tools.js";
import { plantsData } from "./plantsData.js";
import { PlantInfo } from "./PlantInfo.js";

const initialState = plantsData;

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return state.slice().sort((a, b) => a.name.localeCompare(b.name));
    case "htl":
      return state.slice().sort((a, b) => b.price - a.price);
    case "lth":
      return state.slice().sort((a, b) => a.price - b.price);
    case "search":
      return action.payload;
    case "cleanUp":
      return initialState;
    default:
      console.log("something went wrong");
  }
}

export default function Store() {
  const [chosen, setChosen] = useState(null);
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState); // for Sorting & Search
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleIsCartOpen() {
    if (chosen) setChosen(null);
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }

  function handleDeleteCartItem(item) {
    setCartItems(cartItems.filter((curItems) => curItems.name !== item.name));
  }

  function handleAddToCart() {
    let flag = 0;
    const totalPrice = count * chosen.price;
    const newItem = {
      name: chosen.name,
      image: chosen.image,
      totalPrice: totalPrice,
      count: count,
    };

    for (var k = 0; k < cartItems.length; k++) {
      if (cartItems[k].name === chosen.name) {
        const updatedItems = cartItems.map((el) =>
          el.name === chosen.name ? newItem : el
        );
        setCartItems(() => updatedItems);
        flag++;
      }
    }

    if (flag === 0) setCartItems([...cartItems, newItem]);

    setCount(1);
    setChosen(null);
  }

  function handleDecCount() {
    if (count === 1) return;
    setCount((count) => count - 1);
  }

  function handleChosen(plant) {
    if (isCartOpen) setIsCartOpen(false);
    plant.name === chosen?.name ? setChosen(null) : setChosen(plant);
  }

  return (
    <>
      <Tools>
        <Search onSearch={dispatch} data={initialState} />
        <Sort onSort={dispatch} />
        <Cart
          cartOpen={isCartOpen}
          onCartOpen={handleIsCartOpen}
          onDeleteCartItem={handleDeleteCartItem}
          cartItems={cartItems}
          onSetChosen={setChosen}
        />
      </Tools>
      <div className="store store-container">
        <div className="products-container">
          {state.map((card) => (
            <Card data={card} key={card.name} onChoose={handleChosen} />
          ))}
        </div>

        {chosen ? (
          <PlantInfo
            chosen={chosen}
            onAddToCart={handleAddToCart}
            onDec={handleDecCount}
            onInc={setCount}
            currentCount={count}
          />
        ) : null}
      </div>
    </>
  );
}

function Card({ data, onChoose }) {
  const { name, image, price } = data;

  return (
    <div className="product-item" onClick={() => onChoose(data)}>
      <div className="product-item-image">
        <img
          className="product-item-img"
          src={Object.values(image)}
          alt={name}
        />
      </div>
      <div className="text">
        <h2 className="product-item-name">{name}</h2>
        <p className="product-item-price">{`$${price}`}</p>
      </div>
    </div>
  );
}
