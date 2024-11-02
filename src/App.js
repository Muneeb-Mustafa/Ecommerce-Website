import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import PrivateRoute from './components/PrivateRoute';
import SellerHeader from './components/Header/SellerHeader';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Homepage from './pages/Frontend/Homepage';
import About from './pages/Frontend/About'
import Contact from './pages/Frontend/Contact';
import Cart from './pages/Frontend/Cart';
import Order from './pages/Frontend/Order';
import SellerDashboard from './pages/Dashboard/SellerDashboard';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProducts from './pages/Dashboard/ManageProducts';
import Earnings from './pages/Dashboard/Earnings';
import BuyerDashboard from './pages/BuyerDashboard/BuyerDashboard'
import Orders from './pages/Dashboard/Orders';
import AccessDenied from './pages/Dashboard/AccessDenied'
import PageNotFound from './pages/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.scss';


const AppContent = () => {
  const location = useLocation();
  const { currentUser } = useAuth();

  // Check if the current path is either "/login" or "/register"
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register';

  // Redirect to homepage if user is logged in and tries to access login or register page
  if (currentUser && (location.pathname === '/login' || location.pathname === '/register')) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {!hideHeaderFooter && (
        location.pathname.startsWith('/seller-dashboard') || 
        location.pathname.startsWith('/add-product') || 
        location.pathname.startsWith('/manage-products') || 
        location.pathname.startsWith('/earnings') || 
        location.pathname.startsWith('/my-orders') ? (
          <>
            <Navbar />
            <SellerHeader />
          </>
        ) : (
          <>
            <Navbar />
            <Header />
          </>
        )
      )}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<BuyerDashboard />} />
        <Route path="/singleProduct/:productId" element={<SingleProduct/>} /> 
        <Route path="/seller-dashboard" element={<PrivateRoute element={<SellerDashboard />} />} />
        <Route path="/add-product" element={<PrivateRoute element={<AddProduct />} />} />
        <Route path="/manage-products" element={<PrivateRoute element={<ManageProducts />} />} />
        <Route path="/earnings" element={<PrivateRoute element={<Earnings />} />} />
        <Route path="/my-orders" element={<PrivateRoute element={<Orders />} />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
