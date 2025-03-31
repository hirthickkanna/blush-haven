import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      name: "Summer Collection",
      description: "Discover our latest summer styles",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Evening Wear",
      description: "Elegant dresses for special occasions",
      image: "https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "Casual Comfort",
      description: "Everyday styles for modern women",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="relative h-[600px] rounded-3xl overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop&q=60"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="text-white p-12">
            <h1 className="text-6xl font-bold mb-4">Blush Haven Store</h1>
            <p className="text-2xl mb-8">Your one-stop shop for the latest trends</p>
            <p className="text-xl mb-8">Discover the latest trends in fashion</p>
            <button
              onClick={() => navigate('/collections')}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => navigate('/collections')}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-200 mb-4">{product.description}</p>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors w-fit">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 rounded-3xl p-12 mb-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-8">Subscribe to our newsletter for the latest updates and exclusive offers</p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
      {/* Footer Section */}
      <div className='bg-gray-900 rounded-2xl font-bold text-white p-4 text-center'>
    <p className='text-sm'>© 2025 Blush Haven Store. All rights reserved.</p>
    </div>
    </div>
    
  );
};

export default HomePage;