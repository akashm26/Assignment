
export default function Register(){
    return(
        <div>

            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input input-group" >
            <input type='email' className="form-control" placeholder="Email Adress" ></input>
            <button className="btn btn-danger">
            Get Started <span className="bi bi-chevron-right"></span>
            </button>
            </div>
            
        </div>
    )
}