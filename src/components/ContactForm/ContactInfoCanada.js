import React from 'react';
 
const COntactInfo = () => {

    return (

      <div className="row">
        <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_pin_alt"></i>
            <p>Canada Office: </p>
            <h4>20 Olive Avenue, North York, Ontario, Toronto, ON M2N 7G5, Canada</h4>
        </div>
        <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_phone"></i>
            <p>Phone Number</p>
            <h4>+14168293412</h4>
        </div>
        <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_clock_alt"></i>
            <p>Opening Hours</p>
            <h4>Mon-Fri 9am - 6pm</h4>
        </div>
      </div>

    );
}

export default COntactInfo;