import React from 'react'
import { DiCode } from 'react-icons/di'
import { GrFormSchedule } from 'react-icons/gr'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-8">
        {/** Column-1 */}
        <div className="flex">
          <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
            <img
              src="http://source.unsplash.com/100x100/?woman"
              className="rounded-full"
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
        {/** Boxes */}
        
      </div>
    </div>
  )
}

export default Dashboard
