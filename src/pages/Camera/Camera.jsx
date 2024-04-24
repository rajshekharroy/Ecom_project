import React, { useContext, useEffect } from "react";
import "./Camera.css";
import { StoreContext } from "../../context/StoreContext";
import Device from "../../components/Devices/Device";
import { camera_brand, datas } from "../../assets/data";

function Camera({ category, gadgetBrand, setGadgetBrand, location,selectedValue, setSelectedValue }) {
  const { product_list, searchRes } = useContext(StoreContext);
  
  const finalRes = product_list.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchRes.toLowerCase()) ||
      item.brand_name.toLowerCase().includes(searchRes.toLowerCase())
    );
  });

  useEffect(() => {
    setGadgetBrand(null);
    setSelectedValue("All");
}, [location,setGadgetBrand]);


  return (
    <div className="phone-page">
      <img className="phone-ad" src={datas.cameraAd} alt="" />
      <div className="drop-down">
        <select
          onChange={(e) =>
            {setGadgetBrand(e.target.value === "All" ? null : e.target.value);
            setSelectedValue(e.target.value);
          }
          }
          // defaultValue={gadgetBrand ? gadgetBrand : "All"}
          value={selectedValue}
        >
          <option value="All">All</option>
          {camera_brand.map((item, index) => (
            <option key={index} value={item.brand_name}>
              {item.brand_name}
            </option>
          ))}
        </select>
      </div>
      <h1>
        A Picture is Worth a Thousand Words: Explore Our Camera Collection
      </h1>
      <div className="smartphone-display-list">
        {finalRes.map((item, index) => {
          if (
            category === item.category &&
            (gadgetBrand === null || gadgetBrand === item.brand_name)
          ) {
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

export default Camera;
