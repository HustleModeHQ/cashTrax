import Image from 'next/image'
import React from 'react'
import LoginBox from '../pages/login'
import BottomNavBar from './components/BottomNavBar'
import Router from 'next/router'
import Contact from '../pages/contact'

export default function Home() {
  return (
    <main >
      <div className='center'>
        <LoginBox/>
      </div>
      <div>
        <BottomNavBar/>
      </div>
    </main>
  )
}

