import React from 'react'
import '../styles/global.css';
import '../components/global/globalComponent.css';

import Background from '../components/main/background';
import Backgroundproducts from '../components/products/backgroundproducts';

import WhattsapButton from '../components/global/whattsapButton';
import Footer from '../components/global/footer';

const index = () => {
  return (
    <main>
        <Background />
        <Backgroundproducts />
        <WhattsapButton />
        <Footer />
    </main>
  )
}

export default index
