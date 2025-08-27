import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';

const ServicesCard = ({card}) => {

    console.log(card);

    const {img,price,title}=card;
  return (

    <div className="card bg-base-100 shadow-md hover:shadow-lg my-10 cursor-pointer">
        <figure>
            <img className='h-[260px]'
            src={img}
            alt={title} />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-3xl font-inter font-bold">{title}</h2>
            <p className='text-[#FF3811] text-[18px] '>Price : ${price}</p>
            <div className="card-actions justify-end">
            <Link className="btn text-[#ff3811]"><MdOutlineNavigateNext /></Link>
            </div>
        </div>
        </div>
  )
}

export default ServicesCard