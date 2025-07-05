
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard = ({ product, viewMode = 'grid' }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: product.sizes[0], // Default to first available size
      color: product.colors[0], // Default to first available color
      image: product.image
    });
  };

  if (viewMode === 'list') {
    return (
      <Link to={`/product/${product.id}`} className="group">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex">
          <div className="w-48 h-48 flex-shrink-0 relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {product.originalPrice && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                Sale
              </div>
            )}
          </div>
          
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex space-x-1">
                  {product.colors.slice(0, 4).map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-gray-200"
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                  {product.colors.length > 4 && (
                    <span className="text-sm text-gray-500">+{product.colors.length - 4}</span>
                  )}
                </div>
                
                <div className="text-sm text-gray-500">
                  Sizes: {product.sizes.join(', ')}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
              
              <button
                onClick={handleQuickAdd}
                className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Quick Add</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover-scale">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[currentImageIndex] || product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onMouseEnter={() => setCurrentImageIndex(1)}
            onMouseLeave={() => setCurrentImageIndex(0)}
          />
          
          {/* Sale Badge */}
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              Sale
            </div>
          )}
          
          {/* Like Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`}
            />
          </button>
          
          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 bg-gray-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-800 hover:scale-110"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
          
          {/* Colors */}
          <div className="flex items-center space-x-2 mb-3">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border-2 border-gray-200"
                style={{ backgroundColor: color.toLowerCase() }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-sm text-gray-500">+{product.colors.length - 4}</span>
            )}
          </div>
          
          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
