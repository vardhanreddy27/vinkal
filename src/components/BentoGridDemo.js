import React from 'react';
import Image from 'next/image';

function BentoGridDemo() {
  return (
    <div className="grid1">
 
      <div className="item">
      <div className='rounded-t-2xl bg-gradient-to-r from-blue-400 to-cyan-500 h-1/4 font-bold flex  items-center  text-white'>
      <div className='inline  ml-5'>  <box-icon type='solid' color="white"  name='shopping-bag'  ></box-icon></div>

  <span className="flex items-center ml-5">Get In 3 Hours </span>
</div>
<div className='bg-gradient-to-r from-blue-400 to-cyan-500 h-1/4 flex'>
  <div className='font-bold flex-1 flex  items-center  bg-purple-900 rounded-t-2xl text-white'>
  <div className='inline  ml-5'>   <box-icon type='solid' color="white" name='carousel'  ></box-icon></div>
    <span className="flex items-center ml-5">Trail Products</span>
  </div>
</div>    
<div className='bg-purple-900 h-1/4 flex'>
  <div className='font-bold flex-1 flex items-center  rounded-t-2xl bg-slate-800 text-white'>
  <div className='inline  ml-5'>  <box-icon type='solid' color="white"  name='cart' ></box-icon></div>
    <span className="flex items-center ml-6">Order Products</span>
  </div>
</div> 
<div className='bg-slate-800 h-1/4 flex rounded-b-2xl'>
  <div className='font-bold   items-center  flex rounded-b-2xl rounded-t-2xl bg-gradient-to-r from-teal-400 to-cool-gray-700 flex-1 text-white'>
   <div className='inline  ml-6'> <box-icon  color="white" name='search'></box-icon></div>
    <span className="flex items-center ml-6">Search Products</span>
  </div>
</div>
      </div>
      <div className="item font-bold bg-white flex items-center ">
  <div className='p-5'>
<h2 className='text-black'>Streamlined Process</h2>
<p className='text-slate-700 font-normal '>From the first contact, to signing the contract to project management and implementation - all the processes are polished and streamlined through years of improvements.</p> 
<h2 className='text-black pt-4'>All 5-Star Reviews</h2>
<p className='text-slate-700 font-normal inline'>We receive dozens of positive reviews on Google,Play Store and App Store. Our customers love that we care about their budgets, deadlines, and outcomes!
 </p><p className='inline font-medium text-slate-950'> See all reviews.</p>
 </div>
 <div className="flex pt-6 pr-5 pl-5">
  <Image src="/phonehalf.png" height={100} width={432} alt="Phone" className="object-contain" />
</div>


</div>


  




    </div>
  );
};

export default BentoGridDemo;