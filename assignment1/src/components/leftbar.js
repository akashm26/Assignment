import { useState } from "react"
import "../CSS Files/leftbar.css"

export default function Leftbar (){
    const[listitem]=useState(["Earning" ,"Reward","Expanstion","Open Position","New Hire"])
    const[listitem2]=useState(["Budgeting & Planing ","Communication","Technology","Legal Infrastructure","Marketing"])
    return(
        <div>
        <div>
        <ul>
            <li id="first">Hot Scoops</li>
            {
                listitem.map(list =>
                    <li>{list}</li>
                    )
            }
        </ul>
         </div>
         <hr></hr>
         <div>
            <ul>
                <li>Analytics & Reporting</li>
                {
                    listitem2.map(list2 =>
                        <li>{list2}</li>
                        )
                }
            </ul>
         </div>  
        </div>
    )
}