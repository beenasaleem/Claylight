import TopAnimator from "./components/Header/TopAnimator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import MainSection from "./components/MainSection/Main";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./context/CartDrawer";

import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <ScrollToTop />
      <div className="overflow-x-hidden flex flex-col min-h-screen">
        <TopAnimator />
        <Header />

        <main className="flex-grow">
       <Routes>
  {/* FIRST PAGE */}
  <Route path="/" element={<MainSection />} />

  {/* Product listing */}
  <Route path="/products/:category" element={<ProductListing />} />

  {/* Product detail */}
  <Route path="/product/:id" element={<ProductDetail />} />

  {/* 🔴 FALLBACK → ALWAYS FIRST PAGE */}
  <Route path="*" element={<MainSection />} />
</Routes>

        </main>

        <Footer />
      </div>
      <CartDrawer />  
      </CartProvider>
    </BrowserRouter>
  );
}
