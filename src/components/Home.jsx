import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import ScrollToTopButton from "./ScrollToTopBtn";
import { DataHome } from "../DataHome";
import HomeImage from "/src/assets/home-section.webp";

export default function Home() {
  function HomeContent() {
    return (
      <div className="home-container grid grid-cols-1 md:grid-cols-12 items-center main-padding pt-5 md:pt-36">
        <div className="col-span-12 md:col-span-6 text-center md:text-start md:mr-28 p-4 md:p-0">
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ wordSpacing: "8px" }}
          >
            Explore <span className="text-orange-400 font-bold">Sneakers</span>
            <br />
            Your Ultimate Footwear Destination!
          </h1>
          <p className="text-gray-600 my-8 mb-12">
            Find the perfect kicks that blend fashion and function, ensuring
            every step is a statement. Step into Sneaker Paradise!
          </p>
          <Link
            to="/Collections"
            className="shop-btn bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-white px-8 py-3 sm:px-12 sm:py-4 rounded-lg text-lg sm:text-xl"
          >
            Shop Now
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 mt-8 md:mt-0 mb-5 flex justify-center md:justify-end">
          <img
            src={HomeImage}
            alt="home-sneakers"
            className="w-full max-w-md md:max-w-full"
          />
        </div>
      </div>
    );
  }
  function HomeProducts() {
    const dataToShow = DataHome.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        img={card.img}
        model={card.model}
        price={card.price}
        name={card.name}
        rate={card.rate}
      />
    ));
    return (
      <div className="mt-20 sm:mt-40 pb-10 sm:pb-20">
        <h2 className="section-title text-center before:bg-orange-400 uppercase text-3xl md:text-5xl font-black relative">
          Popular Sneakers
        </h2>
        <div className="grid grid-cols-12 main-padding mt-10 sm:mt-16 mb-10 gap-5 md:gap-10">
          {dataToShow}
        </div>
        <div className="text-center my-12">
          <Link
            to="/Collections"
            className="text-white bg-orange-400 text-xl font-semibold px-20 py-4 rounded-lg hover:bg-orange-500 transition-all duration-300"
          >
            See All Collection
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <HomeContent />
      <HomeProducts />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
