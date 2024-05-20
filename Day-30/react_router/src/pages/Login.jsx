import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

const Login = () =>{
    
    const [UserName,setUserName] = useState("")
    const [Password,setPassword] = useState("")
    const [token,setToken] = useState(null)
    const [errorLogin,setErrorLogin] = useState(null)
    const navigate = useNavigate()

    const handleChangeUserName = (event) =>{
        console.log(event)
        setUserName(event.target.value);
    }    
    const handleChangePassword = (event) =>{
        setPassword(event.target.value);
    }
    const handleLogin = async() =>{
    const payload = {
        username: UserName,
        password: Password
    }
    
    try{
        const response = await axios.post('https://api.mudoapi.tech/login',payload);
        console.log(response)
        setToken(response.data.data.token)
        setTimeout(() =>{
            navigate("/")
        },2000)
        console.log(response)
    }catch(error){
        setErrorLogin(error.response.data.message)
        console.log(error)
    }
}

    return(
        <>
            <h1>Ini login Page</h1>
            <Navbar/>
            {token && <h2>Token berhasil</h2> }
            {errorLogin && <h2> {errorLogin} </h2> }
            <div>
                <input type="text" onChange={handleChangeUserName} name="" id="" />
                <input type="text" onChange={handleChangePassword} name="" id="" />
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}
export default Login