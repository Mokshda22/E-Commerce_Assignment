import { useState } from 'react';
import {Snowflake,Shirt, Search,  Heart, Gift, Sparkles,  } from 'lucide-react';
import Navbar from '../../components/user/navbar/navbar';
import { Helmet } from "react-helmet";

const BnC = [
  { id: 1, title: 'Sarees', Icon: Sparkles },
  { id: 2, title: 'Ladies Suits', Icon: Heart },
  { id: 3, title: 'Dresses', Icon: Gift },
  { id: 4, title: 'Jumpsuits', Icon: Sparkles },
  { id: 5, title: ' Ladies Shawls', Icon: Snowflake },
  { id: 6, title: 'Tracksuits', Icon: Sparkles },
  { id: 7, title: 'Sweaters', Icon: Snowflake },
  { id: 8, title: 'Women`s T-Shirts', Icon: Shirt },
  { id: 9, title: 'Men`s T-Shirts', Icon: Shirt },
  { id: 10, title: 'Kurta-Pyjamas set', Icon: Sparkles },
  { id: 11, title: 'Shirts and Trousers', Icon: Shirt },
  { id: 11, title: 'Jackets', Icon: Snowflake },
  { id: 12, title: 'Kids-Frocks', Icon: Gift },
  { id: 13, title: 'Kids-Tshirts', Icon: Shirt },
  { id: 14, title: 'Kids-Dresses', Icon: Gift },
  { id: 15, title: 'Kids-Woolen', Icon: Snowflake },
];

export default function BrandsandCategories() {
  const [searchTerm, setSearchTerm] = useState('');

  const filterednewarrivals = BnC.filter((BnC) =>
    BnC.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Helmet>
      <title>COLLECTION | SaiFshionZone by Raiba</title>
    </Helmet>
      <Navbar />
      <div className="min-h-screen bg-amber-100 py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-red-800 mb-8 animate-bounceIn">
            Explore Brand New Categories 
          </h1>

          <div className="flex justify-center mb-8 " >
            <SearchInput value={searchTerm} onChange={setSearchTerm} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterednewarrivals.map((BnC) => (
              <BrandCard
                key={BnC.id}
                title={BnC.title}
                Icon={BnC.Icon}
                className="transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-float"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function SearchInput({ value, onChange }) {
  return (
    <div className="relative animate-slideDown">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-600 focus:outline-none"
        placeholder="Search Brands and Categories..."
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}

function BrandCard ({ title, Icon, className }) {
  return (
    <div
      className={`bg-red-700 p-6 rounded-lg shadow-md text-center ${className}`}
    >
      <Icon className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" />
      <h3 className="text-lg font-semibold text-white animate-flipIn">{title}</h3>
    </div>
  );
}
