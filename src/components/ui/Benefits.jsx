import React from 'react'

const Benefits = () => {
  return (
    <div className='bg-base-300 flex flex-col items-center py-10'>
        <h2 className='text-3xl font-bold'>Here's Why its Life Changing</h2>
        <div className='flex items-center gap-20 my-10'>
            <li className='list-none flex flex-col items-center justify-center'>
                <p className='text-4xl my-4'>🌱</p>
                <h3 className='text-xl font-semibold'>Build a Daily Learning Habit</h3>
                <p className='text-md'>WhimpsyAI makes personal growth effortless.</p>
                <p className='text-md'>You develop a consistent habit of learning.</p>
            </li>
            <li className='list-none flex flex-col items-center justify-center'>
                <p className='text-4xl  my-4'>🎯</p>
                <h3 className='text-xl font-semibold'>Learn What You Love</h3>
                <p className='text-md'>Every lesson is tailored to your unique interests,</p>
                <p className='text-md'>so you’re always learning something exciting, useful.</p>
            </li>
            <li className='list-none flex flex-col items-center justify-center'>
                <p className='text-4xl  my-4'>🧠</p>
                <h3 className='text-xl font-semibold'>Build a Daily Learning Habit</h3>
                <p className='text-md'>Fresh, diverse topics keep your your creativity flowing</p>
                <p className='text-md'>perfect for better thinking and decisions.</p>
            </li>
        </div>
    </div>
  )
}

export default Benefits
