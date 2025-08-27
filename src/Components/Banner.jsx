import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import b1 from '../assets/images/banner/1.jpg'
import b2 from '../assets/images/banner/2.jpg'
import b3 from '../assets/images/banner/3.jpg'
import b4 from '../assets/images/banner/4.jpg'
import b5 from '../assets/images/banner/5.jpg'

const Banner = () => {
  return (
       <div className="w-full h-[600px] container mx-auto my-9">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="h-full"
            >

                {/* slider-1 */}
                <SwiperSlide>
                    <div className="relative w-full h-[600px]">
                        <img
                        src={b1}
                        alt="Car Service 2"
                        className="w-full h-full object-center"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Expert Mechanics</h2>
                        <p className="mb-6 text-lg">Trusted professionals to fix any issue with your car.</p>
                        <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600">
                            Learn More
                        </button>
                        </div>
                    </div>
                </SwiperSlide>

                   {/* slider-2 */}
                  <SwiperSlide>
                    <div className="relative w-full h-[600px]">
                        <img
                        src={b2}
                        alt="Car Service 2"
                        className="w-full h-full object-center"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Expert Mechanics</h2>
                        <p className="mb-6 text-lg">Trusted professionals to fix any issue with your car.</p>
                        <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600">
                            Learn More
                        </button>
                        </div>
                    </div>
                </SwiperSlide>
                      {/* slider-3 */}
                <SwiperSlide>
                    <div className="relative w-full h-[600px]">
                        <img
                        src={b3}
                        alt="Car Service 2"
                        className="w-full h-full object-center"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Expert Mechanics</h2>
                        <p className="mb-6 text-lg">Trusted professionals to fix any issue with your car.</p>
                        <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600">
                            Learn More
                        </button>
                        </div>
                    </div>
                    </SwiperSlide>
                      {/* slider-4 */}
                <SwiperSlide>
                    <div className="relative w-full h-[600px]">
                        <img
                        src={b4}
                        alt="Car Service 2"
                        className="w-full h-full object-center"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Expert Mechanics</h2>
                        <p className="mb-6 text-lg">Trusted professionals to fix any issue with your car.</p>
                        <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600">
                            Learn More
                        </button>
                        </div>
                    </div>
                </SwiperSlide>
                      {/* slider-5 */}
                <SwiperSlide>
                    <div className="relative w-full h-[600px]">
                        <img
                        src={b5}
                        alt="Car Service 2"
                        className="w-full h-full object-center"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Expert Mechanics</h2>
                        <p className="mb-6 text-lg">Trusted professionals to fix any issue with your car.</p>
                        <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600">
                            Learn More
                        </button>
                        </div>
                    </div>
                    </SwiperSlide>
            </Swiper>
            </div>
  )
}

export default Banner