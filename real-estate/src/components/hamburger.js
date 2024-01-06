import React, { useState } from 'react';
import { Drawer } from 'antd';
import icon from "../images/bars-solid.svg"
import { Link } from "react-router-dom"

export default function Hamburger(){
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
     <div className='hamburger'>
      <img src={icon} alt="bar-icon" onClick={showDrawer} />
      <Drawer width="80%" title="Menu" placement="right" onClose={onClose} open={open}>
        <ul className="ham-ul">
      <li className="nav-navigations ham-style">Rent</li>
    <li className="nav-navigations ham-style">Buy</li>
    <li className="nav-navigations ham-style">Sell</li>
    <li className="nav-navigations ham-style">Manage Property</li>
    <li className="nav-navigations ham-style">Resources</li>

        </ul>
        <div className="ham-btns" >
<div style={{justifyContent:"space-around"}}>
<button className="log-in">
        <Link
        style={{color:"black"}}
        className="link" to="/login">Login</Link>
    </button>
    <button className="sign-up">
    <Link
    style={{color:"white"}}
    className="link" to="/signup">Signup</Link>
    </button>
</div>
</div>
      </Drawer>

     </div>
     
    </>
  );
};

