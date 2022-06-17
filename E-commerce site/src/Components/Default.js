import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"

export default function (){
    return(
        <div>
          
          <div style={{height:500,backgroundColor:"darkslategrey"}}>
          <h5 class="card-title display-3 fw-bold m-0"style={{color:"white"}}>NEW SEASONS ARRIVALS</h5>
             <p class="card-text lead fs-2 " style={{color:"white"}}>CHECK OUT ALL THE TRENDS</p>
             <div className="col-6 d-flex justify-content-center w-100 ">
            <Router>
              <Switch>
                <Route exact path="/Login"  component={Login}></Route>
                <Route exact path="/Register" component={Register}></Route>
              </Switch>
            </Router>
          </div>
          </div>
          
        </div>
    )
}