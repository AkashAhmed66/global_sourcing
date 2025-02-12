import React from 'react';
 
const COntactInfo = () => {

    return (

      <div className="row">
        <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_pin_alt"></i>
            <p>Bangladesh Office: </p>
            <h4>Rose Garden, House: 36, Road: 13, Sector 11 Uttara Model Town Dhaka-1230, Bangladesh</h4>
        </div>
        <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_phone"></i>
            <p>Phone Number</p>
            <h4>+8801767 417009</h4>
        </div>
        <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_clock_alt"></i>
            <p>Opening Hours</p>
            <h4>Sat-Thur 9am - 6pm</h4>
        </div>
      </div>

    );
}

export default COntactInfo;