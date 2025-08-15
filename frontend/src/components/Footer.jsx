import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm'>
            <div>
                <img src={assets.logo} className='w-36' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique accusantium ullam nemo laboriosam, minus, cum mollitia quidem vero ea saepe amet. Doloribus provident ipsa laboriosam quibusdam error voluptate magni.
                </p>
            </div>

            <div className='pt-8'>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='pt-8'>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-2638538574</li>
                    <li>contact@shoplytic.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr className='text-gray-300' />
            <p className='py-5 text-sm text-center'> Copyright 2025@ shpolytic.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer