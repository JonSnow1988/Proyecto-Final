import React from "react";
import ItemListContainer from "../../Containers/ItemListContainer/ItemListContainer";
import "./Home.scss";

function Home() {
  return (
    <>
      <div className="title-cont">
        <h1 className="title">GamerSHOP</h1>
      </div>
      <ItemListContainer />
    </>
  );
}

export default Home;
