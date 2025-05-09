import React from 'react'
import { Route, Routes } from 'react-router-dom'





import Navigation from '../customer/components/Navigation/Navigation'
import HomePage from '../customer/Pages/HomePage/HomePage'

import Cart from '../customer/components/ProductDetails/Cart/Cart'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Footer from '../customer/components/Footer/Footer'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'


const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        <Routes>
        <Route path='/login' element={<HomePage/>}></Route>
        <Route path='/register' element={<HomePage/>}></Route>

            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          
            <Route path='/:labelOne/:labelTwo/:labelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

          
      
      
      
    
      
      { /* <Order/> */}
      {/* <OrderDetails/> */}
        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters