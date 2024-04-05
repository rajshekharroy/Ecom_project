import React, { useContext } from "react";
import "./Mobile.css";
import { StoreContext } from "../../context/StoreContext";
import Device from "../../components/Devices/Device";
import { brands, datas, phone_brand } from "../../assets/data";

function Mobile({ category, gadgetBrand, setGadgetBrand }) {
  const { product_list, searchRes } = useContext(StoreContext);

  const finalRes = product_list.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchRes.toLowerCase()) ||
      item.brand_name.toLowerCase().includes(searchRes.toLowerCase())
    );
  });



  return (
    <div className="phone-page">
      <img className="phone-ad" src={datas.phoneAd} alt="" />
      <h1>Capture Moments on the Go: Explore Our Mobile Collection</h1>
      <div className="drop-down">
      <select
        onChange={(e) => setGadgetBrand(e.target.value === "All" ? null : e.target.value)}
        defaultValue={gadgetBrand ? gadgetBrand : "All"}
      >
        <option value="All">All</option>
        {phone_brand.map((item, index) => (
          <option key={index} value={item.brand_name}>
            {item.brand_name}
          </option>
        ))}
      </select>
      </div>

      <div className="smartphone-display-list">
        {finalRes.map((item, index) => {
          if (category === item.category && (gadgetBrand === null || gadgetBrand === item.brand_name)) {
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
          return null;
        })}
      </div>
    </div>
  );
}

export default Mobile;

