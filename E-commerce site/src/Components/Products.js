import { useEffect, useState } from "react"
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom"



export default function Products(){
    const[usedata,setdata]=useState([])
    const[loading,setloading]=useState(true)
  //  const[filter,setfilter]=useState(data)
    
    useEffect(()=>{
        const loaddata=async()=>{
         await fetch("http://fakestoreapi.com/products")
            .then(responce => responce.json())
            .then(data=> setdata(data))
            setloading(true)
            console.log(usedata)
        }
        loaddata()
    },[])
    
    //const filterproducts=(cat)=>{
     //const updatedlist= data.filter((x)=>(x.catagory === cat))
     //setfilter(updatedlist)
    //}
    return(
        <div className="container-fluid">
            <h1 className="display-6 fw-bold m-2 text-center">Latest Products</h1>
            <hr/>
            <div className="d-flex justify-content-center m-2">
                <button className="btn btn-outline-dark m-1">All</button>
                <button className="btn btn-outline-dark m-1">Mens Clothing</button>
                <button className="btn btn-outline-dark m-1">Womens Clothing</button>
                <button className="btn btn-outline-dark m-1" >jewelery</button>
                <button className="btn btn-outline-dark m-1">Electronics</button>
            </div>
            <div className="container-fluid d-flex flex-wrap justify-content-center ">
                {
                    usedata.map(prod =>
                        <div className="card text-center h-100" style={{width:250,height:300,margin:10}}>
                        <img className="card-img-top align-items-center " style={{height:200,width:200}} src={prod.image} alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">{prod.title}</h5>
                          <p className="card-text">${prod.price}</p>
                          <Link to={`/Products/${prod.id}`} className="btn btn-outline-dark">Buy Now</Link>
                          
                        </div>
                      </div>
                        )
                }

            </div>
            
        </div>
        
    ) 
}