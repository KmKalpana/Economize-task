import React from 'react';
import { GrFormSchedule } from 'react-icons/gr'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import LineGraph from './LineChart';
const Dashboard = () => {
  return (
    <div className="pt-1">
      <div className="p-8 grid grid-cols-3 gap-8">
        {/** Column-1 */}
        <div className="flex">
          <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
            <img
              src="http://source.unsplash.com/100x100/?woman"
              className="rounded-full"
              alt="unsplash"
            />
            <div className="absolute right-0 top-0 w-3 h-3 rounded-full bg-blue-400"></div>
          </div>
          <div>
          <div className="pl-4">
            <div className='font-bold text-3xl'>Good Morning Oguz</div>
            <h2 className='text-gray-700 '>Here are you stats for Today, 24 Aug 2020</h2>
            </div>
          </div>
        </div>     {/** Column-1 Completed*/}
        <div className='p-3'></div>
        {/** Column-2*/}
        <div className='flex justify-end pl-12 gap-4 pt-6 space-x-1'>
          <div className="items-center">
            <div className="w-28 pl-3 py-1 border rounded-full flex">
              <span>
                <GrFormSchedule size={25} style={{ color: '#22d3ee' }} />
              </span>
              <span className="font-bold items-center">Today</span>
            </div>
          </div>
          <span className='text-gray-400 items-center pt-2'>Compared</span>
          <div>
            <div className="w-40 pl-3 py-1 border rounded-full flex">
              <span className="font-bold items-center flex">
                Previous Period{' '}
                <MdOutlineKeyboardArrowDown
                  size={25}
                  style={{ color: '#22d3ee' }}
                />
              </span>
            </div>
          </div>
        </div>  {/** Column-2 Completed*/}
      </div>
       {/** Boxes */}
        <div className="pl-9 grid grid-cols-4 divide-x gap-6">
             <div>   {/**SubBox-1 */}
             <div className='flex py-1'>
             <span className='text-gray-500 pr-4'>Total Revenue</span>
             <span className='rounded-full border pl-2 pr-3 bg-green-200 text-green-700 font-semibold'>+53.2%</span>
             </div>
             <span className='font-bold text-3xl flex text-center  py-1'>$32,621.72</span>
             <span className='text-gray-500  py-1'>433 Orders</span>
             </div> {/**SubBox-1 Completed*/}
              <div className='pl-6'>   {/**SubBox-2 */}
             <div className='flex py-1'>
             <span className='text-gray-500 pr-4'>Subscribers</span>
             <span className='rounded-full border pl-2 pr-3 bg-green-200 text-green-700 font-semibold'>+32.5%</span>
             </div>
             <span className='font-bold text-3xl flex text-center  py-1'>$484,205</span>
             <span className='text-gray-500  py-1'>$56 Average Order</span>
             </div> {/**SubBox-2 Completed*/}
              <div className='pl-6'>   {/**SubBox-3 */}
             <div className='flex py-1'>
             <span className='text-gray-500 pr-4'>Conversations</span>
             <span className='rounded-full border pl-2 pr-3 bg-red-200 text-red-700 font-semibold'>-3.4%</span>
             </div>
             <span className='font-bold text-3xl flex text-center  py-1'>$552,33</span>
             <span className='text-gray-500  py-1'>5 min Average Response time</span>
             </div> {/**SubBox-3 Completed*/}
              <div className='pl-6'>   {/**SubBox-4 */}
             <div className='flex py-1'>
             <span className='text-gray-500 pr-2'>Popup Conversation Rate</span>
             <span className='rounded-full border pl-2 pr-3 bg-green-200 text-green-700 font-semibold'>+32.5%</span>
             </div>
             <span className='font-bold text-3xl flex text-center  py-1'>25%</span>
             <span className='text-gray-500  py-1'>5% Sale Conversation Rate</span>
             </div> {/**SubBox-4 Completed*/}
          </div>
        {/** Boxes End */}
       <div>  {/**Graph as Line Chart */}
       <LineGraph />
       </div>
       <div>  {/**Bottom part */}
       
       </div>
    </div>
  )
}

export default Dashboard