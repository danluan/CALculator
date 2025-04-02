import React from 'react'
import Link from 'next/link'

import {Button} from '@/components/ui/button'


export default function LaddingPage() {
  return (
    <div>
      <main className="h-screen flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-2xl font-bold">Welcome to CALculator</h1>
        <p>
          We simplify the calories intake calculation for you.
        </p>

        <div className='flex flex-row items-center justify-around'>
          <Link href={'/auth/register'}>Get Started</Link>
          <Link href={'/auth/login'}>Already have account</Link>

        </div>
      </main>
    </div>
  )
}
