import React from 'react'
import PricingPlans from '../components/PricingPlan.js'
const Home = () => {
  return (
    <>
   <div className='mx-auto max-w-7xl bg-white px-4 pt-24 sm:px-6 lg:px-8'>
      <h2 className='lg:text-3xl text-4xl font-extrabold text-black sm:tex-5xl sm:leading-tight sm:tracking-tight'>
      "Affordable Pricing for All"
      </h2>
      <p className='mt-4 max-w-3xl text-lg text-slate-500'>
      "Find the perfect plan for your budget and needs with our flexible pricing options. Get the tools and resources you need to succeed, starting today!"
      </p>
   </div>
   <PricingPlans/>
   </>
  )
}

export default Home