import React from 'react';
import { Link } from 'react-router-dom';
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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div 
    variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{scale: 1.3, originX: 0, color: '#f8e112'}}
              transition={{type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div 
          className="next" 
          animate={{x: 0}} 
          initial={{x: '-100vw'}} 
          transition={{type: 'spring', stiffness: 120}}
          >
          <Link to="/toppings">
            <motion.button  
              whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)" }}>
                Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;