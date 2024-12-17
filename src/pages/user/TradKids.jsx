import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaFilter, FaSort, FaThLarge, FaList } from 'react-icons/fa';
import Navbar from '../../components/user/navbar/navbar';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from "react-helmet";

const Shop = ({category}) => {
  const [viewMode, setViewMode] = useState('grid');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loadMore, setLoadMore] = useState(6);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    {
      name: "Girls' Lehengas",
      img: " https://i.pinimg.com/originals/26/04/a8/2604a85333a4b7e9591636908297d46f.jpg",
    },
    {
      name: "Girls' Suits",
      img: "  https://5.imimg.com/data5/AX/NI/OE/SELLER-335323/kids-young-girls-anarkalis-and-suits-500x500.jpg",
    },
    {
        name: "Boys' Kurta Pajama Set", 
        img: "https://i.etsystatic.com/18196501/r/il/bbefc0/3246282579/il_fullxfull.3246282579_p2ry.jpg",

      },
      
  ];
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ecommercebackend-8gx8.onrender.com/get-product');
        const data = await response.json();
        console.log(data.products)
        if (data.success) {
          const validProducts = data.products.filter(product => 
            product.name && 
            product.price && 
            product.img && 
            product.category &&
            product._id &&
            (product.visibility === ("on") || product.visibility === "true")
          );
          console.log(validProducts)
          setProducts(validProducts);
          setFilteredProducts(validProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
    setLoadMore(6);
  };

  const sortProducts = (sortBy) => {
    let sorted = [...filteredProducts];
    switch (sortBy) {
      case 'price':
        sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.split('₹')[2]?.trim() || 0);
          const priceB = parseFloat(b.price.split('₹')[2]?.trim() || 0);
          return priceA - priceB;
        });
        break;
      case 'popularity':
      case 'rating':
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }
    setFilteredProducts(sorted);
  };

  const handleLoadMore = () => {
    setLoadMore(prevLoadMore => prevLoadMore + 6);
  };

  const handleShowLess = () => {
    setLoadMore(prevLoadMore=>prevLoadMore-6);
  };

  const addPostToRecentlyViewed = (productId) => {
    var existingEntries = JSON.parse(localStorage.getItem("recently") || '[]');
    if (!existingEntries.includes(productId)) {
      if (existingEntries.length >= 4) {
        existingEntries.shift();
      }
      existingEntries.push(productId);
      localStorage.setItem("recently", JSON.stringify(existingEntries));
    } else {
      console.log(productId + ' already exists');
    }
  }

  return (  
    <>
      <Helmet>
        <title>
            Kids Traditional | SaiFashionZone by Raiba</title>
      </Helmet>
      <div className="bg-gradient-to-b from-amber-100 to-amber-200 min-h-screen">
        <Navbar />

        {/* Hero Section with Refined Design */}
        <section 
          className="relative bg-cover bg-center py-20 text-center"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('src/assets/bg shop.png')",
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-extrabold text-red-800 mb-4 tracking-tight"> Little Traditions: Adorable Traditional Wear for Kids
            </h2>
            <p className="text-red-700 text-xl max-w-2xl mx-auto leading-relaxed">
            Experience the richness of tradition with our exquisite collection of ethnic wear, carefully crafted to make you shine on every special occasion.
            </p>
          </div>
        </section>

        {/* Categories Section with Hover Effects */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-3xl font-bold mb-8 text-red-800 text-center">Explore Our Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className={`bg-red-600 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl cursor-pointer 
                  ${selectedCategory === category.name ? 'border-4 border-pink-500' : ''}`}
                onClick={() => filterProducts(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div 
                  className="h-56 bg-cover bg-center transition-transform duration-300 transform hover:scale-110"
                  style={{ backgroundImage: `url('${category.img}')` }}
                />
                <div className="p-5 text-center">
                  <h4 className="text-2xl font-bold text-white mb-2">{category.name}</h4>
                  <p className="text-white">Explore our curated {category.name.toLowerCase()} collection</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Refined Filtering and Sorting Section */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-pink-200 transition"
              >
                <FaFilter className="mr-2" /> Filters
              </button>
              <button 
                className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-pink-200 transition"
                onClick={() => filterProducts('all')}
              >
                All Products
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaSort className="mr-2 text-white" />
                <select 
                  className="border-pink-300 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-red-700 transition"
                  onChange={(e) => sortProducts(e.target.value)}
                >
                  <option value="">Sort By</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-red-700 text-white' : 'bg-pink-100 text-pink-800'} hover:bg-pink-500 hover:text-white transition`}
                >
                  <FaThLarge />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-red-700 text-white' : 'bg-pink-100 text-pink-800'} hover:bg-pink-500 hover:text-white transition`}
                >
                  <FaList />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section with Enhanced Animation */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <AnimatePresence>
            <motion.div
              className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8' : 'grid-cols-1 gap-6'}`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {filteredProducts.slice(0, loadMore).map((product) => (
                <motion.div
                  key={product._id}
                  className={`bg-amber-200 shadow-lg rounded-xl overflow-hidden relative 
                    ${viewMode === 'list' ? 'flex items-center p-4 space-x-6' : ''}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.5 }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.12)"
                  }}
                >
                  {/* Image Section */}
                  <div 
                    className={`relative ${viewMode === 'grid' ? 'aspect-video' : 'w-1/4'} bg-gray-100`}
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {}
                    <div className="absolute top-2 right-2">
                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                        Save {Math.round(((400 - product.price.split('₹')[2]?product.price.split('₹')[2]:product.price) / 400) * 100)}%
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div 
                    className={`p-3 ${viewMode === 'grid' ? 'text-center' : 'flex-grow flex flex-col justify-between'}`}
                  >
                    <div>
                      <h4 className={`font-semibold ${viewMode === 'grid' ? 'text-sm' : 'text-lg mb-2'}`}>
                        {product.name}
                      </h4>
                      
                      {viewMode === 'list' && (
                        <p className="text-gray-600 mb-3 text-sm">
                          Discover our premium {product.category.toLowerCase()} collection, carefully curated to bring joy and inspiration.
                        </p>
                      )}
                      
                      <div className={`flex ${viewMode === 'grid' ? 'justify-center' : 'justify-between'} items-center space-x-2`}>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-500 line-through text-xs">
                            ₹{product.price.split('₹')[1]||400}
                          </span>
                          <span className="font-bold text-pink-600">
                            ₹{product.price.split('₹')[2]|| product.price}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-center space-x-2">
                          <div className="text-yellow-500">
                            {'★'.repeat(Math.floor(product.rating))}
                            <span className="text-gray-300">
                              {'★'.repeat(5 - Math.floor(product.rating))}
                            </span>
                          </div>
                          <span className="text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                    </div>

                    <Link 
                      to={`/${product._id}`} 
                      className={`block ${viewMode === 'grid' ? 'mt-2' : 'mt-4'}`}
                    >
                      <button 
                        className="w-full bg-red-600 text-white py-2 rounded-md 
                        hover:bg-yellow-600 transition-colors" onClick={e=>{addPostToRecentlyViewed(product._id)}}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-12">
            {loadMore < filteredProducts.length ? (
              <button 
                className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-yellow-600transition-colors duration-300 shadow-lg hover:shadow-xl"
                onClick={handleLoadMore}
              >
                Load More Products
              </button>
            ) : (
              <button 
                className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                onClick={handleShowLess}
                hidden={filteredProducts.length < 6}
              >
                Show Less
              </button>
            )}
          </div>
        </div>

        {/* Footer with Enhanced Design */}
        <footer className="bg-red-800 py-16 text-black border-t border-pink-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-3xl font-extrabold text-white mb-4">SaiFashionZone by Raiba</h4>
              <p className="text-white mb-4 text-center md:text-left">
              Adorned with Elegance, Inspired by You, and Crafted with Love
              </p>
              <div className="flex space-x-6 text-3xl mt-4">
                <FaFacebook className="text-white hover:text-yellow-400 transition cursor-pointer" />
                <FaInstagram className="text-white hover:text-yellow-400 transition cursor-pointer" />
                <FaTwitter className="text-white hover:text-yellow-400transition cursor-pointer" />
              </div>
            </div>
            <div className="text-center md:text-right">
              <h5 className="text-2xl font-bold text-white mb-4">Contact Us</h5>
              <p className="text-white">
                3181 Street Name, City, India
                <br />
                Email: support@SaiFashionZoneByRaiba.com
                <br />
                Phone: +91 1234567890
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Shop;