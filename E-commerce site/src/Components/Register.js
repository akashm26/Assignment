import axios from "axios"
import { useFormik } from "formik"
import { useHistory } from "react-router-dom";

export default function Register (){
    var history=useHistory()
    const formik =useFormik({
        initialValues:{
            UserId:'',
            Email:'',
            Password:'',
            FirstName:''
        },
        onSubmit:values =>{
            axios.post("http://127.0.0.1:8080/getpost",values);
            alert("Registered sucessfully ");
            history.push("/Login")
        
        }
    })
    return(
        <>
         <dl>
             <form onSubmit={formik.handleSubmit}>
            <dt style={{color:"white"}}>UserName</dt>
             <dd><input type="text" name="UserId" value={formik.values.UserId} onChange={formik.handleChange}></input></dd>
             <dt style={{color:"white"}}>Email</dt>
             <dd><input type="email" name="Email" value={formik.values.Email} onChange={formik.handleChange} ></input></dd>
              <dt style={{color:"white"}}>Password</dt>
             <dd><input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange}></input></dd>
             <dt style={{color:"white"}}>FirstName</dt>
             <dd><input type="text" name="FirstName" value={formik.values.FirstName} onChange={formik.handleChange}></input></dd>
             <button className="btn btn-outline-dark" type="submit">Register</button>
             </form>
         </dl>
        </>
    )
}