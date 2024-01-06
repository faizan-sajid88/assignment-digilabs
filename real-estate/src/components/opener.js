import { DatePicker } from 'antd';
import Location from './location';
import { useState } from 'react';

export default function Opener() {
const [active , setActive] = useState(1)
    return (
        <div className="opener-div">
            {/* <h1>opener</h1> */}
            <div className="opener-containt">
                <div className="opener-left">
                    <h1 className="opener-heading">Buy, Rent, or Sell<br />your property<br />easily</h1>
                    <h3 className="opener-heading-2">A greate platform to buy, sell, or even rent your properties without any commisions</h3>
                    <div className="opener-analytics">
                        <div><h1 style={{color:"#8E6BBF"}}>50K+<br /> <h3 style={{color:"gray"}}>renters</h3></h1></div>
                        <div><h1 style={{color:"#8E6BBF"}}>10K+<br /> <h3 style={{color:"gray"}}>properties</h3></h1></div>
                    </div>

                <div className="opener-bottem">

                    <div className="type">
                        <ul>
                            <li style={{borderRadius:"5px 0 0 0"}} className={`${active===1?"active-border":""}`}
                            onClick={()=>{
                                setActive(1)
                            }}
                            >Rent</li>
                            <li className={`${active===2?"active-border":""}`}
                            onClick={()=>{
                                setActive(2)
                            }}>Buy</li>
                            <li style={{borderRadius:"0 5px 0 0"}}
                             className={`${active===3?"active-border":""}`}
                             onClick={()=>{
                                 setActive(3)
                             }}
                            >Sell</li>
                        </ul>
                    </div>
                    <div className="search-property">
                        <div className="location-div">
                        <Location className="location" />
                        </div>
                        <div className="date-div">
                        <DatePicker className="date" />
                        </div>
                        <button className="search-btn">Browse Property</button>
                    </div>
                </div>
                </div>
                <div className="opener-right">
<h1>right side</h1>
                </div>
            </div>
        </div>
    )
}