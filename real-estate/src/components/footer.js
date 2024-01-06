import { Avatar } from "antd";

export default function Footer(){

    return(
        <div>
        <footer>
            <div className="footer">
            <p>©2021 Estatery.All right reserved</p>
            <div className="footer-socials">
            <Avatar.Group>
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Avatar style={{ backgroundColor: '#f56a00' }} >F</Avatar>
              
            </Avatar.Group>
            </div>
            </div>
        </footer>
        </div>
    )
}