import * as React from 'react'
import '../assets/css/App.css'
const Signup=()=>{
    const [formdata, setFormdata]=React.useState({
        username:"",
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
                    <h1>Signup</h1>
                    <label>FIRSTNAME</label>
                    <input type="text" name="FIRSTNAME" id="firstname" onChange={handleOnChange} />
                    <label>LASTNAME</label>
                    <input type="text" name="LASTNAME" id="lastname" onChange={handleOnChange} />
                    <label>EMAIL</label>
                    <input type="text" name="EMAIL" id="email" onChange={handleOnChange} />
                    <label>PASSWORD</label>
                    <input type="text" name="PASSWORD" id="password" onChange={handleOnChange} />
                    <label>CONFIRM PASSWORD</label>
                    <input type="text" name="CONFIRM PASSWORD" id="confirmpassword" onChange={handleOnChange} />
                    <button type="submit">SIGNUP</button>
                </div>
            </div>
        </form>
    )
}  
export default Signup;  