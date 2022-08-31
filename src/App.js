import React from "react";
import './App.css';
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import SearchPage from "./components/SearchPage"

function App() {
  return (
    <div>
<Router>

<Header/>
<Switch>

<Route path="/search">
<SearchPage/>
</Route>


<Route path="/">
<Home/>
</Route>
 


</Switch>



  
    <Footer/>

</Router>


   
    
    </div>
  )
}

export default App;
