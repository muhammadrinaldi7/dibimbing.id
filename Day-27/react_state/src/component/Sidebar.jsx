const Sidebar = ({handleShow}) => {
    return (
        <>
        <div>
        <button onClick={handleShow} style={{padding:'0.5rem'}}>X</button>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
        </>
    )
}

export default Sidebar