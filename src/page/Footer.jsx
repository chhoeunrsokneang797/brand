import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-3 px-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6  className='font-bold pt-2 uppercase'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6  className='font-bold pt-2 uppercase'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6  className='font-bold pt-2 uppercase'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6  className='font-bold pt-2 uppercase'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news , articles , and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input type='email' placeholder='Your Email Address' className='w-full p-2 mr-4 rounded-md mb-4'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex max-w-[1240px] m-auto items-center justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2022 Workflow , LLC. All rights reserved</p>
            <div className='flex justify-between items-center sm:w-[300px] pt-4 text-2xl align-center'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer