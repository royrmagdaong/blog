import React from 'react'

export default function NavBar() {
  return (
    <div className='h-20 bg-cyan-100 text-gray-700 text-xl flex justify-between items-center px-8'>
        <h1 className='uppercase tracking-wider'>blog</h1>
        <div>
            <div className='text-base'>Login</div>
        </div>
    </div>
  )
}
