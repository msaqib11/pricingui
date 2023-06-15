import React from 'react'
import { PricingPlans } from '@/data'
const PricingPlan = () => {
  return (
    <div className='relative'>
     {/* background half color  */}
      <div className='absolute inset-0 flex flex-col'>
        <div className='flex-1'></div>
        <div className='bg-slate-50 flex-1'></div>
      </div>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-3 lg:gap-8 gap-12 py-24 px-4 sm:px-6 lg:px-8'>
        {PricingPlans.map((plan)=>(
            <div key={plan.title} className="border border-slate-200 shadow-lg p-8 bg-white rounded-2xl relative flex flex-col">
                <h3 className='text-lg font-semibold leading-5'>{plan.title}</h3>
                {plan.mostpopular &&(<p className='absolute top-0 -translate-y-1/2 bg-cyan-500 rounded-full px-3 py-0.5 text-sm font-semibold tracking-wide text-white shadow-md'>Most Popular</p>)
                
                }
                <p className='mt-4 text-sm text-slate-700 leading-6'>{plan.description}</p>
                <div className='-mx-6 p-6 mt-4 rounded-lg bg-slate-50 '>
                  <p className='flex text-sm font-semibold text-slate-500 items-center'>
                    <span>{plan.currency}</span>
                    <span className='ml-3 text-4xl text-slate-900'>${plan.price}</span>
                    <span className='ml-0.5'>/{plan.frequency}</span>
                  </p>
                </div>
                <ul className='mt-6 space-y-4 flex-1'>
                {plan.features.map((feature)=>(
                  <li key={feature} className=" text-sm text-slate-700 leading-6 flex">
                    <svg className='w-5 h-5 text-cyan-500 shrink-0'  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"> <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/> </svg>
                    <span className='ml-3'>{feature}</span>
                    </li>
                ))}
                </ul>
                    <a className={`mt-8 block px-6 py-4 text-sm font-semibold leading-4 text-center rounded-lg shadow-md
                    ${ plan.mostpopular ? ' bg-cyan-500 text-white hover:bg-cyan-600' : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100' }
                    `}>
                    {plan.cta}
                </a>
            </div>

        ))}
     </div>
    </div>
  )
}

export default PricingPlan