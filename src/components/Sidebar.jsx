import React from "react";
import "/styles/sidebar.css";
import { FaCartShopping } from "react-icons/fa6";
const Sidebar = ({
  checkedCategory,
  setCheckedCategory,
  checkedPrice,
  setCheckedPrice,
  checkedColor,
  setCheckedColor,
}) => {
  const handleCheckedChange = (e) => {
    setCheckedCategory(e.target.id);
  };
  const handlePriceChange = (e) => {
    setCheckedPrice(e.target.id);
  };
  const handleColorChange = (e) => {
    setCheckedColor(e.target.id);
  };

  return (
    <>
      <div className="sidebar-parent">
        <div className="top-icon">
          <FaCartShopping className="nav-icon" style={{ fontSize: "28px" }} />
          <p>&nbsp; Shoe Collections</p>
        </div>

        <div className="radio-btns1">
          <p style={{ fontSize: "20px" }}>Category</p>
          <div className="btns1">
            <div>
              <input
                type="radio"
                name="category"
                id="all"
                checked={checkedCategory === "all"}
                onChange={handleCheckedChange}
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="category"
                id="sneakers"
                checked={checkedCategory === "sneakers"}
                onChange={handleCheckedChange}
              />
              <label htmlFor="sneakers">Sneakers</label>
            </div>

            <div>
              <input
                type="radio"
                name="category"
                id="flats"
                // checked={checkedCategory === "flats"}
                onChange={handleCheckedChange}
              />
              <label htmlFor="flats">Flats</label>
            </div>

            <div>
              <input
                type="radio"
                name="category"
                id="sandals"
                checked={checkedCategory === "sandals"}
                onChange={handleCheckedChange}
              />
              <label htmlFor="sandals">Sandals</label>
            </div>
            <div>
              <input
                type="radio"
                name="category"
                id="heels"
                checked={checkedCategory === "heels"}
                onChange={handleCheckedChange}
              />
              <label htmlFor="heels">Heels</label>
            </div>
          </div>
        </div>

        <div className="radio-btns1">
          <p style={{ fontSize: "20px" }}>Price</p>
          <div className="btns1">
            <div>
              <input
                type="radio"
                name="price"
                id="all"
                checked={checkedPrice === "all"}
                onChange={handlePriceChange}
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="price"
                id="50"
                checked={checkedPrice === "50"}
                onChange={handlePriceChange}
              />
              <label htmlFor="sneakers2">$0 - $50</label>
            </div>

            <div>
              <input
                type="radio"
                name="price"
                id="100"
                checked={checkedPrice == "100"}
                onChange={handlePriceChange}
              />
              <label htmlFor="flats2">$50 - $100</label>
            </div>

            <div>
              <input
                type="radio"
                name="price"
                id="150"
                checked={checkedPrice == "150"}
                onChange={handlePriceChange}
              />
              <label htmlFor="sandals2">$100 - $150</label>
            </div>
            <div>
              <input
                type="radio"
                name="price"
                id="200"
                checked={checkedPrice == "200"}
                onChange={handlePriceChange}
              />
              <label htmlFor="heels2">$150+</label>
            </div>
          </div>
        </div>

        <div className="radio-btns1 btns3">
          <p style={{ fontSize: "20px" }}>Color</p>
          <div className="btns1">
            <div>
              <input
                type="radio"
                name="color"
                id="all"
                checked={checkedColor === "all"}
                onChange={handleColorChange}
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                id="black"
                checked={checkedColor === "black"}
                onChange={handleColorChange}
              />
              <label htmlFor="sneakers3">Black</label>
            </div>

            <div>
              <input
                type="radio"
                name="color"
                id="blue"
                checked={checkedColor === "blue"}
                onChange={handleColorChange}
              />
              <label htmlFor="flats3">Blue</label>
            </div>

            <div>
              <input
                type="radio"
                name="color"
                id="red"
                checked={checkedColor === "red"}
                onChange={handleColorChange}
              />
              <label htmlFor="sandals3">Red</label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                id="green"
                checked={checkedColor === "green"}
                onChange={handleColorChange}
              />
              <label htmlFor="heels3">Green</label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                id="white"
                checked={checkedColor === "white"}
                onChange={handleColorChange}
              />
              <label htmlFor="white">White</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
