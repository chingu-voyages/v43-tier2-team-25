import React from 'react';
import Offer from './Offer';
import { motion } from 'framer-motion';

import { container, itemFade } from '@/animation';

const FlightOffer = ({ flights }) => {
    return (
        <motion.div variants={container} initial='hidden' whileInView='show' className='flex flex-col lg:gap-10 md:gap-7 gap-4'>

            {flights.map((flight, i) =>
            (<motion.div key={i} variants={itemFade} >
                <Offer flight={flight} cta='Add to cart' />
            </motion.div>))}
        </motion.div>
    )
}

export default FlightOffer