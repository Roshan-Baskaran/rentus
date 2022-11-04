import React from "react";
import data from "../constants/index";
import rating from "../assets/rating.png"
import {useState} from "react";
import { TiDelete } from 'react-icons/ti';
import {IoIosAddCircleOutline} from 'react-icons/io';
import Axios from "axios";



function Lessor() {
  const [form,setForm]=useState(false);
  const[name,setName]=useState("");
  const[price,setPrice]=useState("");
  const[endDate,setEnd]=useState("");
  const[image,setImage]=useState(null);


function handleForm (){
  
setForm(!form);
}
function handleClick(e){

  e.preventDefault();
  let currentDate = new Date()
const offset = currentDate.getTimezoneOffset()
currentDate = new Date(currentDate.getTime() - (offset*60*1000))
const startDate=currentDate.toISOString().split('T')[0]

Axios.post("http://localhost:3000/addProduct",{name:name,price:Number(price),startDate:startDate,endDate:endDate})
.then(()=>{alert("Product Created")}).catch(()=>{alert("Failed to create")})

}

  return (
    <div className="bg-lime-200  h-full  py-7 px-8 mt-10 mx-4 ">
      <div className=" w-full flex justify-between ">
      <h1 className="font-bold text-4xl mt-4 ml-4 "> Your Rented Items !</h1>
       <button className="font-bold w-[20%] flex justify-around items-center  text-3xl mt-4 ml-4" onClick={handleForm}>RENT NEW {form?<TiDelete size={30} />:<IoIosAddCircleOutline/>}</button>    
      </div>
      
      {/* Creating the form to add products */}
      <div className={"mx-auto w-[40%]  px-16 py-10  bg-white mt-16 ease-in-out  "+(!form?"hidden":"block")}>
      <form className="grid grid-cols-2 gap-y-3">
      <label className="font-semibold text-xl  text-slate-600" for="productname"> Name of the product :</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} name="productname" className="px-3 py-1 rounded-md border-2 border-green-600 relative  ml-4" /> 
        <label className="font-semibold text-xl text-slate-600" for="price"> Price :</label>
        <input type="text" onChange={(e)=>{setPrice(e.target.value)}} name="price" className="px-3 py-1 rounded-md border-2 border-green-600 relative  ml-4" /> 
        <label className="font-semibold text-xl text-slate-600" for="enddate"> Available Till :</label>
        <input type="date" onChange={(e)=>{setEnd(e.target.value);console.log(e.target.value);console.log(typeof(e.target.value))}} name="enddate" className="px-3 py-1 rounded-md border-2 border-green-600 relative  ml-4" /> 
        <label className="font-semibold text-xl cursor-pointer text-slate-600" for="productname"> Add Image :
        </label>
      <input type="file" onChange={(e)=>{setImage(e.target.files[0]);console.log(e.target.files[0])}} accept="image/png"  name="file" className="ml-4 " /> 
      <button onClick={handleClick} className="bg-lime-200 mt-11 hover:bg-green-300 h-12 col-span-2 mx-auto w-1/3">SUBMIT</button>
      </form>
      </div>

      {/* Displaying the items rent */}

      <div className="grid grid-row gap-x-0 row-span-full grid-cols-4  h-full">
      <div className="bg-zinc-50 row-start- mx-6 px-3 my-12 h-56  ">

        <img src={data[0].img} className="pt-6 mx-auto"/>
        <h1 className="mx-auto px-2 mt-2">{data[0].pd_name}</h1>
      </div >
    
      <div className="bg-zinc-50 mx-6 px-3 flex my-12 h-56 col-span-3 text-xl">
        <div><h2 className="text-slate-500 mt-8  mb-2 ml-20 border-b-slate-400"><span className="font-extrabold">Alloted Price :</span> {`₹ ${data[0].Price}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">Posted Date :</span> {` ${data[0].start_date}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">End Date :</span> {` ${data[0].end_date}`}</h2>
        <h2 className="text-slate-500 text-xl my-2 ml-20"><span className="font-extralight">Rented To mukesh97@gamil.com</span> </h2>
        </div>
        <div>
          <h1 className="relative font-bold text-slate-500 top-16 left-80">Ratings</h1>
          <img className="h-8 relative left-72 top-20"  src={rating}/>
        </div>
        
      </div>
      <div className="bg-zinc-50 mx-6 px-3 py-6 my-12 h-56  ">

        <img src={data[5].img} className="pt-2 h-40 mx-auto"/>
        <h1 className="mx-auto text-center mt-2 px-2 ">{data[5].pd_name}</h1>
      </div >
    
      <div className="bg-zinc-50 mx-6 px-3 flex my-12 h-56 col-span-3 text-xl">
        <div><h2 className="text-slate-500 mt-8  mb-2 ml-20 border-b-slate-400"><span className="font-extrabold">Alloted Price :</span> {`₹ ${data[5].Price}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">Posted Date :</span> {` ${data[5].start_date}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">End Date :</span> {` ${data[5].end_date}`}</h2>
        <h2 className="text-slate-500 text-xl my-2 ml-20"><span className="font-extralight">Rented To aravind12302@gamil.com</span> </h2>
        </div>
        <div>
        <h1 className="relative font-bold text-7xl text-slate-500 top-12 left-72">19</h1>
        <h3 className="relative font-bold text-slate-500 top-16 left-[16.5rem]">Days To Return</h3>
        </div>
        
      </div>
      </div>


    </div>
  );
}

export default Lessor;
