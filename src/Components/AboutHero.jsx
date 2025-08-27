import React from 'react'
import personimg from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'


const AboutHero = () => {
  return (
    <div className='container mx-auto py-14'>
        <div>
          <div className="hro bg-base-200 grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-[521px] h-[557px] ">
              <img
                src={personimg}
                className=" rounded-lg shadow-2xl w-[460px] h-[473px] absolute left-0 top-0"/>

                <img className='w-[327px] h-[332px] absolute right-0 bottom-0 border-8 border-white rounded-sm' src={parts} alt={parts} />
            </div>

            <div className='flex flex-col justify-center pr-6'>
                <p className="py-6 text-[#FF3811]">About Us</p>
                <h1 className="text-5xl font-bold text-[#FF3811]">We are qualified & of experience in this field</h1>
                <p className="py-6">
                  There are many variations of passages of Lorem Ipsum available, but the majority
                   have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <p className="py-6">
                 the majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable. 
                </p>
                <button className="btn bg-[#FF3811]">Get More Info</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AboutHero