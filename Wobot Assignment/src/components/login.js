import { useState } from "react"
import "../Files.css/login.css"
export default function Mainpage(){
    const[usecompany,setcompany]=useState('')
    
    function Company(event){
        if(event.target.value ==''){
            setcompany("Enter the company Name")
        }else{
            setcompany('')
        }
    }


    
    return(
        <div id="outline">
            <div id="container">
                <form>
                       
            <dl>
                <dd><img id="wobotimg" src="../images/Wobot_ai_Logo.jpg"></img></dd>
                <dd><p id="heading">it's a delight to have you <br/>
                onboard
                </p></dd>
                <dd><p id="subheading">Help us to know you better<br/>
                (This is how we optimize Wobot as per your business needs)
                </p></dd>
                <dt>Company</dt>
                <dd><input type="text" placeholder="e.g Example Inc" style={{width:"400px"}} onMouseOver={Company} ></input></dd>
                <dd className="text-danger">{usecompany}</dd>
                <dt>Industry</dt>
                <dd><select style={{width:"400px"}} >
                    <option>IT</option>
                    <option>Non-IT</option>
                    <option>others</option>
                    </select>
                </dd>
                <dd>Company Size</dd>
                <dt>
                <button type="button" class="btn btn-secondary"style={{margin:"5px"}}>1-20</button>
                <button type="button" class="btn btn-secondary"style={{margin:"5px"}}>21-50</button>
                <button type="button" class="btn btn-primary"style={{margin:"5px"}}>51-200</button>
                <button type="button" class="btn btn-secondary"style={{margin:"5px"}}>201-500</button>
                <button type="button" class="btn btn-secondary"style={{margin:"5px"}}>500+</button>
                </dt>
                <button className="btn btn-primary" style={{width:"300px",margin:"40px"}}>Get Started</button>
                
            </dl>
                </form>
            
            </div>
        </div>
    )
}