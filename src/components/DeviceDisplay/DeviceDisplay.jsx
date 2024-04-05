import React, { useContext, useState } from "react";
import "./DeviceDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Device from "../Devices/Device";

function DeviceDisplay({ brand }) {
  const { product_list,searchRes } = useContext(StoreContext);


  const finalRes = product_list.filter((item)=>{
      return(
        item.name.toLowerCase().includes(searchRes.toLowerCase()) ||
      item.brand_name.toLowerCase().includes(searchRes.toLowerCase())
      )
  })

  return (
    <div className="smartphone-display">
      <h2>
        {brand === "All"
          ? "Explore Our Selection of Smartphones, Smartwatches, Laptops, and Cameras !"
          : `Your ${brand} devices!`}
      </h2>



      <div className="smartphone-display-list">
        {finalRes.map((item, index) => {
          if (brand === "All" || brand === item.brand_name) {
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

export default DeviceDisplay;
