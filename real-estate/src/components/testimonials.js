import { Avatar } from "antd";


export default function Testimonials(){

    return(
        <div className="testimonials">
           <h1>Testimonials</h1>
           <p style={{color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum officia aut vitae velit quasi!</p>
           <br />
           <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui exercitationem commodi quas officiis dolor sint nam, optio quo ad necessitatibus odit assumenda repudiandae dicta delectus vero, labore odio quae temporibus velit cupiditate. Nesciunt tenetur sint, at unde facilis dolorum cumque.</h3>
           <h3>jhon doe,<span style={{color:"gray"}}>renter</span></h3>
           <div className="user-profile">
            <Avatar.Group>
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Avatar style={{ backgroundColor: '#f56a00' }} >F</Avatar>
                <Avatar style={{ backgroundColor: '#f56a00' }} >Y</Avatar>
                <Avatar style={{ backgroundColor: '#f56a00' }} >A</Avatar>
               
            </Avatar.Group>
           </div>
        </div>
    )
}