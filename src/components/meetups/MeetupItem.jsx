import Card from '../ui/Card';
import './meetitem.css'
import {useContext, useState} from 'react' ;
import FavoritesContext, { FavoritesContextProvider } from '../../store/favorites';
const MeetupItem = (props) => {


    const favoritescontext =useContext(FavoritesContext);
    const itemfavorite=favoritescontext.itemIsFavorite(props.id) ;
        
    function togglefavorite (){
       if(itemfavorite) favoritescontext.removeFavorite(props.id) ;
       else  {
           favoritescontext.addFavorite({
               id : props.id,
               title : props.title,
               description : props.description,
               image : props.image , 
               address : props.adress,
           });
       }
    }

    return ( 
    <li className="item">
        <Card>
        <div className="image">
            <img src={props.image} alt={props.title}  />
        </div>
        <div className='content'>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className="actions">
            <button onClick={togglefavorite} > {itemfavorite? 'Remove MeetUp':'TO Favorites'} </button>
        </div>
        </Card>
    </li> );
}
 
export default MeetupItem;