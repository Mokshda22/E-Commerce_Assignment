import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/user/productdetails";
import About from "./pages/user/about";
import Contact from "./pages/user/contact";
import Login from "./pages/user/login";
import Signup from "./pages/user/signup";
import HomePage from "./pages/user/homepage";
import ShoppingCartPage from "./pages/user/cart";
// import Shop from "./pages/user/shop";
// import BrandsandCategories from "./pages/user/BrandsandCategories";
import Checkout from "./pages/user/checkout";
import Product from "./pages/admin/product";
import Complaints from "./pages/admin/complaints"; 
import Orders from "./pages/admin/order";
import Customers from "./pages/admin/customer";
import CalendarPage from "./pages/admin/calendar";
import NotFoundPage from "./pages/user/notfound";
import { AuthProvider } from "./context/AuthContext";
import Admin from "./pages/user/admin";
import TradWomen from "./pages/user/TradWomen";
import WestWomen from "./pages/user/WestWomen";
import WinterWomen from "./pages/user/WinterWomen";
import TradMen from "./pages/user/TradMen";
import WestMen from "./pages/user/WestMen";
import WinterMen from "./pages/user/WinterMen";
import TradKids from "./pages/user/TradKids";
import WestKids from "./pages/user/WestKids";
import WinterKids from "./pages/user/WinterKids";

import BrandsandCategories from "./pages/user/BrandsandCategories";
function App() {
  return (
    // Wrap the entire app in AuthProvider
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/BrandsandCategories" element={<BrandsandCategories />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/TradWomen" element={<TradWomen />} />
          <Route path="/WestWomen" element={<WestWomen />} />
          <Route path="/WinterWomen" element={<WinterWomen />} />
          <Route path="/TradMen" element={<TradMen />} />
          <Route path="/WestMen" element={< WestMen />} />
          <Route path="/WinterMen" element={<WinterMen />} />
          <Route path="/TradKids" element={<TradKids />} />
          <Route path="/WestKids" element={<WestKids />} />
          <Route path="/WinterKids" element={<WinterKids />} />
          
          <Route path="/admin" element={<Admin />} />
          <Route path="/:productId" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/complaints" element={<Complaints />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/calendar" element={<CalendarPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
