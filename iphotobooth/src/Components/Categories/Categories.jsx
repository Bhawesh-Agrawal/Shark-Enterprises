import React, { useContext, useEffect, useState } from 'react';
import './Categories.css';
import { Link } from "react-router-dom";
import { StoreContext } from '../../Context/Storecontext';

const Categories = () => {
  const { productDetail, url } = useContext(StoreContext);
  const [value, setValue] = useState("All")
  const [inputvalue, setInputValue] = useState("")

  const groupedProducts = productDetail.reduce((acc, current) => {
    const { type } = current;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(current);
    return acc;
  }, {});

  const filteredProducts = value === "All" ? groupedProducts : { [value]: groupedProducts[value] };
  
  const searchResult = ()=>{
    const filtered = {}
    Object.keys(filteredProducts).map((item,index)=>{
      const store = (filteredProducts[item])
      {store.map((key,value)=>{
        console.log(key["name"])
      })}
    })
    }
  useEffect(()=>{
    searchResult()
  })
  return (
    <div>
      <div className="categories-container">
        <div className="filter-box">
          <div className="search">
            <input type="text" placeholder="Search..." id="searchbar" />
          </div>
          <div className="filter-categories">
            <p>Product Type</p>
            <li className={value==="All"?"active-li":""} onClick={() => setValue("All")}>All</li>
            {Object.keys(groupedProducts).map((type, index) => (
              <div className="filter-list">
                <ul key={index}>
                  <li className={value===type?"active-li":""} onClick={() => setValue(type)}>{type}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="main-box">
          <div className="Categories">
            <p>Categories</p>
            <hr></hr>
          </div>
          {Object.keys(filteredProducts).map((type, index) => (
            <div key={index}>
              <div className="Category-title">
                <h2>{type}</h2>
              </div>
              <div className="Categories_list">
                {groupedProducts[type].map((item, index) => (
                  <div className='Categories_list-item' key={index}>
                    <div className='Product'>
                      <div className="Product-img">
                        <Link to={`/product/${item._id}`}>
                          <img src={`${url}/images/` + item.image} alt={item.image} />
                        </Link>
                      </div>
                      <div className="Product-name">
                        <p>{item.name}</p>
                      </div>
                      <div className="Product-price">
                        <p> &#x20b9; {item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr style={{ marginTop: '30px', height: "1.5px", backgroundColor: "black" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;