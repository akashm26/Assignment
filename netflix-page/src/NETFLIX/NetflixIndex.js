import Netflixmain from './NetflixMain' 
import Header from './NetflixHeader'
import './Netflix.css'
export default function Netflixindex(){
    return(
        
      <div className="backgroundimg" style={{width:'100',height:'700px'}}>
       
        <div className='backgroundcolor'> 
        <Header/>
        <Netflixmain/>
        </div>
    </div>
        
    )
}