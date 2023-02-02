import react, {useState} from "react";
import "../Routes/SIGN.css"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-container">
            <h3>Register</h3>
        <form className="register-form" onSubmit={handleSubmit}>
            <label for="name">Full Name</label>
            <input value ={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" id="name" name="name"/>
            <label for="email">email</label>
            <input value ={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label for="password">password</label>
            <input value ={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
            <button className="cute" type="submit">Submit</button>
        </form>
        <button className="btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>

    )
}