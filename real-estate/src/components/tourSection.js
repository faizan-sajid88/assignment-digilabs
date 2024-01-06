import { useState } from "react"
import videoLogo from "../images/Video.svg"
// import homeimg from "../images/house-5.jpg"
import homeLogo from "../images/home-sticker.svg"
export default function TourSection(){
const [forTenants, setForTenants] = useState(1)
const [forLandloards, setForLandloards] = useState(false)
const [active, setActive] = useState(1)
    return(
        <div className="tour-section">
         <div className="tour-containt">
            <div className="tour-left">
                <div className="tour-left-top">
                    <img src={videoLogo} alt="video-logo" />
                    <div>
                        <h2>Virtual home tour</h2>
                        <h4>We provide you with virtual tour</h4>
                    </div>
                </div>
                <div className="tour-left-mid">
                    {/* <img src={homeimg} alt="home background" /> */}
                </div>
                <div className="tour-left-bottem">
                
                    <img src={homeLogo} alt="home-logo" />
                    <div>
                        <h2>Find the best deal</h2>
                        <h4>We provide you with virtual tour</h4>
                    </div>

                    
                </div>
            </div>
            <div className="tour-right">
<div className="tour-top-btn">
    <button 
    className={` ${active=== 1?"active":"inactive"}`}
    onClick={()=>{
        setForTenants(true)
        setForLandloards(false)
        setActive(1)
    }}>For tenants</button>
    <button 
     className={` ${active=== 2?"active":"inactive"}`}
    onClick={()=>{
        setForTenants(false)
        setForLandloards(true)
        setActive(2)
    }}
    >For landloards</button>
</div>
<div className="tour-right-mid" >
    {forTenants === true && forLandloards === false? 
<div>


        <h1>Tenants ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure.</h1>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptates odit libero vitae soluta? Accusantium quia expedita quo et dicta?</h3>
</div>
        
        :
<div>


<h1>Landloard ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure.</h1>
<h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptates odit libero vitae soluta? Accusantium quia expedita quo et dicta?</h3>
</div>

    }
    <button className="tour-seeMore-btn">See more</button>
</div>

            </div>
         </div>
        </div>
    )
}