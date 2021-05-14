import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList"
import FavoritesContext from "../store/favorites";

const Favorites = (props) => {
    
    const favoritesctx =useContext(FavoritesContext);
    let content ;
    if(favoritesctx.favorites.length===0){
        content = <p>you got no favorites yet . Start adding some ?</p>
    }else{
       content= <MeetupList items={favoritesctx.favorites} />
    }
    return ( 
        
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
     );
}
 
export default Favorites;