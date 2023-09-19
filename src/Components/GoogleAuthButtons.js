import React from "react";
import "./GoogleAuthButtons.css";
import GoogleSvg from "./GoogleSvg";

function GoogleAuthButtons({ user, handleLogin, handleLogout }) {
  return (
  <div className="google-button-container">
      

      {!user && (
        <button className="google-button" onClick={handleLogin}>
          <GoogleSvg />
          Login with Google to start
        </button>
      )}
    </div>
      
    
  );
}

export default GoogleAuthButtons;
