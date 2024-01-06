import logo from "../images/logo.jpg"
export default function BottemNavigation(){

    return(
        <div className="bottem-navigation">
          <div className="navigation-left">
            <img src={logo} alt="" />
          </div>
          <div className="navigation-right">
            <ul className="navigation-ul">
                <h3 className="navigation-li-head">SELL A HOME</h3>
                <li className="navigation-li">Request an offer</li>
                <li className="navigation-li">pricing</li>
                <li className="navigation-li">Reviews</li>
                <li className="navigation-li">Stories</li>
            </ul>
            <ul className="navigation-ul">
                <h3 className="navigation-li-head">BUY A HOME</h3>
                <li className="navigation-li">Buy</li>
                <li className="navigation-li">Finance</li>

            </ul>
            <ul className="navigation-ul">
                <h3 className="navigation-li-head">BUY,RENT AND SELL</h3>
                <li className="navigation-li">Buy and sell properties</li>
                <li className="navigation-li">Rent home</li>
                <li className="navigation-li">Builder trade-up</li>
               
            </ul>
           
            <ul className="navigation-ul">
                <h3 className="navigation-li-head">TERMS & PRIVACY</h3>
                <li className="navigation-li">Trust & Safety</li>
                <li className="navigation-li">Terms of Service</li>
                <li className="navigation-li">Privacy Policy</li>
                
            </ul>
            <ul className="navigation-ul">
                <h3 className="navigation-li-head">ABOUT</h3>
                <li className="navigation-li">Company</li>
                <li className="navigation-li">How it works</li>
                <li className="navigation-li">Contact</li>
                <li className="navigation-li">Investors</li>
            </ul>
            <ul className="navigation-ul">
                <h3 className="navigation-li-head">RESOURCES</h3>
                <li className="navigation-li">Blog</li>
                <li className="navigation-li">Guides</li>
                <li className="navigation-li">FAQ</li>
                <li className="navigation-li">Help Center</li>
            </ul>
          </div>
        </div>
    )
}