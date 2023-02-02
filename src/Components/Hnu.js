import "./Hnu.css";
import ed from '../img/ed.jpg';
import hnu from '../img/hnu.png';
import pres from '../img/pres.jpg';

function Hnu() {

    return(
        <>
        <div className="hero-you">
            <img className="rat"alt="Herp" src={ed}/>
            <div className="ab"><p>All About HNU</p></div>
            <div className="text">
                <p>Basically, the logo is made up of a blue shield encompassed by an unbroken cord of gold. A gold scroll is emblazoned across the middle part of the shield with the legend "Benedicite Nomini Eius." The shield is compartmentalized into four cartouches that are so arranged so as to form the outline of a cross. Each cartouche contains an emblem representative of the thrusts and character of Holy Name University. The main colors of the logo are green, gold and blue.</p>
                <img className="hn"alt="HerpImg" src={hnu}/>
            </div>
            <div className="u">
                <p> The SHIELD represents the entire university, its blue color - a new addition to the traditional green and gold of Holy Name College, signifying the new status brought about by its recent promotion, its birth at the beginning of the new millennium, as well as an allusion to the protection of the Blessed Virgin Mother invoked every year by HNU during the October pilgrimages.</p>
                <br></br><p>The UNBROKEN GOLD CORD signifies the unity of the three main groups composing the HNU community: the Administration, the Employees and the Student Body. These three components are further signified by the three knots at the topmost part of the emblem. The gold cord is arranged in such a way as to suggest a crown, for indeed, if these components live in harmonious unity, it would be the crowning achievement of each and everyone.</p>
            </div>
            <div className="mar">
                <h2>About the founder</h2>
                <img className="mu"alt="HerpImg" src={pres}/>
            </div>
            <div className="r">
                <p>Father Alphonse G. Lesage, SVD is given the credit as the Founder and First Director of Holy Name College (formerly Divine Word College and now Holy Name University) in 1947. He took the cudgels of running a school which figuratively was suffering the pains of growing and the problems of infancy.</p>
                <br></br><p>Fr. Lesage was a tireless and fearless worker. His burning missionary zeal and pioneering spirit saw him through the arduous task of establishing a Catholic college in Tagbilaran.

                  He was known for his discipline and austere disposition. He is best remembered for his striking sense of fairness and justice, his sincere spirit of frugality-avoiding excesses and sticking only to what is basic and essential.</p>
                <br></br><p>He was born on February 17, 1905 and died on December 30, 1977.</p> 
            </div>
        </div>
 
        </>
    )
}

export default Hnu; 