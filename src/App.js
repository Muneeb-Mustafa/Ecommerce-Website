import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AccessDenied from './pages/AccessDenied';
import PrivateRoute from './components/PrivateRoute';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import './App.scss';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/CartContext';
import Order from './pages/Order';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProducts from './pages/Dashboard/ManageProducts';
import Earnings from './pages/Dashboard/Earnings';
import Orders from './pages/Dashboard/Orders';
import SellerHeader from './components/Header/SellerHeader';
import SingleProduct from './components/SingleProduct/SingleProduct';


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
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
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
