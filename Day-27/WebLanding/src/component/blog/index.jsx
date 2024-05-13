import React,{ useState } from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fas from "@fortawesome/free-solid-svg-icons";

const Cardblog = ({data}) =>{
    console.log(data)
    const [ShowCard, setShowCard] = useState(false);
    const handleShow = () => {
        setShowCard(!ShowCard);
    }

    return (
        <>  
        {data?.map((item,index) => (
            <div key={index} onClick={handleShow} className="blog-card">
            <div className="avatar">
                <img src="https://random.imagecdn.app/100/100" alt="avatar"/>
            </div>
            <div className="rate">
            <h1>{item.nama}</h1>
            <p >{item.penilaian}</p>
            {/* <button><FontAwesomeIcon icon={fas.faEye} /> Lihat</button> */}
            </div>
            
            <div className={`card-content ${ShowCard ? 'fade-in': ''}`}>
            {ShowCard && (
                <p>{item.deskripsi}</p>
            )}
            </div>            
        </div>
        ))}
        
        </>
    )
}
const Blog = ({testi}) =>{
    return(
        <>
        <section id="Testimonial" className="blog">     
            <Cardblog data={testi}/>
        </section>
        </>
    )
}

export default Blog;