import React from "react";
import './style.css';

const Service = ({service}) =>{
 console.log(service)
    return (
        <>
        <section id="Services" className="services">
            <div className="container">
              <h1>Layanan Kami</h1>
              <p>Kami Memiliki Beberapa Layanan dan Hiburan.</p>
              <div className="card-box">
              {service?.map((item,index) =>(
                <div key={index} className="card">
                <div className="card-body">
                <img src={item.image} alt={item.name} />
                </div>
                <div className="card-footer">
                    <p>{item.name}</p>
                </div>
              </div>
              ))}
              </div>
            </div>
        </section>
        </>
    )
}

export default Service;