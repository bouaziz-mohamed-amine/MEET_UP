
import MeetupList from "../components/meetups/MeetupList";
import React, { useState, useEffect } from 'react';
 

const AllMeetups = () => {
     const [isloading , setIsLoading] = useState(true);
     const [loadedmeetup,setloadedmeetup] = useState([]);
     useEffect(()=>{
      fetch( 
        'https://react-meetup-e90a7-default-rtdb.firebaseio.com/meetups.json',
        ).then((response )=> { 
          return response.json();
        })
        .then((data) => {
          const meetups = [] ;

          for(const key in data){
            const meetup ={
              id : key,
              ...data[key]
            };
            meetups.push(meetup) ;
          }

          setIsLoading(false);
          setloadedmeetup(meetups);
        })
     },[]);

    if(isloading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }
  
  return ( 
        <section>
            <h1>All Meetups</h1>
            <MeetupList items={loadedmeetup} />
        </section>
     );
}
 
export default AllMeetups;

const todos = [
  {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
] ;