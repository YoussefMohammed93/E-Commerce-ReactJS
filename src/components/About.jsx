import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopBtn";
import MapImage from "/src/assets/map.svg";
import CupImage from "/src/assets/cup.svg";

export default function About() {
  return (
    <div className="about-container">
      <div>
        <Header />
      </div>
      <main>
        <div
          className="w-full flex items-center justify-center relative bg-orange-100"
          style={{ minHeight: "91vh" }}
        >
          <h1 className="about-title text-gray-600 font-black text-center uppercase">
            The Story Of
            <br />
            <span className="text-black">Sneakers</span>
            <span className="text-orange-400">.</span>
          </h1>
          <a
            href="#journey"
            className="read-btn flex gap-3 text-lg md:text-2xl text-gray-600 font-semibold absolute bottom-4"
          >
            Read
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4 md:size-6 mt-1 md:mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </a>
        </div>
        <div
          className="main-padding grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-0 py-10 md:py-20"
          id="journey"
        >
          <div className="col-span-1 md:col-span-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-center md:text-start">
                Our Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-600 my-5 md:my-10 text-center md:text-start">
                <span className="text-orange-400">Sneakers </span> was born out
                of a shared love for{" "}
                <span className="text-orange-400">sneakers </span>
                and a desire to create a one-stop destination for all
                sneakerheads. The idea originated when a group of friends
                realized that finding the perfect pair of
                <span className="text-orange-400"> sneakers </span>
                often involved scouring multiple stores and websites.
              </p>
              <p className="text-lg md:text-xl text-gray-600 mt-10 md:mt-5 text-center md:text-start">
                We decided to change this and embarked on a journey to curate a
                premium selection of
                <span className="text-orange-400"> sneakers </span>, making them
                easily accessible to sneaker enthusiasts worldwide.
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-6 flex justify-center md:justify-end">
            <img src={MapImage} className="map-img w-full md:w-auto" />
          </div>
        </div>
        <div className="main-padding grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-0 py-10 md:py-20 bg-orange-100">
          <div className="col-span-1 md:col-span-6 flex justify-center md:justify-start">
            <img src={CupImage} className="map-img w-full md:w-auto" />
          </div>
          <div className="col-span-1 md:col-span-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-center md:text-start">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-600 my-5 md:my-10 text-center md:text-start">
                <span className="text-orange-400">Sneakers </span> was born out
                of a shared love for{" "}
                <span className="text-orange-400">sneakers </span>
                and a desire to create a one-stop destination for all
                sneakerheads. The idea originated when a group of friends
                realized that finding the perfect pair of
                <span className="text-orange-400"> sneakers </span>
                often involved scouring multiple stores and websites.
              </p>
              <p className="text-lg md:text-xl text-gray-600 mt-10 md:mt-5 text-center md:text-start">
                We decided to change this and embarked on a journey to curate a
                premium selection of
                <span className="text-orange-400"> sneakers </span>, making them
                easily accessible to sneaker enthusiasts worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="main-padding flex justify-center py-20">
          <div>
            <p className="about-paragraph text-center text-xl text-gray-600">
              At <span className="text-orange-400"> Sneakers </span>, we are
              committed to providing our customers with an unparalleled shopping
              experience. We carefully handpick each pair of
              <span className="text-orange-400"> Sneakers </span> from renowned
              brands, ensuring that they meet the highest standards of
              craftsmanship, quality, and design. Whether you are a sports
              enthusiast, a street-style aficionado, or simply seeking
              comfortable everyday shoes, we have something special for
              everyone.
            </p>
            <div className="mt-16 text-center">
              <Link
                to="/Collections"
                className="text-white bg-orange-400 text-xl font-semibold px-20 py-4 rounded-lg hover:bg-orange-500 transition-all duration-300"
              >
                Explore Sneakers
              </Link>
            </div>
          </div>
        </div>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
