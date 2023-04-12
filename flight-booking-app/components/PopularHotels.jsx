import React from 'react';
import Hotel from './Hotel';
import { motion } from 'framer-motion';

import { container, itemFade } from '@/animation';

const PopularHotels = ({ hotels }) => {
    return (
        <motion.div variants={container} initial='hidden' whileInView='show' className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 font-rubik'>
            {hotels?.map((hotel, id) => (
                <motion.div variants={itemFade} key={id} className='w-full bg-lightColor'>
                    <Hotel hotel={hotel} cart='No' />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default PopularHotels