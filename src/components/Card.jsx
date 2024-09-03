import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Card(props) {
  const [isLoved, setIsLoved] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [progress, setProgress] = useState(100);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const lovedStatus = localStorage.getItem(`loved-${props.id}`);
    if (lovedStatus) {
      setIsLoved(JSON.parse(lovedStatus));
    }
  }, [props.id]);

  const handleLoveClick = (event) => {
    event.stopPropagation();
    const newLoveStatus = !isLoved;
    setIsLoved(newLoveStatus);
    localStorage.setItem(`loved-${props.id}`, JSON.stringify(newLoveStatus));
  };

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
    const itemWithQuantity = { ...props, quantity: 1 };
    addToCart(itemWithQuantity);
    setShowMessage(true);
    setProgress(100);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(interval);
          setShowMessage(false);
          return 0;
        }
        return prevProgress - 1;
      });
    }, 30);
  };

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rate ? "rgb(251 146 60)" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div
      className={`card col-span-12 md:col-span-3 ${
        isLoved ? "border-orange-400" : ""
      }`}
    >
      <div
        className={`border p-6 relative shadow-sm ${
          isLoved ? "border-orange-400" : ""
        }`}
      >
        {showMessage && (
          <div
            className="fixed top-20 right-5 bg-white border p-4 rounded-lg shadow-lg"
            style={{ zIndex: "55" }}
          >
            Product Added To Cart Successfully!
            <div className="w-full bg-orange-500 h-1 mt-2">
              <div
                className="bg-orange-200 h-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        <div className="card-love absolute right-5 top-4">
          <button
            type="button"
            onClick={handleLoveClick}
            className={`hover:scale-125 transition-all duration-200 ${
              isLoved ? "text-orange-400" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isLoved ? "rgb(251 146 60)" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
        <div className="card-discount"></div>
        <div className="card-img hover:scale-110 transition-all duration-300 mt-10">
          <img src={props.img} alt={props.name} />
        </div>
      </div>
      <div className="flex items-center justify-between my-1">
        <div className="text-orange-400 text-lg">{props.model}</div>
        <div className="text-lg">{props.price}</div>
      </div>
      <div className="text-lg font-bold">{props.name}</div>
      <div className="flex items-center justify-between my-1">
        <div className="flex items-center gap-2">{renderStars(props.rate)}</div>
        <div>
          <button
            type="button"
            id="addToCart"
            className="cart-btn"
            onClick={handleAddToCartClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-orange-200 hover:bg-orange-400 transition-all duration-200 rounded p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
