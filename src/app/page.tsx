import React from 'react'
import Link from 'next/link'

import Button from '../components/Button'

export default function LaddingPage() {
  return (
    <div>
      <header>
        <Link href='/' >Home</Link>
        <Link href='/register'>Sing Up</Link>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-2xl font-bold">Welcome to CALculator</h1>
        <p>
          We simplify the calories intake calculation for you.
        </p>

        <div className='flex flex-row items-center justify-around'>
          <Button src='/register'>Get Started</Button>
        </div>
      </main>
    </div>
  )
}
