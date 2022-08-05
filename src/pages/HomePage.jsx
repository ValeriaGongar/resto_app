
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Reservation from "../components/Reservation";
import Portfolio from "../components/Portfolio";
import Products from "../components/Products";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import scrollreveal from "scrollreveal";

export default function HomePage() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Products />
      <Reservation />
      <Footer />
    </>
  );
}