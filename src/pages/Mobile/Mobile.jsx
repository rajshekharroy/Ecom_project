import React, { useContext, useState } from "react";
import "./Mobile.css";
import { StoreContext } from "../../context/StoreContext";
import Device from "../../components/Devices/Device";
import { brands, datas } from "../../assets/data";

function Mobile({ category, brand, setBrand }) {
  const { product_list, searchRes } = useContext(StoreContext);

  const finalRes = product_list.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchRes.toLowerCase()) ||
      item.brand_name.toLowerCase().includes(searchRes.toLowerCase())
    );
  });



  return (
    <div className="phone-page">
      {/* <h2>{category==="Phone"?"Explore Our Selection of Smartphones, Smartwatches, Laptops, and Cameras !":`Your devices!`}</h2> */}
      <img className="phone-ad" src={datas.phoneAd} alt="" />
      <h1>Capture Moments on the Go: Explore Our Mobile Collection</h1>

      {brands.map((item, index) => {
        return (
          <select
            onChange={() =>
              setBrand((prev) =>
                prev === item.brand_name ? "All" : item.brand_name
              )
            }
            name=""
            id=""
            key={index}
          >
            <option value="All">All</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Vivo">Vivo</option>
            <option value="OnePlus">OnePlus</option>
            <option value="Realme">Realme</option>
          </select>
        );
      })}

      <div className="smartphone-display-list">
        {finalRes.map((item, index) => {
          if (category === item.category) {
            return (
              <Device
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                category={item.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Mobile;
