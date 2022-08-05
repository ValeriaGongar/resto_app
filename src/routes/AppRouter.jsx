import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Reservation from '../components/Reservation'
import Portfolio from '../components/Portfolio'
import Products from '../components/Products';
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import scrollreveal from "scrollreveal"

const AppRouter = () => {
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
            #reservation,
            .footer
        `,
          {
            opacity: 0,
            interval: 200,
          }
        );
      }, []);

    return(
        <Router>
            <NavBar />
            <Routes>
            <Route path="/" element={<HomePage />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="*" element={<Navigate to="/" />} />
          
            </Routes>
        </Router>
        
    );
};
export default AppRouter;
