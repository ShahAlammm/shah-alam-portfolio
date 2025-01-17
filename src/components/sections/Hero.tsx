"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import image from '../../../public/mainIconsdark.svg';

import { MovingBorder } from '../elements/MovingBorder';





const Hero = () => {
 

    // @ts-ignore
   

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
        >
            {/* ========Text====== */}

            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[10px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className="Welcome-text text-[16px]">Full-Stack Developer Portfolio</h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            the best{" "}
                        </span>
                        project exprience
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-200 my-5 max-w-[600px] cursive'
                >
                   {/* @ts-ignore */}
                   I Develop visuals, user interfaces and web Applications.
                </motion.p>

                <motion.div
                    variants={slideInFromLeft(1)}
                    className=' z-40'
                >
                    <MovingBorder />
                </motion.div>
            </div>

            {/*============= Icons ==================*/}

            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'
            >
                <Image
                    src={image}
                    alt='work icon'
                    width={650}
                    height={60} />

            </motion.div>

        </motion.div>
    )
}

export default Hero;