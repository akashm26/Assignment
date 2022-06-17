import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export default function(){
    var history=useHistory()
    const[Validation,setvalidation]=useState([])
    const[verify,setverify]=useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8080/getadmin")
        .then(responce =>{
          setvalidation(responce.data)
        })
    },[])
     function handelemail(event){
      setverify({
        Email:event.target.value,
        Password:verify.Password
      })
     }
     function handlepassword(event){
       setverify({
        Email:verify.Email,
        Password:event.target.value
       })
     }
     function handlelogin(){
         for( var use of Validation){
            if(use.Email==verify.Email && use.Password == verify.Password){
             history.push("/Home")
            }else{
                alert("invalid user")
            }
         }  
     }
     
    return(
        <div>
            <dl>
                <dt style={{color:"white"}}>Email ID</dt>
                <dd><input type="text" onChange={handelemail}></input></dd>
                <dt style={{color:"white"}}>Password</dt>
                <dd><input type="password" onChange={handlepassword}></input></dd>
                <button className="btn btn-outline-dark" onClick={handlelogin}>Login</button>
            </dl>
        </div>
    )
}