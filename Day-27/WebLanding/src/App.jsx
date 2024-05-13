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
  const testi = [
    {
      "nama": "Rinaldi",
      "penilaian": "Sangat Nyaman",
      "deskripsi": "Tempatnya bagus adem seru, kalo malam ada live music nya."
    },
    {
      "nama": "Fitriani",
      "penilaian": "Luar Biasa",
      "deskripsi": "Pelayanan sangat memuaskan, makanannya enak, dan suasana tempatnya sangat nyaman."
    },
    {
      "nama": "Budi",
      "penilaian": "Sangat Puas",
      "deskripsi": "Tempat yang bagus untuk bersantai, makanannya lezat, dan harga terjangkau."
    },
    {
      "nama": "Siti",
      "penilaian": "Memuaskan",
      "deskripsi": "Suasana tempatnya sangat menyenangkan, cocok untuk berkumpul bersama keluarga."
    },
    {
      "nama": "Ahmad",
      "penilaian": "Baik",
      "deskripsi": "Makanan enak, tapi tempatnya agak ramai saat akhir pekan."
    },
    {
      "nama": "Dewi",
      "penilaian": "Puas",
      "deskripsi": "Tempatnya bersih, pelayanan ramah, makanan juga enak."
    },
    {
      "nama": "Rizki",
      "penilaian": "Biasa Saja",
      "deskripsi": "Harga makanan terlalu mahal untuk ukuran porsi yang diberikan."
    },
    {
      "nama": "Putri",
      "penilaian": "Kurang Memuaskan",
      "deskripsi": "Pelayanan lambat, makanan tidak sesuai dengan harapan."
    },
    {
      "nama": "Andre",
      "penilaian": "Sangat Baik",
      "deskripsi": "Rekomendasi untuk tempat makan bersama teman-teman."
    },
    {
      "nama": "Dina",
      "penilaian": "Bagus",
      "deskripsi": "Suasana tempatnya nyaman, cocok untuk nongkrong santai."
    }
  ];
  
  return (  
    <>
    <Navbar navlink={list}/>
    <Hero/>
    <Service service={service}/>
    <Blog testi={testi}/>
    <Gallery/>
    </>
  )
}

export default App;