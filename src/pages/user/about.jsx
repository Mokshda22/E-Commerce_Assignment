import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,  // Animations only happen once
      offset: 50   // Trigger animations slightly earlier
    });
  }, []);

  const SectionCard = ({ title, children, className = "", dataAos = "" }) => (
    <div
      data-aos={dataAos}
      className={`bg-red-500 rounded-3xl p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl shadow-lg ${className}`}
      style={{
        background: "amber-100",
      }}
    >
      <h2 className="text-2xl font-bold text-yellow-300 mb-4 border-b-2 border-pink-200 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>About Us | SaiFashionZone by Raiba</title>
        <meta name="description" content="Learn about Mera Bestie's journey, vision, and mission." />
      </Helmet>
      <Navbar />    
      <div className="min-h-screen bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4">
              <span className="bg-red-800 text-transparent bg-clip-text">
                About Our Company
              </span>
              <span className="text-red-700 block text-3xl mt-2">Empowering Connections, Inspiring Growth</span>
            </h1>
          </div>

          {/* About Sections */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* About Our Company Section */}
            <SectionCard 
              title="About Our Company" 
              dataAos="fade-right"
            >
              <p className="text-white mb-4 leading-relaxed">
              At Sai Fashion Zone by Raiba, we envision a future where fashion is a form of self-expression and empowerment. Our designs will inspire confidence and individuality, transcending cultural and geographical boundaries. 
              </p>
              <p className="text-white leading-relaxed">
                Our journey is driven by passion, innovation, and a commitment to understanding and meeting the unique needs of our clients.
              </p>
            </SectionCard>

            {/* Why Choose Us Section */}
            <SectionCard 
              title="Why Choose Us?" 
              dataAos="fade-left"
            >
              <p className="text-white mb-4 leading-relaxed">
              Experience unparalleled elegance with Sai Fashion Zone by Raiba, where quality, craftsmanship, and personalized service come together to create unforgettable fashion moments
              </p>
              <p className="text-white leading-relaxed">
                Our team brings together diverse expertise, creative thinking, and a genuine passion for delivering excellence.
              </p>
            </SectionCard>

            {/* Objective Section */}
            <SectionCard 
              title="Objectives" 
              dataAos="fade-right"
              className="lg:col-span-2"
            >
              <ul className="text-white leading-relaxed list-disc list-inside space-y-2">
                <li>Provide Exquisite Designs
                </li>
                <li>Ensure Impeccable Quality
                </li>
                <li>Offer Personalized Service
                </li>
                <li> Foster Sustainability and Social Responsibility
                </li>
                <li>Build a Loyal Community</li>
              </ul>
            </SectionCard>

            {/* Vision Section */}
            <SectionCard 
              title="Vision" 
              dataAos="fade-right"
            >
              <p className="text-white leading-relaxed">
                To be the leading platform that connects people, inspires innovation, and creates transformative experiences that empower individuals and businesses.
              </p>
            </SectionCard>

            {/* Mission Section */}
            <SectionCard 
              title="Mission" 
              dataAos="fade-left"
            >
              <p className="text-white leading-relaxed">
                Our mission is to leverage technology and human-centric design to solve complex challenges, create meaningful connections, and drive positive change in the world.
              </p>
            </SectionCard>
          </div>

          {/* Image Section */}
          <div className="mt-16 text-center">
            <img
              src=".\SaiFashionZone_logo.jpeg"
              alt="SaiFashionZone by Raiba Team"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl h-auto transform transition duration-500 hover:scale-[1.01]"
            />
          </div>

          {/* Footer Text */}
          <div className="text-center mt-16 bg-red-700 rounded-2xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-white text-transparent bg-clip-text">
                Join Our Journey
              </span>
              <span className="text-white block text-2xl mt-2">Together, We Create Extraordinary Experiences</span>
            </h2>
            <p className="text-yellow-400 max-w-2xl mx-auto">
              At Mera Bestie, every interaction is an opportunity to inspire, connect, and grow. We invite you to be part of our story.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;