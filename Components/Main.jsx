import Link from "next/link";
import React, { useEffect, useState } from "react";
import {BsFillShieldFill,BsArrowDownUp,BsTruck,BsCreditCard2Back,BsEmojiSunglasses ,BsEmojiKiss } from 'react-icons/bs';
import BestS from "./BestS";
import Benfit from "./Benfit";
import About from "./About";
import Footer from "./Footer";
function Main() {

//,BsEmojiSunglasses ,BsEmojiKiss 

  const images = [
    {
      url: 'https://images.pexels.com/photos/1832562/pexels-photo-1832562.jpeg?auto=compress&cs=tinysrgb&w=1500',
      sub:"ليمون ",
      btn:"   font-bold   text-[25px] text-white font-bold py-2 px-4 rounded animate-left w-fit "
    },
    {
      url: 'https://images.pexels.com/photos/5816955/pexels-photo-5816955.jpeg?auto=compress&cs=tinysrgb&w=1500',
      sub:"فانيليا",
      btn:"   font-bold   text-[25px] text-white font-bold py-2 px-4 rounded animate-right w-fit "
    },
    {
      url: 'https://images.pexels.com/photos/8903616/pexels-photo-8903616.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      sub:"ليمون",
      btn:"   font-bold   text-[25px] text-white font-bold py-2 px-4 rounded animate-left w-fit "
    },
    {
        url: 'https://images.pexels.com/photos/10991425/pexels-photo-10991425.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        sub:"ليمون",
        btn:"   font-bold   text-[25px] text-white font-bold py-2 px-4 rounded animate-top w-fit "
      },
      {
        url: 'https://images.pexels.com/photos/6311808/pexels-photo-6311808.jpeg?auto=compress&cs=tinysrgb&w=1500',
        sub:"ليمون",
        btn:"   font-bold   text-[25px] text-white font-bold py-2 px-4 rounded animate-right w-fit"
      },

  ];
  
  const [currentImage, setCurrentImage] = useState(images[0]);
  console.log(currentImage.url)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => {
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex +1) % images.length;
        return images[nextIndex];
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  //<div className=' absolute top-0 w-full h-screen sm:h-[550px]  bg-black/30 z-[2]' />
  

  return (
    <div className=' relative top-[50px] max-w-[1400px] h-full w-full m-auto     '>

    <img src='../img/svg__1_-removebg-preview.png' className='bg-[#eee]   w-full h-[60px]'/>


      <div
        className='w-full h-screen sm:h-[450px]  bg-center  bg-[#f78da7] text-center flex flex-col sm:flex-row justify-around items-center'>
      <p className=" text-[60px] font-['Kristi'] text-white ">We make your  dreams <br/> come true </p>
      <img src="../img/photo_2023-04-12_13-57-27-removebg-preview.png"/>

      </div>


      <img src='../img/wave (1).png' className='bg-[#eee]   w-full h-[150px]'/>
    </div>
  );
}

export default Main;

//tuesday_nightregular,sans-serif