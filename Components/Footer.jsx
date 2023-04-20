import Link from 'next/link'

function Footer() {

  return (
 <div className='' >


<div className='bg-[#f78da7]  pb-[32px]  '>
<img src='../img/svg__1_-removebg-preview.png' className='bg-[#eee]   w-full h-[60px]'/>
 <div className='bg-[#f78da7]  flex  flex-wrap justify-center  pt-[75px] '>
 <div>
 </div>

 <div className='w-[300px] p-3'>
 <h1 className='font-bold text-white uppercase text-[20px]  font-[Satisfy]'> Payment</h1>
  <div >
  <ul className=' text-sm mt-3'>
  <li className='mt-3 flex flex-row  hover:text-[#717fe0] duration-500  '>
  Vodafone Cash
  <img
   src='data:image/png;base64,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' 
   className='w-[40px]'/>
  </li>
  <li className='mt-3 flex flex-row  hover:text-[#717fe0] duration-500  '>
  upon receipt  </li>

  </ul>
  </div>
 

 </div>

 <div className='w-[300px] p-3'>
 <h1 className='font-bold text-white uppercase text-[20px]  font-[Satisfy]'> best seller </h1>
 <ul className='  text-sm  mt-3 '>
 <Link href={""}><li className='mt-3 hover:text-[#717fe0] duration-500'>Strawberry</li></Link>
 <Link href={""}><li className='mt-3 hover:text-[#717fe0] duration-500'>orange </li></Link>
 <Link href={""}><li className='mt-3 hover:text-[#717fe0] duration-500'> mango</li></Link>
 
 </ul>
 </div>

 <div className='w-[300px] p-3'>
 <h1 className='font-bold text-white uppercase text-[20px] font-[Satisfy]'> to contact us </h1>
 
 <p className=' text-sm  mt-3 '>
 In the event that you want to confirm the request or have any problems, you can contact me on </p>
  <div>
  
  </div>
 </div>
  <div className='w-[300px] p-3'>
 <h1 className='font-bold text-white uppercase text-[20px] font-[Satisfy]'>courses</h1>
 <ul className='  text-sm  mt-3 '>
 <Link href={"./Courses"}><li className='mt-3 hover:text-[#717fe0] duration-500'> Candle course </li></Link>

 
 </ul>
 </div>
 



 
 
 </div>
 <div className='flex flex-col items-center'>    
 <p className=' text-sm mt-10 text-center  bg-white rounded p-1'> ©2023 All rights reserved | This template is made with love<Link href={"https://www.linkedin.com/in/ahmed-mehana-b39967240/"} className=' bg-[#f78da7] rounded font-bold p px-4 text-white font-[Satisfy] text-[18px] cursor-pointer'>by Ahmed-mehana </Link> </p>
 </div>
 </div>
 </div>
  )
}

export default Footer