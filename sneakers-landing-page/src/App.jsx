import Navbar from './components/Navbar'
import CustomerReview from "./sections/CustomerReview";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding ">
        <PopularProducts />
      </section>
      <section className="padding ">
        <SuperQuality />
      </section>
      <section className="padding-x ">
        <Services />
      </section>
      <section className="padding ">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
