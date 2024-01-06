import Search from "antd/es/input/Search";

export default function JoinSection(){

    return(
        <div >
        <div className="join-section">
            <div className="join-top">
                <h3>No Spam Promise</h3>
                <h1>Are you a landlord?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, est.</p>
            </div>
            <div className="join-email">
                <Search placeholder="Enter your email address" enterButton="Search"
                size="large"
                style={{width:300}}
                />
            </div>
            <p style={{color:"gray"}}>Join <span style={{color:"white",fontWeight:"bold"}}>10,000+</span>other landlords in our estatery community</p>
        </div>
        </div>
    )
}