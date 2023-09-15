import * as React from 'react'
import '../assets/css/App.css'
const Login=()=>{
    const [formdata, setFormdata]=React.useState({
        email:"",
        password:""
    })
    const handleOnChange=(e)=>{
        const [name,value] = [e.target.name,e.target.value];
        setFormdata({
            ...formdata,
            [name]: value
        })
    } 
    const submitForm=(e)=>{
        e.preventDefault();
        console.log(formdata);
    }
    return(
        <form onSubmit={submitForm}>
            <div className='main'>
                <div className='container'>
                    <h1>Login</h1>
                    
                    <label>EMAIL</label>
                    <input type="text" name="email"onChange={handleOnChange} />
                    <label>PASSWORD</label>
                    <input type="text" name="password" onChange={handleOnChange} />
                    <button type="submit">SIGNUP</button>
                </div>
            </div>
        </form>
    )
}  
export default Login;  