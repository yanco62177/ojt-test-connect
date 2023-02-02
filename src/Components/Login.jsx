import react, {useState} from "react";
import "../Routes/SIGN.css"
import {Link} from "react-router-dom";
import HOMES from '../Routes/HOMES';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-container">
            <h3>Login</h3>
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value ={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label for="password">password</label> 
            <input value ={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
            <li> <Link to={HOMES}><button className="cute" type="submit">Log In
            </button></Link>
            </li>
        </form>
        <button className="btn" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here</button>
        </div>

    )
}