import React from 'react';
import { useCart } from '../store/cartStore';
import { Minus, Navigation, Plus, Trash2 } from 'lucide-react';
import { Navigate, NavLink } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity } = useCart();

  const total = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  
  const handleJoinGroup = () => {
    const groupLink = "https://chat.whatsapp.com/BEWsdEmgMMUFd6eERfiz0a";
    window.open(groupLink, "_blank", "noopener,noreferrer");
};
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600">Add some beautiful dresses to your cart!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-6 p-6 border-b last:border-b-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-pink-600 font-bold">₹{item.price}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        disabled={item.quantity === 1}
                        className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity || 1}</span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity || 1}</span>
                  <span>₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-pink-600">₹{total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors" onClick={handleJoinGroup}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;