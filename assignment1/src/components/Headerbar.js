import {  useState } from 'react'
import "../CSS Files/header.css"

export default function Headerbar(){
  const[head]=useState(["Feed","Dashboard","Lookup","List","Team"])
    return(
      
      <div id='headerbar'>
        <div id='zin'>Zintlr</div>
        <div>
        {
             head.map(list =>
             <button id='btnone' class="btn btn-primary" type="submit">{list}</button>
                     )
        }
        </div>
        <div>
        <div id='search'>
        <input id='srch' class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button id='ss' class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <div id='bindcoins'>
        <div id='co'>Coins</div>
        <div id='coinss'>
       
        <div id='coinbrd'>
        <div id='coins'></div>
        </div>
        </div>
        </div>
        <div id='brata'>Bansilal Brata</div>
        <div id='up'className='btn btn-primary'>Upgrade</div>

</div>
        </div>
          
      </div>
      

    )
}