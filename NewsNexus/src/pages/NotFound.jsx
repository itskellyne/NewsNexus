import { Link } from "react-router-dom"
import './pages.css'

const NotFound = () => {
    return(
        <div className="sad">
        <img className= "bot" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROpCcjxp8hU2xCYxKwoKW1eyDkJS20-moxA&s" alt="page not found" />
        <h2>Return to NewsNexus below!</h2>
        <br />
        <Link className ="homelink" to="/">NewsNexus</Link>
        </div>
    )
}
export default NotFound