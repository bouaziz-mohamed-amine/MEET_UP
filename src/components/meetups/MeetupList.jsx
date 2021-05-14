import './meetitem.css'
import MeetupItem from './MeetupItem';

const MeetupList = (props) => {
    return ( 
        <ul className="list">
            {props.items.map(item => <MeetupItem key={item.key} id={item.id} image={item.image} title={item.title} description={item.description} adress={item.adress}  /> )}
        </ul>
     );
}
 
export default MeetupList;