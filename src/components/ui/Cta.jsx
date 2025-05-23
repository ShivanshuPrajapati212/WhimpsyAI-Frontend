import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className='bg-base-300 flex flex-col items-center py-14'>
      <h2 className='text-3xl font-semibold'>Make Learning a Habit You’ll Actually Love</h2>
      <Link to='/signup' className='btn btn-primary w-80 mt-10'>Start Learning Now &rarr;</Link>
    </div>
  )
}

export default Cta
