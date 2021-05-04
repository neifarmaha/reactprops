import React from "react";
import PropTypes from "prop-types";

const Profile = ({bio,name,profession,children,handleClick}) => {
  const styleObject ={color:"#3792cb", textAlign:"center"}
  return (
    <div>
      <p style={styleObject} className="pt-5">
        
        My name is {name} I'm {bio} and my future profession is {profession}
      </p>
      <button onClick={() =>handleClick (name)}>click me!</button>
      <div>
          {children}
          </div>
    </div>
  );
};
Profile.propTypes={
  name:PropTypes.string,
  profession:PropTypes.string,
  bio:PropTypes.string,
  handleClick:PropTypes.func 
}
Profile.defaultProps = {
  name:"Madiha",
  profession:"Student",
  bio:"......"
}
export default Profile; 
