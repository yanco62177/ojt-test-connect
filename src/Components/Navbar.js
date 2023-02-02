import react, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import "./Navbar.css"; 
import { Link } from 'react-router-dom';
import log from '../img/log.png';


class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <img className='logo' alt="logs" src={log}></img>

                <ul className="Menu">
                {MenuItems.map((item,index) =>{
                    return(
                
                        <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        {item.title}
                        </Link>
                    </li>
                    );
                   })}

                </ul>

            </nav>
        )
    }
}
 export default Navbar;