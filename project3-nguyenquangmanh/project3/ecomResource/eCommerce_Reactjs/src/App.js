
import React, { Component, Fragment, useEffect, useState, useRef } from 'react';
import './css/App.css';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import HomePage from './container/Home/HomePage';
import ShopPage from './container/Shop/ShopPage';
import DetailProductPage from './container/DetailProduct/DetailProductPage';
import ShopCartPage from './container/ShopCart/ShopCartPage';
import BlogPage from './container/Blog/BlogPage';
import DetailBlog from './container/Blog/DetailBlog';
import AboutPage from './container/About/AboutPage';

import HomePageAdmin from './container/System/HomePageAdmin';
import { path } from '../src/utils/constant'
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Redirect } from 'react-router';
import VerifyEmail from './container/System/Email/VerifyEmail';
import LoginWebPage from './container/Login/LoginWebPage';
import RegisterWebPage from './container/Register/RegisterWebPage';
import UserHomePage from './container/User/UseHomePage';
import CustomScrollbars from './component/input/CustomScrollbars';
import VoucherHomePage from './container/Voucher/VoucherHomePage';
import OrderHomePage from './container/Order/OrderHomePage';
import TopMenu from './container/Header/TopMenu';
import PaymentSuccess from './container/User/PaymentSuccess';
import MessagePage from './container/Message/MessagePage';
import VnpayPaymentPage from './container/Order/VnpayPaymentPage';
import VnpayPaymentSuccess from './container/Order/VnpayPaymentSuccess';

// import Chatbot from 'react-chatbot-kit';
// import 'react-chatbot-kit/build/main.css';
// import config from './component/Chatbot/config';
// import ActionProvider from './component/Chatbot//ActionProvider';
// import MessageParser from './component/Chatbot//MessageParser';
// import './component/Chatbot/Chatbot.css';
function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const chatbotRef = useRef();

  useEffect(() => {
    if (showChatbot) {
      const handleClickOutside = (event) => {
        if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
          setShowChatbot(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showChatbot]);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Header />
            <HomePage />
            {/* <div className="chatbot-container" ref={chatbotRef}>
              {showChatbot && 
                <div className="chatbot">
                  <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
                </div>
              }
              <img src="https://robohash.org/liberovelitdolores.bmp?size=50x50&set=set1" className={showChatbot ? 'hide-button' : ''} onClick={() => setShowChatbot(!showChatbot)} />
            </div> */}
            <Footer />
          </Route>
          <Route path="/shop">
            <Header />
            <ShopPage />
            {/* <div className="chatbot-container" ref={chatbotRef}>
              {showChatbot && 
                <div className="chatbot">
                  <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
                </div>
              }
              <img src="https://robohash.org/liberovelitdolores.bmp?size=50x50&set=set1" className={showChatbot ? 'hide-button' : ''} onClick={() => setShowChatbot(!showChatbot)} />
            </div> */}
            <Footer />
          </Route>
          <Route path="/detail-product/:id">
            <Header />
            <DetailProductPage />
            {/* <div className="chatbot-container" ref={chatbotRef}>
              {showChatbot && 
                <div className="chatbot">
                  <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
                </div>
              }
              <img src="https://robohash.org/liberovelitdolores.bmp?size=50x50&set=set1" className={showChatbot ? 'hide-button' : ''} onClick={() => setShowChatbot(!showChatbot)} />
            </div> */}
            <Footer />
          </Route>
          <Route path="/admin/" render={() => {
            if (JSON.parse(localStorage.getItem("userData")) && (JSON.parse(localStorage.getItem("userData")).roleId === "R1" || JSON.parse(localStorage.getItem("userData")).roleId === "R4")) {
              return <HomePageAdmin />
            } else return <Redirect to={"/login"} />

          }}>
          </Route>
          <Route path="/user/" render={() => {
            return JSON.parse(localStorage.getItem("userData")) && JSON.parse(localStorage.getItem("userData")) ? <div>
              <Header />
              <UserHomePage />
              <Footer />
            </div> : <Redirect to={"/login"} />
          }}>
          </Route>
          <Route path="/shopcart">
            <Header />
            <ShopCartPage />
            <Footer />
          </Route>
          <Route exact path="/payment/success">
            <Header />
            <PaymentSuccess />
            <Footer />
          </Route>
          <Route exact path="/payment/vnpay">
            <TopMenu user={JSON.parse(localStorage.getItem("userData")) ? JSON.parse(localStorage.getItem("userData")) : ''} />
              <VnpayPaymentPage />
              <Footer />
            </Route>
            <Route exact path="/payment/vnpay_return">
            <TopMenu user={JSON.parse(localStorage.getItem("userData")) ? JSON.parse(localStorage.getItem("userData")) : ''} />
              <VnpayPaymentSuccess />
              <Footer />
            </Route>
          <Route path="/login">
            <Header />
            <LoginWebPage />
            <Footer />
          </Route>
          <Route path="/register">
            <Header />
            <RegisterWebPage />
            <Footer />
          </Route>
          <Route path="/voucher">
            <Header />
            <VoucherHomePage />
            <Footer />
          </Route>
          <Route path="/blog">
            <Header />
            <BlogPage />
            <Footer />
          </Route>
          <Route path="/blog-detail/:id">
            <Header />
            <DetailBlog />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <AboutPage />
            <Footer />
          </Route>
          
          <Route path="/verify-email">
            <Header />
            <VerifyEmail />
            <Footer />
          </Route>
          <Route path="/order/:userId">
            <TopMenu user={JSON.parse(localStorage.getItem("userData")) ? JSON.parse(localStorage.getItem("userData")) : ''} />
            <OrderHomePage />
            <Footer />
          </Route>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Switch>
    </Router>

  );
}

export default App;
