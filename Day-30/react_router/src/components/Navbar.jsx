import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>
        <Link to="/">
            <h1>Home</h1>
        </Link>
        <Link to="/login">
            <h1>Login</h1>
        </Link>
        </>
    )
}

export default Navbar