
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { mockProducts } from '../data/mockProducts';

const FeaturedProducts = () => {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites from our premium T-shirt collection. 
            Quality meets style in every piece.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
          >
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
