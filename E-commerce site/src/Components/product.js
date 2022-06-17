import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Product(){
    const {id}=useParams()
    const[Prod,setproduct]=useState([])
    const[loading,setloading]=useState(true)

    useEffect(()=>{
        const getproducts =async()=>{
         setloading(true)
       const responce= await  fetch(`http://fakestoreapi.com/products/${id}`)
         setproduct(await responce.json())
         console.log(Prod)
         setlading(false)
         
        }
        getproducts() 
    },[])
    const Loading =()=>{
        return(
            <div>
                loading...
            </div>
        )
    }
    const Showproduct=()=>{
        return(
            <>
            <div className="col-md-6 lead">
                <img src={Prod.image} alt={Prod.img} style={{width:400,height:400}}></img>   
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase">{Prod.category}</h4>
                <h1>{Prod.title}</h1>
                <p className="lead">
                   Rating {Prod.rating && Prod.rating.rate}
                   <i class="fa-fa-star"></i>
                </p>
                <p className="display-4 fw-bold">${Prod.price}</p>
                <p className="lead">{Prod.description}</p>
                <button className="btn btn-outline-dark">Add to Cart</button>
                <button className="btn btn-dark m-2">Go to Cart</button>

            </div>
            </>
        )
    }
    
    return(
        <div className="container-fluid">
            <div className="row">
                {loading ? <Loading></Loading>:<Showproduct></Showproduct>}

            </div>

        </div>
    )
}