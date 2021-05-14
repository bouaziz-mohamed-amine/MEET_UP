import { useContext } from "react";
import { Link } from "react-router-dom"
import FavoritesContext from "../../store/favorites";
import  './MainNavigation.css'
const MainNavigation = () => {
    const favorites= useContext(FavoritesContext)
    
    return ( 
    <header className="header" >
        <div className="logo">React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to="/" className="link">All Meetups</Link>
                </li>
                <li>
                    <Link to="/new-meetup" className="link">Add New Meetup</Link>
                </li>
                <li>
                    <Link to="/favorites" className="link">
                        My Favorites
                        <span className='badge'>{favorites.favorites.length}</span>
                        </Link>
                </li>
            </ul>
        </nav>
    </header>
     );
}
 
export default MainNavigation;