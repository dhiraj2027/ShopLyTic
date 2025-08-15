import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]  ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, architecto iusto illum quas repudiandae earum pariatur cupiditate doloremque tempore in, odit voluptate accusamus exercitationem asperiores cumque rem veritatis aliquam dignissimos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt maxime voluptate voluptatum totam nulla corrupti, at ipsam, nam exercitationem sint, mollitia dignissimos! Possimus delectus vitae dolorum sed, consectetur deleniti!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab dignissimos voluptatem numquam natus harum rerum, non reprehenderit laudantium maiores, facilis amet perspiciatis consectetur ut deserunt aliquid atque! Esse, culpa?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 text-gray-300'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-black'>Quality Assurance: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur iusto aliquam eius voluptatibus quisquam quasi maiores! Cumque similique ea modi, explicabo nesciunt eos praesentium laborum voluptas, deleniti, placeat aliquid?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-black'>Convenience: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur iusto aliquam eius voluptatibus quisquam quasi maiores! Cumque similique ea modi, explicabo nesciunt eos praesentium laborum voluptas, deleniti, placeat aliquid?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-black'>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur iusto aliquam eius voluptatibus quisquam quasi maiores! Cumque similique ea modi, explicabo nesciunt eos praesentium laborum voluptas, deleniti, placeat aliquid?</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About