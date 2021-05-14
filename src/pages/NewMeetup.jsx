import NewMeetForm from "../components/meetups/NewMeetForm"
import {useHistory} from 'react-router-dom';
const NewMeetup = () => {

    const history=useHistory();
    function addmeetup (meetupdata){
        fetch(
            'https://react-meetup-e90a7-default-rtdb.firebaseio.com/meetups.json' ,
            {
                method :'POST',
                body:JSON.stringify(meetupdata),
                headers : {
                    'Content-Type' : 'application/json',
                }
            }
        ).then( () => {
                history.replace('/');      
        })
    }
    return ( 
        <section>
            <h3>Add New Meetup</h3>
            <NewMeetForm  onmeetup={addmeetup}   />
        </section>
     );
}
 
export default NewMeetup;