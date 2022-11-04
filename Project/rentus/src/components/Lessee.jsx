
import React from "react";
import data from "../constants/index";
import rating from "../assets/rating.png"

function Lessee() {
  return (
    <div className="bg-rose-200  h-full mt-10 mx-4 grid-cols-4    py-7 px-8">
      <div className=" mx-auto w-full">
      <h1 className="font-extrabold text-4xl mt-4 ml-4"> Your Borrowed Items !</h1>
      </div>
      <div className="grid gap-x-0 grid-cols-4 h-[39rem]">
      <div className="bg-zinc-50 mx-6 px-3 my-12 h-56  ">

        <img src={data[1].img} className="pt-3 h-48 mx-auto"/>
        <h1 className="flex justify-center px-2 mt-0">{data[1].pd_name}</h1>
      </div >
    
      <div className="bg-zinc-50 mx-6 px-3 flex my-12 h-56 col-span-3 text-xl">
        <div><h2 className="text-slate-500 mt-8  mb-2 ml-20 border-b-slate-400"><span className="font-extrabold">Price :</span> {`₹ ${data[1].Price}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold"> Leese Date :</span> {` ${data[1].start_date}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">Return Date :</span> {` ${data[1].end_date}`}</h2>
        <h2 className="text-slate-500 text-xl my-2 ml-20"><span className="font-extralight">Borrowed from mukesh97@gamil.com</span> </h2>
        </div>
        <div>
          <h1 className="relative font-bold text-slate-500 top-[5rem] text-3xl left-60">Returned to Owner</h1>

        </div>
        
      </div>
      <div className="bg-zinc-50 mx-6 px-3 py-6 my-12 h-56  ">

        <img src={data[3].img} className="pt-2 h-40 mx-auto"/>
        <h1 className="mx-auto text-center mt-2 px-2 ">{data[3].pd_name}</h1>
      </div >
    
      <div className="bg-zinc-50 mx-6 px-3 flex my-12 h-56 col-span-3 text-xl">
        <div><h2 className="text-slate-500 mt-8  mb-2 ml-20 border-b-slate-400"><span className="font-extrabold">Price :</span> {`₹ ${data[3].Price}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">Leese Date :</span> {` ${data[3].start_date}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">Return Date :</span> {` ${data[3].end_date}`}</h2>
        <h2 className="text-slate-500 text-xl my-2 ml-20"><span className="font-extralight">Borrowed From aravind12302@gamil.com</span> </h2>
        </div>
        <div>
        <h1 className="relative font-bold text-7xl text-slate-500 font-poppins top-12 left-[18.5rem]">10</h1>
        <h3 className="relative font-bold text-slate-500 top-16 left-[16.5rem]">Days To Return</h3>
        </div>
        
      </div>
      </div>



    </div>
  );
}

export default Lessee;
