import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Service from "./component/service";
import Gallery from "./component/gallery";
import barber from './component/service/img/barber.png';
import smoking from './component/service/img/smok.png';
import vip from './component/service/img/vip.png';
import wifi from './component/service/img/wifi.png';
import breakfast from './component/service/img/breakfast.png';
import music from './component/service/img/music.png';
import Blog from "./component/blog";

const App = () =>{
  const list = ['Home', 'Services', 'Testimonial','Gallery', 'Contact Us'];
  const service = [
    {id: 1,name: 'Barbershop', image: barber},
    {id: 2,name: 'Smooking Room', image: smoking},
    {id: 3,name: 'VIP Room', image: vip},
    {id: 4,name: 'Free Wifi', image:wifi },
    {id: 5,name: 'Breakfast', image: breakfast},
    {id: 6,name: 'Live Music', image:music},
  ];
  return (  
    <>
    <Navbar navlink={list}/>
    <Hero/>
    <Service service={service}/>
    <Blog/>
    <Gallery/>
    </>
  )
}

export default App;