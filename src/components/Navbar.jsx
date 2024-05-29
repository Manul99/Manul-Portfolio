import "./navbar.scss"
import Sidebar from "./sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <span>Manul Perera</span>
            <div className="social">
                <a href="https://www.facebook.com/manul.perera.16/"><img src="/facebook.png" alt=""/></a>
                <a href="https://www.instagram.com/manuu_99_/?hl=en"><img src="/instagram.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/manul-perera-84a311250/"><img src="/link2.webp" alt="" className="link"/></a>
               
            </div>
        </div>
    </div>
  )
}

export default Navbar
