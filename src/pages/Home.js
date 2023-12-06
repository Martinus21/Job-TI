import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home(){
  return (
    <React.Fragment>
      <Link to="/" >Back</Link>
      <h1>Dashboard</h1>
    </React.Fragment>
  )
}

export default Home;