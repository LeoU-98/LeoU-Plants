import { React } from "react";

export function PlantInfo({ chosen, onAddToCart, onDec, onInc, currentCount }) {
  const { name, image, description, price } = chosen;
  return (
    <div className="plant-info">
      <div>
        <img className="plant-info-img" src={Object.values(image)} alt="name" />
      </div>
      <div className="text">
        <h3 className="plant-info-name">{name}</h3>

        <div className="plant-info-price-count">
          <p className="plant-info-price">{`$${currentCount * price}`}</p>
          <p className="count">
            <button className="btn-count count-down" onClick={onDec}>
              -
            </button>
            {currentCount}
            <button
              className="btn-count count-up"
              onClick={() => onInc(currentCount + 1)}
            >
              +
            </button>
          </p>
        </div>

        <p className="plant-info-description">{description}</p>
      </div>
      <button className="add-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
