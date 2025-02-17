import React from 'react';
import './logo.css';

function Logo() {
  console.log('Logo component rendered');

  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      {/* Corrected class names */}
      <a href="/" className="logo d-flex align-items-center">
      <span className="d-lg-block">MyDashboard</span>

      </a>
      {/* Removed the extra quote and corrected className */}
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSideBar}
      ></i>
    </div>
  );
}

export default Logo;
