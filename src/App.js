
import './App.css';

import Home from './components/home/Home';
import CheckOut from './components/Checkout/Checkout';
import {useStateValue } from './components/StateProvider/StateProvider';
import {Routes, Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './components/Firebase/Firebase';
import {loadStripe} from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders'
import Checkout from './components/Checkout/Checkout';
const promise=loadStripe(
  "pk_test_51MMYGvEG0azaGJE8nnn9fSyjwWex4BHypLFSf32hWzr4nJn5R8mJI1zMAuFVyzNMxbtlaybcYQCDrKfExZBqMIbE00GKHO87y3"
)
function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser,
        });
      }else{
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    })

  },[])
  return (
  
    <div className="App">
    <Routes>
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <CheckOut />
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
      </Routes>
    </div>
 
 
  );
}

export default App;



