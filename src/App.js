import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import LandingPageOne from "./pages/LandingPageOne";
import LandingPageTwo from "./pages/LandingPageTwo";
import Product from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Gallery from "./pages/Gallery";
import SingleGallery from "./pages/SingleGallery";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import SingleBlog from "./pages/SingleBlog";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={Home}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home"}`}
            component={Home}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-two"}`}
            component={HomeTwo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-three"}`}
            component={HomeThree}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/landingpage-one"}`}
            component={LandingPageOne}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/landingpage-two"}`}
            component={LandingPageTwo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route exact path={`${process.env.PUBLIC_URL + '/products'}`}
            component={Product}
          />
          <Route path={`${process.env.PUBLIC_URL + '/products/:product'}`}
            component={SingleProduct}
          />
          <Route path={`${process.env.PUBLIC_URL + '/gallery/:galleryID'}`}
            component={SingleGallery}
          />
          <Route path={`${process.env.PUBLIC_URL + '/blog/:blogID'}`}
            component={SingleBlog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/gallery"}`}
            component={Gallery}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/partners"}`}
            component={Partners}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog}
          />
          <Route exact component={NotFound} />

        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
