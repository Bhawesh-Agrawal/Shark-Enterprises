import React, { useContext } from 'react';
import './Categories.css';
import { Link } from "react-router-dom";
import { StoreContext } from '../../Context/Storecontext';

const Categories = () => {
  const { productDetail,url } = useContext(StoreContext);

  const groupedProducts = productDetail.reduce((acc, current) => {
    const { type } = current;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(current);
    return acc;
  }, {});

  return (
    <div>
      <div className="Categories">
        <p>Categories</p>
        <hr></hr>
      </div>
      {Object.keys(groupedProducts).map((type, index) => (
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
                      <img src={`${url}/images/`+ item.image} alt={item.image} />
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
          <hr style={{marginTop:'30px', height:"1.5px", backgroundColor:"black"}}/> 
        </div>
      ))}
    </div>
  );
};

export default Categories;