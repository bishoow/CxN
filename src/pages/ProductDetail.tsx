
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Check } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: product.image
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const getColorValue = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'Black': '#000000',
      'White': '#FFFFFF',
      'Gray': '#6B7280',
      'Navy': '#1E3A8A',
      'Red': '#DC2626',
      'Blue': '#2563EB',
      'Green': '#059669'
    };
    return colorMap[color] || color.toLowerCase();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group">
              <img
                src={product.images[currentImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Like Button */}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
              >
                <Heart
                  className={`w-6 h-6 transition-colors ${
                    isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`}
                />
              </button>

              {/* Sale Badge */}
              {product.originalPrice && (
                <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Sale
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-gray-900 scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-medium">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-lg text-gray-600">{product.description}</p>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Color: {selectedColor && <span className="font-normal text-gray-600">{selectedColor}</span>}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 ${
                      selectedColor === color
                        ? 'border-gray-900 scale-110'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: getColorValue(color) }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Size: {selectedSize && <span className="font-normal text-gray-600">{selectedSize}</span>}
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 rounded-lg font-medium transition-all hover:scale-105 ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              className={`w-full py-4 px-6 rounded-full font-medium text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                !selectedSize || !selectedColor
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : isAdded
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 hover:shadow-lg'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-6 h-6" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-6 h-6" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            {/* Product Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Care Instructions */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Instructions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Machine wash cold with like colors</li>
                <li>• Do not bleach</li>
                <li>• Tumble dry low</li>
                <li>• Iron on low heat if needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover-scale">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">${relatedProduct.price}</span>
                        {relatedProduct.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${relatedProduct.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
