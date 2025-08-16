import React, { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Prodlist from "./components/Prodlist";

const App = () => {
  const [search, setSearch] = useState("");
  const [checkedCategory, setCheckedCategory] = useState("all");
  const [checkedPrice, setCheckedPrice] = useState("all");
  const [checkedColor, setCheckedColor] = useState("all");
  return (
    <div>
      <Nav search={search} setSearch={setSearch} />
      <Sidebar
        checkedCategory={checkedCategory}
        setCheckedCategory={setCheckedCategory}
        checkedPrice={checkedPrice}
        setCheckedPrice={setCheckedPrice}
        checkedColor={checkedColor}
        setCheckedColor={setCheckedColor}
      />
      <Prodlist
        search={search}
        checkedCategory={checkedCategory}
        checkedPrice={checkedPrice}
        checkedColor={checkedColor}
      />
    </div>
  );
};

export default App;
