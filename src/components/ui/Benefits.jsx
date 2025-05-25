import React from 'react'

const Benefits = () => {
  return (
    <div className='bg-base-300 flex flex-col items-center py-10 text-center'>
        <h2 className='text-3xl max-md:text-2xl text-center font-bold'>Here's Why its Life Changing</h2>
        <div className='flex max-md:flex-col items-center gap-20 max-md:gap-10 my-10 max-md:max-w-[90vw]'>
            <li className='list-none flex flex-col items-center justify-center'>
                <p className='text-4xl my-4'>🌱</p>
                <h3 className='text-xl max-md:text-lg font-semibold'>Build a Daily Learning Habit</h3>
                <p className='text-md max-md:text-sm'>WhimpsyAI makes personal growth effortless.</p>
                <p className='text-md max-md:text-sm'>You develop a consistent habit of learning.</p>
            </li>
            <li className='list-none flex flex-col items-center justify-center'>
                <p className='text-4xl  my-4'>🎯</p>
                <h3 className='text-xl max-md:text-lg font-semibold'>Learn What You Love</h3>
                <p className='text-md max-md:text-sm'>Every lesson is tailored to your unique interests,</p>
                <p className='text-md max-md:text-sm'>so you’re always learning something exciting, useful.</p>
            </li>
            <li className='list-none flex flex-col items-center justify-center'>
                <p className='text-4xl  my-4'>🧠</p>
                <h3 className='text-xl max-md:text-lg font-semibold'>Build a Daily Learning Habit</h3>
                <p className='text-md max-md:text-sm'>Fresh, diverse topics keep your your creativity flowing</p>
                <p className='text-md max-md:text-sm'>perfect for better thinking and decisions.</p>
            </li>
        </div>
    </div>
  )
}

export default Benefits
