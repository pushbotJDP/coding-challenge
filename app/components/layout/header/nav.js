import React from 'react';

const Nav = () => {
  return (
    <div className="column is-9" style={{backgroundColor:"#4A4C60"}}>
      <div style={{float:"left",marginTop:"15px",textTransform:"uppercase"}}>
        <a style={{color:"#888996",padding:"15px"}} href="#">
          Tasks
        </a>
        <a style={{color:"#888996",padding:"15px"}} href="#">
          Routines
        </a>
        <a style={{color:"#888996",padding:"15px"}} href="#">
          Templates
        </a>
      </div>
      <div style={{float:"right",marginTop:"15px",textTransform:"uppercase"}}>
        <a style={{color:"#888996",padding:"15px"}} href="#">
          Team
        </a>
        <a className="button" href="#" style={{marginTop:"-5px",marginRight:"10px"}}>
          <i className="fa fa-cog" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
};

export default Nav;
