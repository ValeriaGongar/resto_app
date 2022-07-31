import React, { useEffect } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Newsletter from './components/Newsletter'
import Portfolio from './components/Portfolio'
import Products from './components/Products'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import scrollreveal from "scrollreveal"

export default function App() {
  useEffect(() => {
    const sr=scrollreveal({
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
  <NavBar/>
  <ScrollToTop/>
  <Hero/>
  <Services/>
  <Portfolio/>
  <Testimonials/>
  <Products/>
  <Newsletter/>
  <Footer/>
  </>
  );
}
