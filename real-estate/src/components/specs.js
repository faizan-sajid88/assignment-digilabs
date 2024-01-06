import analytics from "../images/analytics.svg"
import search from "../images/search.svg"
import done from "../images/done.svg"
 import home from "../images/house-3d-bg.png"
export default function Specs(){

    return(
        <div   className="specs-div" >
        <div className="specs-left">
            <h1 className="specs-heading">The new way to find your new home</h1>
            <h3 className="specs-heading2">Firnd your dream place to liv in with more then 10k+ properties listed</h3>
            <div className="specs-left-bottem">
                <div className="specs-box">
                    <img src={analytics} alt="" />
                    <h1>7.4%</h1>
                    <h3>Property Return rate</h3>
                </div>
                <div className="specs-box">
                    <img src={search} alt="" />
                    <h1>3,856</h1>
                    <h3>Property in Sell & Rent</h3>
                </div>
                <div className="specs-box">
                    <img src={done} alt="" />
                    <h1>2,540</h1>
                    <h3>Daily Completed Transactions</h3>
                </div>
            </div>
        </div>
        <div className="specs-right">
            <img src={home} alt="" />
            
        </div>
        </div>
    )
}