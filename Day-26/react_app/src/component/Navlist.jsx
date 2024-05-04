import React from "react";

const Navlist = (props) => {
    console.log(props)
    return (
        <>
        <div className="navbar-list">
            {props?.data.map((item, index)=>(
                <a className="nav-link" onClick={() => props.handleRedirect(item)} key={index} href="#">{item}</a>
            ))}
            {/* <a className="nav-link" href="#">{props?.data[1]}</a>
            <a className="nav-link" href="#">{props?.data[2]}</a> */}
        </div>
        </>
    )
}

export default Navlist