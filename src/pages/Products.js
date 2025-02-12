import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import Products from '../components/Products/home-one' 

const productPage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>NBM International Ltd | Products</title>
		  <meta
			name="description"
			content="Multipage Business  React JS Template."
		  />
		</MetaTags>
		<LayoutOne>
		<div className="service-page">
			<PageHeader
				bgImg={(process.env.PUBLIC_URL + '/assets/images/product_bg.jpg')}
				title="Our Products" 
			/>
			<Products /> 
			{/* <Funfact classes="funfact_serv" />  */}
			{/* <Testimonial />  */}
			{/* <LogoContainer />  */}
		</div>
		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default productPage;



