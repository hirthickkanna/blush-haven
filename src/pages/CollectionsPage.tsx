import React from 'react';
import { useCart, Product } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';

const CollectionsPage: React.FC = () => {
  const addItem = useCart((state) => state.addItem);

  const products: Product[] = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: 1200,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Evening Gown",
      price: 2500,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "Casual Maxi Dress",
      price: 1800,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      name: "Cocktail Dress",
      price: 3000,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      name: "Beach Dress",
      price: 1400,
      image: "https://www.oldmarigold.com/cdn/shop/files/2_c5c014db-e98d-4b02-a692-ed669e0f20e5.png?v=1688575673&width=800"
    },
    {
      id: 6,
      name: "Party Dress",
      price: 5000,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 7,
      name: "Ethenic Dress",
      price: 1000,
      image: "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2019/1/Seller/19158975/Images/19158975_0_ladies-stylish-ethnic-wear.jpg"
    },
    {
      id: 8,
      name: "Lehenga dress",
      price: 2500,
      image: "https://www.suratifabric.com/product-img/BRIDESMAID-VOL-15-Bridal-Look--1648467126.jpg"
    },
    {
      id: 9,
      name: "pants",
      price: 700,
      image: "https://s.alicdn.com/@sc04/kf/H438f33e07dc840ea975b3c991a59f80eC.jpg_720x720q50.jpg"
    },
    {
      id: 10,
      name: "shirt&pants combo",
      price: 1850,
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/ethnic-set/f/w/p/l-d144-house-of-mira-original-imagwzqy987yeawd.jpeg?q=90&crop=false"
    },
    {
      id: 11,
      name: "T-shirt",
      price: 699,
      image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29917341/2024/6/7/0dc4c055-c70d-489f-a80d-dcd228ca33cf1717771021317TRENDYRABBITWomenExtendedSleevesPocketsT-shirt1.jpg"
    },
    {
      id: 12,
      name: "Beltes saree",
      price: 1800,
      image: "https://images.bewakoof.com/web/latest-fashion-trends-bewakoof-blog-15-1621402709.jpg"
    },


  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-8">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-green rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-96">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <button
                onClick={() => addItem(product)}
                className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-800"
              >
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-pink-600">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;