import React, { useState, useEffect } from "react";
import axios from "axios";
import './assets/style.css'

const App = () => {
  // const mobil = [
  //   {
  //     id: 1,
  //     company: "toyota",
  //     brand: "agya",
  //   },
  //   {
  //     id: 2,
  //     company: "toyota",
  //     brand: "sigra",
  //   },
  //   {
  //     id: 3,
  //     company: "daihatsu",
  //     brand: "ayla",
  //   },
  //   {
  //     id: 2,
  //     company: "daihatsu",
  //     brand: "cayla",
  //   },
  // ];
  // const [cars, setCars] = useState([]);
  // useEffect(() =>{
  //   setCars(mobil);
  // }, [])


  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);
  const [userdetail, setUserdetail] = useState([]);

  const getUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res?.data);
      const response = res?.data;
      setUser(response);
    }).catch((err) => {
      console.log(err)
    })
  }

  const getUserdetail = () => {
    axios.get("https://reqres.in/api/users/2").then((res) => {
      console.log(res?.data.data);
      const response = res?.data.data;
      setUserdetail(response);
    }).catch((err) => {
      console.log(err)
    })
  }

  const getProduct = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res?.data)
      const response = res?.data;
      setProduct(response);
    }).catch((err) => { console.log(err) });
  }

  useEffect(() => {
    // getProduct();
    getUser();
    getUserdetail();
  }, []);

  return <>
    {/* <div className="container"> 
    <h1>Product</h1>
    <div className="box">
    {product.map((item,index) =>(
      <div className="cardBox" key={index}>
        <h1>{item?.title}</h1>
        <img src={item?.image} alt="" />
      </div>
    ))}
    </div>
    </div> */}

    {/* <h1>Mobil</h1>
    {cars.map((car,index) =>(
      <li key={index}>{car.brand}</li>
    ))} */}
    <div className="container">
      <h1>Users</h1>
      <div className="detailBox">
        <img src={userdetail?.avatar} alt="" />
        <h1>{userdetail.first_name}</h1>
      </div>
      <div className="usersBox">
        {user?.map((item, index) => {
          return (
            <div key={index} className="userBox">
              <h3>{item?.name}</h3>
              <p>{item?.email}</p>
            </div>
          )
        })}


      </div>
    </div>
  </>
}

export default App;