
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductCatalog from '../components/ProductCatalog';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <FeaturedProducts />
        <ProductCatalog />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
