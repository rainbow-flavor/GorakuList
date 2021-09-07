import React from "react";
import { Route } from "react-router";

import Nav from './components/navbar';
import Footer from './components/footer';

import Main from "./components/main";
import Search from "./components/search";

function App() {
  return (
    <div>
      <Nav />
      <Route path="/" component={Main} exact/>
      <Route path="/search" component={Search} />
      <Footer />
    </div>
  )
}

export default App;