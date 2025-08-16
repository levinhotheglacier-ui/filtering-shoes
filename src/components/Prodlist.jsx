import React, { useState } from "react";
import "/styles/prodlist.css";
import data from "../../db/data.js";
import { AiFillStar } from "react-icons/ai";

const Prodlist = ({ search, checkedCategory, checkedColor, checkedPrice }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const filteredData = data.filter((item) => {
    // Search filter
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    // Category filter
    const matchesCategory =
      checkedCategory === "all" || !checkedCategory
        ? true
        : item.category === checkedCategory;

    // Color filter
    const matchesColor =
      checkedColor === "all" || !checkedColor
        ? true
        : item.color === checkedColor;

    // Price filter (using newPrice as number)
    let matchesPrice = true;
    const price = parseFloat(item.newPrice);
    if (checkedPrice && checkedPrice !== "all") {
      if (checkedPrice === "50") matchesPrice = price >= 0 && price <= 50;
      else if (checkedPrice === "100")
        matchesPrice = price > 50 && price <= 100;
      else if (checkedPrice === "150")
        matchesPrice = price > 100 && price <= 150;
      else if (checkedPrice === "200") matchesPrice = price > 150;
    }

    return matchesSearch && matchesCategory && matchesColor && matchesPrice;
  });

  return (
    <>
      <div className="card-parent">
        {filteredData.length > 0 ? (
          filteredData.map((item, idx) => (
            <div
              className={`card ${
                item.newPrice === "20000" ? "special-card" : ""
              } ${item.newPrice === "19000" ? "messi-card" : ""}`}
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={
                hoveredIdx !== null && hoveredIdx !== idx
                  ? { filter: "blur(5px)", transition: "all 0.5s" }
                  : { filter: "none", transition: "all 0.5s" }
              }
            >
              <div className="img-container">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-details">
                <p>{item.title}</p>
                <div style={{ display: "flex", gap: "20px" }}>
                  <span>{item.reviews}</span>
                  <span>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <p>
                  <del>${item.prevPrice}</del> ${item.newPrice}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="nothing">
            <p>Nothing to show... 🫣</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Prodlist;
