import React,{useState, useEffect} from "react"
import axios from "axios"
import Navbar from "../components/Navbar";

const Home = () => {

    const [listMenu, setlistMenu] = useState([]);

    const getlistMenu = () => {
        axios.get('https://api.mudoapi.tech/menus').then(response =>{
            setlistMenu(response.data.data.Data);
            console.log(response.data.data.Data)
        }).catch(err => {console.error(err)}
    )}

    useEffect(() => {
        getlistMenu();
    },[]);
    return (
        <>
        <h1>Ini Home</h1>
        <Navbar/>
        <ul>
        {
            listMenu?.map(menu=>(
                <div key={menu.id}>
                    <li>{menu.name}</li>
                    <li>{menu.priceFormatted}</li>
                    <img src={menu.imgUrl} width="450px" alt="" />
                </div>
            ))
        }
        </ul>
        </>
    )
}

export default Home