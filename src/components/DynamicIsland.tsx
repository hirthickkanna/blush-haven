import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../store/cartStore';

const DynamicIsland: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const cartItems = useCart((state) => state.items);

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'collections', icon: ShoppingBag, label: 'Collections', path: '/collections' },
    { id: 'cart', icon: ShoppingCart, label: 'Cart', path: '/cart', badge: cartItems.length }
  ];

  return (
    <div 
      className={`fixed top-4 left-1/2 -translate-x-1/2 bg-black rounded-3xl transition-all duration-500 cursor-pointer z-50
        ${isExpanded ? 'w-[95%] md:w-[600px] h-[300px]' : 'w-[95%] md:w-[600px] h-14'}`}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {!isExpanded ? (
          <div className="w-full flex items-center justify-between">
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className="text-white hover:text-gray-300 transition-colors relative"
                >
                  <item.icon className="w-6 h-6" />
                  {item.badge && item.badge > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Menu</h2>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    setIsExpanded(false);
                  }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">{item.label}</span>
                  {item.badge && item.badge > 0 && (
                    <span className="ml-auto bg-pink-500 text-white text-xs rounded-full px-2 py-1">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicIsland;