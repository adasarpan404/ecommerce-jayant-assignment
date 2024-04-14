import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from "./Login/loginContent";
import Home from "./Home/HomeContent";
import OTPContent from "./OTP/OTPContent";
import RegisterContent from "./Register/RegisterContent";
import ProductContent from "./ProductDetail/ProductContent";
import CartContent from "./ShoppingCart/CartContent";
import CheckoutAddressContent from "./CheckoutAddress/CheckoutAddressContent";
import CheckoutPaymentContent from "./CheckoutPayment/CheckoutPaymentContent";
import CheckoutSummaryContent from "./CheckoutSummary/CheckoutSummaryContent";
import CheckoutOrderAcceptedContent from "./CheckoutOrderAccepted/CheckoutOrderAcceptedContent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  }, {
    path: "/verify-otp",
    element: <OTPContent />
  },
  {
    path: "/register",
    element: <RegisterContent />
  },
  {
    path: "/product",
    element: <ProductContent />
  },
  {
    path: "/cart",
    element: <CartContent />
  },
  {
    path: "/checkout-address",
    element: <CheckoutAddressContent />
  },
  {
    path: "/payment",
    element: <CheckoutPaymentContent />
  },
  {
    path: "/summary",
    element: <CheckoutSummaryContent />
  },
  {
    path: "/order",
    element: <CheckoutOrderAcceptedContent />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
