import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed cursor-pointer flex z-50 items-center opacity-100 sm:opacity-80 justify-center border-none w-16 h-16 text-xl bottom-12 sm:bottom-5 transition-all bg-orange-200 hover:bg-orange-300 hover:opacity-100 rounded-full duration-300 ${
        showButton ? "right-4" : "-right-16"
      }`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
