import React from 'react';

const Logo = () => {
  return (
    <div className="column is-3" style={{backgroundColor:"#414358",paddingBottom:"0"}}>
      <img style={{width:"75px",float:"left",fontWeight:"bold"}} src={require('../../../images/pushbot-peeker.png')} />
      <h2 className="title" style={{float:"left",color:"#FFF",fontWeight:"bold",marginTop:"10px",marginLeft:"20px"}}>PushBot</h2>
    </div>
  )
};

export default Logo;
