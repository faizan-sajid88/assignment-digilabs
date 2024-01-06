import { useState } from "react";
import home from "../images/house-1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

export default function Post(){
    const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
    return(
        <div>
           <div className="post-div">
            <img className="post-house-img" src={home} alt="house-img" />
            <div className="post-details">
                <h1 className="price">₹10,000 <span style={{color:"gray",fontSize:"1rem",margin:"5px"}}> /month</span>
                           
                <FontAwesomeIcon onClick={handleToggleFavorite} className={` fev-icon ${isFavorite ? 'active-btn' : ''}`} icon={isFavorite ? faHeart : faHeartRegular} style={{ color: isFavorite ? "#8462fe" : "#a061ff" }} />
               
                </h1>
                <h1>beverly springfield</h1>  
                <p style={{borderBottom:"1px solid gray",marginBottom:"2px"}}>Lorem ipsum dolor sit amet.</p>
                <div className="facility">
                    <div className="post-bottem-box">
                        <img src="" alt="" />
                        <p>beds</p>
                    </div>
                    <div className="post-bottem-box">
                        <img src="" alt="" />
                        <p>Bathrooms</p>
                    </div>
                    <div className="post-bottem-box">
                        <img src="" alt="" />
                        <p>6x7.5m squre</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}