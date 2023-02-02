import "./Hero.css";
import ert from '../img/ert.jpg';

function Hero() {

    return(
        <>
        <div className="hero-me">
            <img className="pix"alt="HerpImg" src={ert}/>
            <div className="hero">
                <h1>Benedicite Nomini Eius</h1>
                <p>plss bare with me this time it's so hard to learn react js in a short period of time</p>
            </div>
        </div>
 
        </>
    )
}

export default Hero;