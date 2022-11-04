import React from 'react'
import airbnb from "../assets/airbnb.png";
import { logo, ps, drill, spanner, cycle, surf } from "../assets/index"
import { useNavigate  } from 'react-router-dom';
import {Link} from 'react-router-dom';


function Cards(props) {
  function handleClick(e){
    e.preventDefault();


  }
  return (
    
    //Use useNavigate instead of link so that the component can be called along with its property
    <Link className='border-none rounded-none px-0  py-0'  to={"/Home/product/"+props.id}><div className='  gap-x-44  rounded-2xl hover:scale-y-110 hover:scale-x-105 ease-in-out border-2 border-gray-500 flex  flex-col my-3  max-w-full min-w-0 h-80 mt-3 col-span-1 bg-zinc-50'>
    
    <div className="pt-2"><img src={props.data.img} className="border-2 p-2 mx-auto my-2 h-32 border-stone-900" alt="product"/></div>
    <h2 className=' ml-2 font-bold'>₹ {props.data.Price}</h2>
    <h2 className='ml-2 text-slate-500'> {props.data.pd_name} </h2>
    <h2 className='ml-2 text-slate-500'> <span className='font-bold text-black'>Available Until : </span>{props.data.end_date} </h2>
    <button onClick={handleClick} className=' hover:animate-wiggle   mx-auto mt-7 hover:font-bold hover:border-black'>Rent Now</button>
    <span className='relative flex justify-end mr-2 pb-1 mb-0 mt-[0.75rem] text-xs'>{props.data.start_date}</span>


    </div></Link>
    
    
  )
}

export default Cards