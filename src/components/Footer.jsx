import React from 'react'

import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch} from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 grid-cols-2 py-8 text-center'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1 text-gray-500 cursor-pointer'>Marketing</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Analytics</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Commerce</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Data</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1 text-gray-500 cursor-pointer'>Pricing</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Documentation</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Guides</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1 text-gray-500 cursor-pointer'>About</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Blog</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Jobs</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Press</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1 text-gray-500 cursor-pointer'>Claims</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Privacy</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Terms</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Policies</li>
                    <li className='py-1 text-gray-500 cursor-pointer'>Conditions</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2 text-center'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The lastest news, articles, and resources, sent to your inbox weekly.</p>
                <form action="" className='flex flex-col sm:flex-row'>
                    <input placeholder='Enter email..' type="email" className='w-full p-2 mr-4 rounded-md mb-4'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 justify-between m-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook className='cursor-pointer'/>
                <FaInstagram className='cursor-pointer'/>
                <FaTwitter className='cursor-pointer'/>
                <FaTwitch className='cursor-pointer'/>
                <FaGithub className='cursor-pointer'/>

            </div>
        </div>
    </div>
  )
}

export default Footer