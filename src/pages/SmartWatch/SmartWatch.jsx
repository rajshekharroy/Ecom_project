import React, { useContext, useEffect } from "react";
import "./SmartWatch.css";
import { StoreContext } from "../../context/StoreContext";
import Device from "../../components/Devices/Device";
import { datas, watch_brand } from "../../assets/data";

function SmartWatch({ location, category, gadgetBrand, setGadgetBrand, selectedValue, setSelectedValue }) {
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
      <img className="phone-ad" src={datas.watchAd} alt="" />
      <h1>Stay Connected and Stylish: Explore Our Smartwatch Collection</h1>
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
          {watch_brand.map((item, index) => (
            <option key={index} value={item.brand_name}>
              {item.brand_name}
            </option>
          ))}
        </select>
      </div>
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

export default SmartWatch;
