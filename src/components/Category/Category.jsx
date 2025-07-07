import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'

import { Link } from 'react-router-dom'

const Category = () => {

    const renderCards = category.map(card=>{
        return(

            // Card

            <div className='flex-1 basis-[300px]' key={card.id}>

            {/* Card Image */}

                <div className=' w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.image} className='absolute bottom-0'/>
                </div>

            {/* Card Content */}

                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Link to={card.path} className='bg-gradient-to-b from-orange-300 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</Link>
                </div>
            </div>
        )
    })


  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Shop" heading="by Category"/>

            {/* Category Card */}

            <div className='flex flex-wrap gap-10 md:mt-15 '>
                {renderCards}
            </div>
        </div>
    </section>
  )
}

export default Category


const category = [
    {
        id:1,
        title:'Fruits & Veggies',
        description:'Fresh, juicy fruits and crisp, garden-picked vegetables delivered straight from farm to table. Full of flavor, nutrients, and perfect for your daily healthy lifestyle.',
        image: FruitsCat,
        path: '/fruits'
    },
    {
        id:2,
        title:'Dairy & Eggs',
        description:'Pure, farm-fresh dairy and protein-rich eggs delivered with care for natural taste and quality. Ideal for breakfast, baking, and everyday nutrition.',
        image: DairyCat,
        path: '/dairy'
    },
    {
        id:3,
        title:'Meat & SeaFood',
        description:'Tender, high-quality meats and fresh-caught seafood sourced daily for rich taste and peak freshness. Perfect for hearty meals, grills, and gourmet recipes.',
        image: SeaFoodCat,
        path: '/seafood'
    }
]
