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
                    <div className="grid"><RandomImage/></div>
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


export default Gallery 