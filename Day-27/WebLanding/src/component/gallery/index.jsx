import './style.css';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import car1 from './1.jpg';
import car2 from './2.jpg';
import car3 from './3.jpg';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('https://random.imagecdn.app/500/500');
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Random" />}
    </div>
  );
};

const Gallery = () => {
    return(
        <>
        <section id="Gallery" className="gallery">
            <div className="container">
                <h1>GALLERY</h1>
                <div className="grid-gallery">
                    <div className="grid"><RandomImage/><p style={{textAlign: 'center',color:'black'}}>Lorem</p></div>
                    <div className="grid"><RandomImage/></div>
                    <div className="grid"><RandomImage/></div>
                    <div className="grid"><RandomImage/></div>
                    <div className="grid"><RandomImage/></div>
                    <div className="grid"><RandomImage/></div>
                </div>
            </div>
        </section>
        </>
    )
}
// const Carousel = ({ images, interval = 300 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     }, interval);

//     return () => clearInterval(intervalId);
//   }, [images.length, interval]);

//   return (
//     <div className="carousel-container">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={index === currentIndex ? "slide active" : "slide"}
//           style={{ backgroundImage: `url(${image})` }}
//         ></div>
//       ))}
//     </div>
//   );
// };
// const images = [
//   car1,
//   car2,car3,
// ];
// const Gallery = () => {
//   return(
//       <>
//       <section id="Gallery" className="gallery">
//           <div className="container">
//               <h1>GALLERY</h1>
//               <Carousel images={images} />
//           </div>
//       </section>
//       </>
//   )
// }


export default Gallery