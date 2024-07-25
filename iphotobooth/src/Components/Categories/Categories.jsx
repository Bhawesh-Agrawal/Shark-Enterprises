import React, { useContext, useEffect, useState } from 'react';
import './Categories.css';
import { Link } from "react-router-dom";
import { StoreContext } from '../../Context/Storecontext';
import axios from 'axios';

const Categories = () => {
  const [filter, setFilter] = useState("All")
  const { url } = useContext(StoreContext)
  const [list, setList] = useState([])
  const [selectedProductType, setSelectedProductType] = useState("");
  const [input, setInput] = useState("")
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [query, setQuery] = useState({
    type: "",
    search: ""
  })

  useEffect(() => {
    const fetchList = async () => {
      try {
        if (query.type === "") {
          delete query.type;
        }
        console.log(`${url}/api/product/list/?${query}`)
        const response = await axios.get(`${url}/api/product/list/`, { params: query })
        if (response.data.data) {
          setList(response.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchList()
  }, [query])

  const onchangehandler = (e) => {
    setInput(e.target.value);
    clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        setQuery({ ...query, search: input });
      }, 500)
    );
  };

  const onclickhandler = (productType) => {
    setFilter(productType);
    setSelectedProductType(productType);
  };

  useEffect(() => {
    if (selectedProductType && selectedProductType !== "All") {
      setQuery({ type: selectedProductType });
    } else {
      setQuery({ type: "" })
    }
  }, [selectedProductType]);

  return (
    <div>
      <div className="categories-container">
        <div className="filter-box">
          <div className="search">
            <input type="text" placeholder="Search..." id="searchbar" value={input} onChange={(e) => onchangehandler(e)} />
          </div>
          <div className="filter-categories">
            <p>Product Type</p>
            <li className={filter === "All" ? "active-li" : ""} onClick={() => onclickhandler("All")}>All</li>
            <div className="list-item">
              <ul>
                <li onClick={() => onclickhandler("B-Rt")} className={filter === "B-Rt" ? "active-li" : ""}>B-Rt</li>
                <li onClick={() => onclickhandler("Gel")} className={filter === "Gel" ? "active-li" : ""}>Gel</li>
                <li onClick={() => onclickhandler("Ball Pen")} className={filter === "Ball Pen" ? "active-li" : ""}>Ball Pen</li>
                <li onClick={() => onclickhandler("Frost")} className={filter === "Frost" ? "active-li" : ""}>Frost</li>
                <li onClick={() => onclickhandler("Switch")} className={filter === "Switch" ? "active-li" : ""}>Switch</li>
                <li onClick={() => onclickhandler("Regular Stapler")} className={filter === "Regular Stapler" ? "active-li" : ""}>Regular Stapler</li>
                <li onClick={() => onclickhandler("Long Reach Stapler")} className={filter === "Long Reach Stapler" ? "active-li" : ""}>Long Reach Stapler</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-box">
          <div className="Categories">
            <p>Categories</p>
            <hr></hr>
          </div>
          <div className="Categories_list">
            {list.map((item, index) => (
              <div key={index}>

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
        </div>
      </div>
    </div>
  );
};

export default Categories;