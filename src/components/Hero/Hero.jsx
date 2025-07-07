import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35'>
           
            {/*Hero Content */} 

            <div className='flex-1'>
               <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality</span> 
               <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>
                   Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br/> In Your City 
                </h1> 
                <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-10'>
                    Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                </p> 
                 <Button content="Shop Now"/>
            </div>

            {/*Hero Image*/}

            <div className='flex-1'>
                <img src={Grocery} alt="Hero Image"/>
            </div>
        </div>
    </section>
  )
}

export default Hero
