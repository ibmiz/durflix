import React from 'react'; 


const dropdownContent = () => (
  
  <div className="dropdownContainer">
    <div className="navigation__container--userLogo">
      <div className="dropdownContent">
        <div>
          <div className="dropdownContent--user"/>
          <p className="dropdownContent--user-text">Ibrahim</p>
        </div>
        <div>
          <div className="dropdownContent--user dropdownContent--user-2"/>
          <p className="dropdownContent--user-text">Reuben</p>
        </div>
        <div>
          <div className="dropdownContent--user dropdownContent--user-3"/>
          <p className="dropdownContent--user-text">Durhack</p>
        </div>
        <p className="dropdownContent-text">Manage Profiles</p>

      </div>
      <div className="dropdownContent dropdownContent--2">
        <p className="dropdownContent-textOutside">Account</p>
        <p className="dropdownContent-textOutside">Help Center</p>
        <p className="dropdownContent-textOutside">Sign out of Durflix</p>
      </div>
    </div>
  </div>

  
);

export default dropdownContent; 

