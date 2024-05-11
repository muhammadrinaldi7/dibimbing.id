import React,{ useState } from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fas from "@fortawesome/free-solid-svg-icons";

const Cardblog = () =>{
    const [ShowCard, setShowCard] = useState(false);
    const handleShow = () => {
        setShowCard(!ShowCard);
    }

    return (
        <>
        <button onClick={handleShow}><FontAwesomeIcon icon={fas.faEye} /> Lihat</button>
            <div className="blog-card">
            <div className="avatar">
                <img src="https://random.imagecdn.app/100/100" alt="avatar"/>
            </div>
            <div className="rate">
            <h1>Rinaldi</h1>
            <p>Sangatt Nyaman</p>
            {/* <button><FontAwesomeIcon icon={fas.faEye} /> Lihat</button> */}
            </div>
            
            <div className={`card-content ${ShowCard ? 'fade-in': ''}`}>
            {ShowCard && (
                <p>Tempatnya bagus adem seru kalo malam ada live music nya.</p>
            )}
            </div>
            
        </div>
       
        

        </>
    )
}
const Blog = () =>{
    return(
        <>
        <section id="Testimonial" className="blog">
        
            <Cardblog/>
        </section>
        </>
    )
}

export default Blog;