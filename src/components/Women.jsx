import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import ScrollToTopButton from "./ScrollToTopBtn";
import { DataWomen } from "../DataWomen";

export default function Women() {
  function HomeProducts() {
    const dataToShow = DataWomen.map((card) => (
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
      <div className="mt-10 pb-10">
        <h2 className="text-center before:bg-orange-400 uppercase text-3xl md:text-5xl font-black relative">
          Women 's Collection
        </h2>
        <div className="grid grid-cols-12 main-padding mt-10 sm:mt-12 mb-10 gap-5 md:gap-10">
          {dataToShow}
        </div>
      </div>
    );
  }
  return (
    <main>
      <Header />
      <HomeProducts />
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
