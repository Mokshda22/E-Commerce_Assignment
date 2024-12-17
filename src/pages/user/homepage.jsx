import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import Navbar from "../../components/user/navbar/navbar";
import Footer from "../../components/user/footer/footer";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



// Scroll Progress Bar Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      style={{ scaleX: scrollProgress / 100 }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500 origin-left z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
};

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);

  const slides = [
    {
      url: 'https://kamatharjun.b-cdn.net/wp-content/uploads/2021/08/Indian-Wedding-Photography-30.jpeg',
    },
    {
      url: 'https://api.ellecanada.com/app/uploads/2017/12/b4516eaa-d628-4914-9ed4-22295eaa2e38-winter-street-style.jpg',
    },
    {
      url: 'https://th.bing.com/th/id/R.636e09850962e0de8386a0f4770a9830?rik=CTtcdxqtIPnaew&riu=http%3a%2f%2fwww.cstylejeans.com%2fwp-content%2fuploads%2f2016%2f02%2ffashion-for-kids-245.jpg&ehk=qW9RALzumsAF4jpniInEjEMcc5eYGH73xnYWv14M5XY%3d&risl=&pid=ImgRaw&r=0',
    },

    {
      url: 'https://blog.g3fashion.com/wp-content/uploads/2020/06/fet.jpg',
    },
    {
      url: 'https://blogproxy.andaazfashion.com/wp-content/uploads/2019/02/Indian-Ethnic-Fashion-720x360.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  const productCategories = [
    {
      img: "https://images.bonanzastatic.com/afu/images/7236/e6e9/7d00_6103001480/s-l1600.jpg",
      title: "Traditional",
      description: "Experience the richness of tradition with our exquisite collection of ethnic wear, carefully crafted to make you shine on every special occasion.",
      category: "Traditional"
    },
    {
      img: "https://i.pinimg.com/736x/9c/18/00/9c1800b4d37fbacb994d773067429296--westerns-unique.jpg",
      title: "Western",
      description: "Step into style with our expertly curated collection of western wear, featuring the latest trends and timeless classics to elevate your wardrobe",
      category: "Western"
    },
    {
      img: "https://th.bing.com/th/id/OIP.oDaVdiBd3Z-8bVX9fqGJ5wAAAA?rs=1&pid=ImgDetMain",
      title: " Season Special",
      description: "Wrap yourself in warmth and style with our cozy collection of winter wear, featuring the softest fabrics and latest fashion trends to keep you snug and chic",
      category: " Season Special"
    }
  ];

  return (
    <>
      <Helmet>
        <title>SaiFashionZone by Raiba | Style your Soul</title>
        <meta name="description" content="Discover elegance and fashion at just one place" />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <div className="w-full bg-amber-100 overflow-hidden">
        {/* Hero Section with Modern Glassmorphism Design */}
        {/* <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"> */}
          {/* <div className="absolute inset-0 z-0">
            <motion.img
              src="https://cdn.wallpapersafari.com/89/8/lybQgH.jpg"
              alt="Elegant Gift Background"
              className="w-full h-full object-cover filter brightness-50"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
          */}

         <div className='  max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=' w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >


<motion.div
            className=" relative z-10 container mx-auto max-w-4xl px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className=" bg-transparent   border-none p-12 md:p-16 rounded-3xl shadow-2xl text-center">
              <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-white tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 text-transparent">
               Style your Soul
              </h1>
              <p className="mb-8 text-xl  text-white/90 outline-black max-w-2xl mx-auto">
               Welcome to the World of Elegance and Style
              </p>
              <div className="space-x-4 flex justify-center">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-700 backdrop-blur-sm border border-white/30 text-white  px-10 py-3 rounded-full uppercase text-sm tracking-wider font-semibold shadow-xl transition-all"
                  >
                    Explore Our Story
                  </motion.button>
                </Link>
                <Link to="/BrandsandCategories">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-700 text-white hover:opacity-90 px-10 py-3 rounded-full uppercase text-sm tracking-wider font-semibold shadow-xl transition-all"
                  >
                    View Categories
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
      </div>
      {/* Left Arrow */}
      <div className='  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=' group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className=' flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    
    </div>

         
        {/* </section> */}

        {/* Product Categories Section with Refined Styling */}
        <section className="px-4 py-22 bg-amber-100">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-red-800">
                Our Collection
              </h2>
              <div className="w-24 h-1 bg-red-700 mx-auto mb-10"></div>
              <p className="text-red-600 font-bold max-w-2xl mx-auto text-lg">
              Raiba's Touch of Style: Where Fashion is a Celebration of Life
              </p>
            </motion.div>

            <motion.div
              className="grid gap-10 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { 
                    delayChildren: 0.3, 
                    staggerChildren: 0.2 
                  }
                }
              }}
            >
              {productCategories.map((category, index) => (
                <Link to='/TradWomen' key={index}>
                  <motion.div
                    className="bg-red-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-4"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <div className="relative bg-red-600 h-80 overflow-hidden">
                      <img
                        src={category.img}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 text-center bg-red-700">
                      <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-white">
                        {category.title}
                      </h3>
                      <p className="text-yellow-300">{category.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision Section with Modern Overlay Design */}
        <section className="relative min-h-[80vh] flex items-center" data-aos="fade-up">
          <div className="absolute bg-amber-100 inset-0 z-0">
            {/* <img
              src="https://tse3.mm.bing.net/th?id=OIP.RNJBshhRJcxPoSt2Slj5bAHaEK&pid=Api&P=0&h=180"
              alt="Vision Background"
              className="w-full h-full object-cover filter brightness-50"
              loading="lazy"
            /> */}
          </div>

          <div className="container relative z-10 mx-auto max-w-6xl px-4">
            <motion.div
              className="bg-red-700 backdrop-blur-md border border-yellow-400 p-43 md:p-10 rounded-3xl max-w-4xl mx-auto text-center shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-white">
                Our Vision
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
              At Sai Fashion Zone by Raiba, our vision is to be the epitome of elegance and style, revolutionizing the way people experience fashion. We aim to create a world where fashion is not just a statement, but a reflection of one's personality, values, and culture. With a deep understanding of the evolving fashion landscape, we strive to craft garments that are not only aesthetically pleasing but also comfortable, sustainable, and accessible. Our goal is to empower individuals to express themselves confidently and authentically through our designs, and to make Sai Fashion Zone by Raiba a household name synonymous with style, sophistication, and excellence.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-400 text-white hover:opacity-90 px-12 py-4 rounded-full uppercase text-sm tracking-wider font-semibold shadow-xl transition-all"
                >
                  Our Journey
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;