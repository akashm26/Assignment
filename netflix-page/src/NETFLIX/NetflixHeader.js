export default function Header() {
    
return(
    <div className="d-flex justify-content-between p-3 m-2">
        <div style={{color:'red'}}>
            <h1>NETFLIX</h1>
        </div>
        <div>
            <select>
                <option>Language</option>
                <option>English</option>
                <option>हिन्दी</option>
            </select>
            <button className="btn btn-danger"> 
                SIGN IN
            </button>
        </div>
    </div>
)

}