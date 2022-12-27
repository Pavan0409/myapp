import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Header.module.css";

const Header = () => {
  return (
   <>
     <div className={classes.header}>

     <Link to="/video" >Video{console.log("clicked")}</Link>
     <Link to="/datte" >Date{console.log("clicked")}</Link>
     </div>
     <h1 style={{alignItem:'center'}}>MY WEBSITE</h1>
   </>
  )
}

export default Header
