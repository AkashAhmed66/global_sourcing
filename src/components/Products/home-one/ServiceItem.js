import React from 'react'; 
import {Link} from "react-router-dom"; 
 
  
function ServiceItem(props) {
    const serviceURL = `/service/${props.title.split(' ').join('-').toLowerCase()}?id=${props.id}`
    return ( 
 
    <div className="col-sm-12 productItem"> 
        <div className="service_list"> 
            <div className="service_img"> 
                {/* <Link to={`${process.env.PUBLIC_URL + serviceURL}`}>  */}
                <img src={(process.env.PUBLIC_URL + '/assets/images/' + props.thumb)} alt="service" />
                {/* </Link> */}
            </div>
            <div className="service_para"> 
                <h5>{props.title}</h5>
                {/* <Link to={`${process.env.PUBLIC_URL + serviceURL}`}><i className={`${props.icon}`}></i>
                </Link>  */}
                {/* <Link to={`${process.env.PUBLIC_URL + serviceURL}`} className="serv_read">{props.btnText} <span className="fa fa-angle-double-right"></span></Link> */}
            </div> 
        </div> 
    </div> 

    );
}

export default ServiceItem;

 