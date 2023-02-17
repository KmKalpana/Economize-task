import React from 'react'
import {RiShoppingCartFill} from 'react-icons/ri'
const Bottom = () => {
  return (
    <div className="pl-8 pt-4">
      <div className="flex space-x-6">
        <span className='no-underline px-8 hover:underline-offset-1 hover:cursor-pointer'>Automations</span>
        <span className='px-8 hover:underline-offset-1 hover:cursor-pointer'>Compaigns</span>
        <span className='px-8 hover:underline-offset-1 hover:cursor-pointer'>Segments</span>
        <div className="items-center pl-4">
          <div className="w-28 pl-3 py-1 border rounded-full bg-blue-200">
            <span className="font-bold items-center ">Last Month</span>
          </div>
        </div>
      </div>
      <div>
       <div className='grid grid-cols-2 pt-4'>
          <div className='pl-10 shadow-x-1'>
            <div className="items-center">
              <div className='flex space-x-2'>
                  <span className="px-2 py-2 border rounded-full pt-2">
                  <RiShoppingCartFill size={25} style={{color:"gray"}}/>
                  </span>
               <div className='flex justify-between'>
                  <span className="font-bold items-center text-blue-500 pt-2">Abandoned Cart-7 Days</span>
                  <div className='pl-40'>
                    <span className='pl-40 font-bold'>$5,221</span>
               </div>
               </div>
              </div>
              </div>
                <div className="items-center">
              <div className='flex space-x-2'>
                  <span className="px-2 py-2 border rounded-full pt-2">
                  <RiShoppingCartFill size={20} style={{color:"gray"}}/>
                  </span>
               <div className='flex justify-between'>
                  <span className="font-bold items-center text-blue-500 pt-2">Abandoned Cart 15 min</span>
                  <div className='pl-40'>
                    <span className='pl-40 font-bold'>$5,228</span>
               </div>
               </div>
              </div>
              </div>
                <div className="items-center">
              <div className='flex space-x-2'>
                  <span className="px-2 py-2 border rounded-full pt-2">
                  <RiShoppingCartFill size={25} style={{color:"gray"}}/>
                  </span>
               <div className='flex justify-between'>
                  <span className="font-bold items-center text-blue-500 pt-2">Abandoned Cart 3 Days</span>
                  <div className='pl-40'>
                    <span className='pl-40 font-bold'>$5,226</span>
               </div>
               </div>
              </div>
              </div>
               <div className="items-center">
              <div className='flex space-x-2'>
                  <span className="px-2 py-2 border rounded-full pt-2">
                  <RiShoppingCartFill size={25} style={{color:"gray"}}/>
                  </span>
               <div className='flex justify-between'>
                  <span className="font-bold items-center text-blue-500 pt-2">Abandoned Cart 2 Days</span>
                  <div className='pl-40'>
                    <span className='pl-40 font-bold'>$5,226</span>
               </div>
               </div>
              </div>
              </div>
            </div>
        <div className='pl-8'>Gauge Chart Portion</div>
       </div>
       </div>
      </div>
  )
}

export default Bottom;
