import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from './Payment';
import Orders from './Orders';
const promise = loadStripe(
  "pk_test_51NdZ5BDB2UwmMDN5uzNELcM0wK4neHjOrGybqqZOX3FbJZym3EU3OU6nTYj1B3BsBbB7GHBwP5XYwIQSEK0wXRRC00LIGYVV6w"
);



function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch ({
          type: 'SET_USER',
          user: authUser,
        });
      }else{
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/orders" element={<>
          <Header />
            <Orders />
            </>} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
