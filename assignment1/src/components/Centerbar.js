import { useState } from "react"
import "../CSS Files/mobileinfo.css"
import Image from "../images/samsung mobile.jpg"


export default function Centerbar(){
    const[top]=useState(["Finance","Business","Opportunity","Personal","Company"])
    const[Mobileinfo]=useState([
        {title:"Hot Scoop",
        Heading:"Samsung Galaxy F22 launched in india:Price,fetures and other details",
        details:"Samsung Galaxy F22 launched in india.The new smart phone has been priced in the mid-range segment.The new smartphone is powered by a MediaTek chipset and features a high refersh rate AMOLED display",
        link:"Relevent",
        Sharing:"Share",
        read:"Read later",
        imageurl:Image
    },
        {title:"Hot Scoop",
        Heading:"Samsung Galaxy F22 launched in india:Price,fetures and other details",
        details:"Samsung Galaxy F22 launched in india.The new smart phone has been priced in the mid-range segment.The new smartphone is powered by a MediaTek chipset and features a high refersh rate AMOLED display",
        link:"Relevent",
        Sharing:"Share",
        read:"Read later",
        imageurl:Image

         },
        {title:"Hot Scoop",
        Heading:"Samsung Galaxy F22 launched in india:Price,fetures and other details",
        details:"Samsung Galaxy F22 launched in india.The new smart phone has been priced in the mid-range segment.The new smartphone is powered by a MediaTek chipset and features a high refersh rate AMOLED display",
        link:"Relevent",
        Sharing:"Share",
        read:"Read later",
        imageurl:Image

         },
        {title:"Hot Scoop",
        Heading:"Samsung Galaxy F22 launched in india:Price,fetures and other details",
        details:"Samsung Galaxy F22 launched in india.The new smart phone has been priced in the mid-range segment.The new smartphone is powered by a MediaTek chipset and features a high refersh rate AMOLED display",
        link:"Relevent",
        Sharing:"Share",
        read:"Read later",
        imageurl:Image

        },
        {title:"Hot Scoop",
        Heading:"Samsung Galaxy F22 launched in india:Price,fetures and other details",
        details:"Samsung Galaxy F22 launched in india.The new smart phone has been priced in the mid-range segment.The new smartphone is powered by a MediaTek chipset and features a high refersh rate AMOLED display",
        link:"Relevent",
        Sharing:"Share",
        read:"Read later",
        imageurl:Image

        },
        {title:"Hot Scoop",
        Heading:"Samsung Galaxy F22 launched in india:Price,fetures and other details",
        details:"Samsung Galaxy F22 launched in india.The new smart phone has been priced in the mid-range segment.The new smartphone is powered by a MediaTek chipset and features a high refersh rate AMOLED display",
        link:"Relevent",
        Sharing:"Share",
        read:"Read later",
        imageurl:Image

        }
        
    ])
    return(
        
        <div>
            <div id="topstories">Top Storeis for you</div>
            <div id="buttons">
                <button id="firstbtn"  className="btn btn-primary">All</button>
                {
                    top.map(list =>
                        <button id="secbtn" type="button" class="btn btn-outline-primary">{list}</button>
                        )
                }
            </div>
            <div>
                {
                    Mobileinfo.map(({title,Heading,details,link,Sharing,read,imageurl})=>
                        <div id="mobile">
                           <div id="wrapper">
                            <div id="title" >{title}</div>
                           <div id="heading">{Heading}</div> 
                           <div id="detail">{details}</div>
                           <div id="links">
                               <a href="/about">{link}</a>
                               <a href="/about">{Sharing}</a>
                               <a href="/about">{read}</a>
                            </div>
                             </div>    
                            <div id="img">
                                <img src={imageurl}></img>
                            </div>
                        </div>
                                )  
                        }
                        
            </div>
        </div>
                        
                    
                
                
                
          
        
        
        
    )
}