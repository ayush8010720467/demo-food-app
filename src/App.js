import './App.css';
import Navigation from './Navigation';
import Listing from './Listing';
import  About  from "./About";
import  Orders  from "./Orders";

import {BrowserRouter,Route , Switch} from 'react-router-dom'
function App() {
  return (<>
  <BrowserRouter>
    <div className="App">
      <Navigation></Navigation>
    </div>
    <div style={{height: '150px'}}></div>
    <Switch>
    <Route path='/' component={Listing} exact></Route>
      <Route path='/aboutus' component={About} ></Route>
      <Route path='/myorder' component={Orders} ></Route>
      <Route path='/aboutus' component={About} ></Route>
      {/* <Route path='/contactus' component={ContactUS} ></Route> */}
      {/* <Listing></Listing> */}
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
