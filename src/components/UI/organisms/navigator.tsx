import React from "react";
import Menu from "../molecules/menu";
import staticData from "../../../assets/data/static_data.json";

const Navigator = (): JSX.Element => {
  return (
    <nav>
      <Menu links={staticData.links} />
    </nav>
  );
};

export default Navigator;
