import { NavLink } from "react-router-dom";
import './components.css'


const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <p className="navbar-title">NewsNexus</p>
    <nav className="pages">
      <NavLink className="link" to='/'> TopStories   </NavLink>
      <NavLink className="link" to='/search'>Search   </NavLink>
      <NavLink className="link" to='/favorites'>Favorites </NavLink>
    </nav>
    </div>
    </>
  )
}

export default Navbar;