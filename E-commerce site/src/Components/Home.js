import Products from "./Products"
export default function Home(){
    return(
        <div>
            <div className="card bg-dark text-white border-0">
            <img  src={"Images/R.png"}  alt="Card image"/> 
             <div className="card-img-overlay ">
             <h5 className="card-title display-3 fw-bold m-0"style={{color:"black"}}>NEW SEASONS ARRIVALS</h5>
             <p className="card-text lead fs-2 " style={{color:"black"}}>CHECK OUT ALL THE TRENDS</p>
            </div>
            

        </div>
        <Products/>
        </div>
    )
}