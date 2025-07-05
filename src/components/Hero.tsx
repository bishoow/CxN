
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {" "}T-Shirts
              </span>
              <br />
              for Everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Discover our curated collection of high-quality, comfortable T-shirts. 
              Perfect fit, premium materials, and timeless designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
              >
                Shop Collection
              </Link>
              <Link
                to="/about"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-96 lg:h-[500px] group">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&crop=center"
                alt="Premium T-shirt collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-700"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-2xl">👕</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-gray-900"></div>
      </div>
    </section>
  );
};

export default Hero;
