
import React from "react";
import "./index.css";

import Nav from "./componets/Nav.jsx";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections/index";
import OurProductsSection from "./sections/OurProductsSection.jsx";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <OurProductsSection />
      </section>

      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-blue-50 padding'>
        <CustomerReviews />
      </section>
      <section className='sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
