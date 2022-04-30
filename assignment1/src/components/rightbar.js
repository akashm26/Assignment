import { useState } from "react"
import '../CSS Files/rightbar.css'

export default function Rightbar(){
    const[detail]=useState(["UX Design","Marketing","Expansion","Technology",])
    const[details]=useState(["UX Design","Technology","Python","Expansion","Technology","Legal","New Hire"])
    return(
       <div>
           <div id="firstlist">
           <li id="firstName" class="list-group-item">Recent Searches</li>
          {
            detail.map(info =>
                
                <li id="secondName" class="list-group-item">{info}</li>
                )
          }
          <li id="secondName" class="list-group-item"><a href="./above">Show more</a></li>
          </div>
         <div id="secondlist">
          <li id="secondheading" class="list-group-item d-flex justify-content-between align-items-center">Topics to follow</li>
             {
                 details.map( info2 =>
                
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                     {info2}
                    <button id="btn" className="btn btn-outline-primary">follow</button>
                    
                    </li>,
                 )      
             }
             <li class="list-group-item d-flex justify-content-between align-items-center">
                        <a href="./above">Show more</a>
             </li>
          </div>
       </div>
    )
}