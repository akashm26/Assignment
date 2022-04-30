import Centerbar from "./Centerbar";
import Headerbar from "./Headerbar";
import Leftbar from "./leftbar";
import Rightbar from "./rightbar";
export default function Mainpage(){
    return(
        <div>
          <div><Headerbar></Headerbar></div>
        <div style={{display:'flex',justifyContent:'flex-start'}}>
            <div><Leftbar></Leftbar></div>
            <div><Centerbar></Centerbar></div>
            <div><Rightbar></Rightbar></div>
        </div>
        </div>
        
    )
}