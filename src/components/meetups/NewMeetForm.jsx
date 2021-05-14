import {useRef} from 'react'
import Card from "../ui/Card";
import './newmmetform.css' ; 

const NewMeetForm = (props) => {

    const titleRef =useRef();
    const image =useRef();
    const description =useRef();
    const adress =useRef();
    
   function handlesubmit (e) {
        e.preventDefault();
        
        const titl=titleRef.current.value;
        const imag=image.current.value;
        const desc=description.current.value;
        const adres=description.current.value;

        
        let object={
        title : titl,
         image:imag,
         description:desc,
         adress:adres
        }
        props.onmeetup(object);
        

    }
    
    
    return ( 
    <Card>
        <form className='form' onSubmit={handlesubmit}>
            <div className='control'>
                <label htmlFor="title" >Meetup Title</label>
                <input type='text'  required id='title' ref={titleRef} />
            </div>
            <div className='control'>
                <label htmlFor="image" >Meetup Image</label>
                <input type='url'   id='image'ref={image} />
            </div>
            <div className='control'>
                <label htmlFor="adress" >Meetup Adress</label>
                <input type='text'   id='adress' ref={adress}/>
            </div>
            <div className='control'>
                <label htmlFor="description" >Meetup Description</label>
                <textarea rows='5'  id='description'  ref={description} ></textarea>
            </div>
            <div className='action'>
                <button >ADD</button>
            </div>
        </form>
    </Card>
     );
}
 
export default NewMeetForm;