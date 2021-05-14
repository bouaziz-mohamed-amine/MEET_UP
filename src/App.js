import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
;




function App() {
  return (
    <div >
      <Layout>
      <Switch>
        <Route exact path='/' > <AllMeetups/> </Route>
        <Route exact path='/new-meetup' ><NewMeetup/>  </Route>
        <Route exact path='/favorites' ><Favorites/> </Route>
      </Switch> 
      </Layout>
      
    </div>
  );
}

export default App;
