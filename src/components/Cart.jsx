import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CartContext } from "./CartContext";
import ScrollToTopButton from "./ScrollToTopBtn";
import CartImage from "/src/assets/cart.png";

export default function Cart() {
  const { cartItems, setCartItems, cartCount, setCartCount, removeFromCart } =
    useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);
  const [progress, setProgress] = useState(100);

  const handleRemove = (id) => {
    removeFromCart(id);
    showMessageHandler();
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    setCartItems(updatedCartItems);
    setCartCount(
      updatedCartItems.reduce((count, item) => count + item.quantity, 0)
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const showMessageHandler = () => {
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

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.slice(1)) * item.quantity;
    }, 0);
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
    <div>
      <Header />
      {showMessage && (
        <div
          className="fixed top-20 right-5 bg-white border p-4 rounded-lg shadow-lg flex flex-col items-center"
          style={{ zIndex: "55" }}
        >
          <div className="mr-4">Product Removed From Cart Successfully!</div>
          <div className="w-full bg-orange-500 h-1 mt-2">
            <div
              className="bg-orange-200 h-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className="container mx-auto mt-5 sm:mt-10 pb-10 main-padding"
        style={{ minHeight: "460px" }}
      >
        <h2 className="text-center before:bg-orange-400 uppercase text-3xl md:text-5xl font-black relative">
          Your Cart
        </h2>
        <div className="cart-container grid grid-cols-1 lg:grid-cols-12 gap-10 mt-5 sm:mt-10">
          <div
            className="col-span-1 lg:col-span-7 xl:col-span-8 overflow-x-hidden"
            style={{ maxHeight: "530px" }}
          >
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center lg:items-start gap-10">
                <h2 className="text-2xl font-semibold text-center lg:text-start ml-0 lg:ml-8 text-gray-600">
                  Your Cart Is Empty
                </h2>
                <div>
                  <img src={CartImage} className="cart-img w-64 h-64" />
                </div>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between bg-white border rounded-lg p-5 mb-5"
                >
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-32 h-24 object-center rounded"
                    />
                    <div className="ml-5">
                      <p className="text-orange-400 font-semibold">
                        {item.model}
                      </p>
                      <h2 className="text-xl font-bold">{item.name}</h2>
                      <div className="flex items-center gap-2 my-2">
                        {renderStars(item.rate)}
                      </div>
                      <p className="text-orange-400 font-semibold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse sm:flex-col items-center sm:items-end gap-10 mt-5 sm:mt-0 sm:ml-5 relative">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-600 hover:text-red-600 transition duration-200 mt-5 sm:mt-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                    <div className="flex items-center mt-5 sm:mt-0">
                      <label htmlFor="quantity" className="mr-2 font-semibold">
                        Quantity:
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                        className="w-16 text-center border border-gray-300 rounded-lg py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="col-span-1 lg:col-span-5 xl:col-span-4 flex flex-col gap-5 items-center justify-center">
            <div className="flex items-center gap-4 border rounded px-10 py-6 h-16 w-full max-w-md">
              <h2 className="text-2xl font-bold">Total :</h2>
              <p className="text-xl text-orange-400 font-semibold mt-1">
                $ {calculateTotal().toFixed(2)}
              </p>
            </div>
            <div className="w-full max-w-md">
              <button
                type="submit"
                className={`w-full text-xl h-16 text-white font-bold ${
                  cartItems.length === 0
                    ? "bg-orange-200 cursor-not-allowed"
                    : "bg-orange-400 hover:bg-orange-500"
                } transition-all duration-200 rounded flex items-center justify-center gap-3`}
                disabled={cartItems.length === 0}
              >
                Check Out
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </button>
              <Link
                to="/Collections"
                className="flex justify-center mt-5 text-xl text-gray-600 hover:text-gray-800 transition duration-200"
              >
                View Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
