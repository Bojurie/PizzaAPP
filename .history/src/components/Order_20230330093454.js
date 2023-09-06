import React, { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';


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
      damping: 8,
      mass: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.4,
      // delay: 0.5
    }
  },
 exit: {
    x: '100vw',
    transition: {
      ease: 'easeInOut'
    }

  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
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
      exit='exit'
      className="container order">
        <AnimatePresence>
          { showTitle && (
           <motion.h2 exit={{y: -1000}}>Thank you for your order :)</motion.h2>
          )}
        </AnimatePresence>
      
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
  )
}

export default Order;