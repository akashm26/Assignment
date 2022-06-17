import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom"

export default function Navbar(){
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">AM COLLECTIONS</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
    <div className="button" >
         <Link to="/Login" className="btn btn-outline-dark ms-2" >
         <i className="fa fa-user-plus m-1"></i>Login</Link>
         <Link to="/Register" className="btn btn-outline-dark ms-2" >
         <i className="fa fa-user-plus m-1"></i>Register</Link>
         <a href="" className="btn btn-outline-dark ms-2">
         <i className="fa fa-shopping-cart"></i>Cart</a>
         
         
    </div>
  </div>
</nav>
        </div>
    )
}