import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Slider from '../components/Slider/SliderOne'
import About from '../components/About/home-one'
import Services from '../components/Services/home-one'
import Partners from '../components/Partners/home-one';
import ContactForm from '../components/ContactForm';


const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>NBM Trade International | Home</title>
        <meta
          name="description"
          content="Multipage Business  React JS Template."
        />
      </MetaTags>
      <LayoutOne>

        <Slider />
        <About />
        <Services />
        <ContactForm />

      </LayoutOne>
    </Fragment>
  );
};

export default Home;
