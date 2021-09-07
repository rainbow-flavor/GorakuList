import React from "react";
import { Route } from "react-router";

import Nav from './components/navbar';
import Footer from './components/footer';

import Main from "./components/main";
import Search from "./components/search";
import Cs from "./components/cs";
import Toc from "./components/toc";

function App() {
  return (
    <div>
      <Nav />
      <Route path="/" component={Main} exact/>
      <Route path="/search" component={Search} />
      <Route path="/cs" component={Cs} />
      <Route path="/toc" component={Toc} />
      <Footer />
    </div>
  )
}

export default App;