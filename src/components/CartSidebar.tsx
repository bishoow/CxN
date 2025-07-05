
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl animate-slide-in-right overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Shopping Cart ({cartItems.length})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some T-shirts to get started!</p>
              <button
                onClick={onClose}
                className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="font-medium text-gray-900 line-clamp-2">{item.name}</h3>
                    <div className="text-sm text-gray-600">
                      Size: {item.size} • Color: {item.color}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                        className="p-1 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
