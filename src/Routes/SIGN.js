import Navbar from "../Components/Navbar";
import {Login} from "../Components/Login";
import {Register} from "../Components/Register";
import react, {useState} from "react";
import "./SIGN.css"
import log from '../img/log.png';

function SIGN() {
    const [currentForm, setCurrentForm] = useState('login')

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return(
        <div className="Sign">
            <img className='logos' alt="logs" src={log}></img>
            {
            currentForm=== "login"? <Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
             }
        </div>
      

    );
}

export default SIGN;