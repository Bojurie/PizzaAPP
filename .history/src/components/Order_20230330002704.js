import React, { useState} from 'react';
import { motion } from 'framer-motion';


const containerVariant = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', 
      delay: 0.5
    }
  }
}

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] =useState(true)
  setTimeout(() => {
    setShowTitle(false)
  }, 4000);

  return (
    <motion.div 
      variants={containerVariant}
      initial='hidden'
      animate='visible'
      className="container order">
      { showTitle && (
        <h2>Thank you for your order :)</h2>
      )}
      <motion.p>You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
  )
}

export default Order;