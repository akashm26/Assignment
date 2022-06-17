import './App.css';
import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/product';
import Default from './Components/Default';
import {BrowserRouter as Router, Switch,Route}  from 'react-router-dom';

 

function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/Products" component={Products}></Route>
      <Route exact path="/Products/:id" component={Product}></Route>
      <Route exact path="/Products/:id" component={Product}></Route>
      <Route path="*" exact component={Default}></Route> 
    </Switch>
    </Router>
    </>
    
  )
}

export default App;
