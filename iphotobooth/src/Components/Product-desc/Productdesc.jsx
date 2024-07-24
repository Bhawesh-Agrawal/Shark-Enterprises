import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { StoreContext } from '../../Context/Storecontext';
import { assets } from '../../assets/assest';
import './Productdesc.css'

const Productdesc = () => {
  const { id } = useParams();
  const { cartItems, addtocart, removecartItems, productDetail, url } = useContext(StoreContext);

  return (
    <div>
      {productDetail.map((item) => {
        if (item._id === id) {
          return (
            <div key={item._id} className="prod">
              <div className="left-column">
                <div className="prod-img">
                  <img src={`${url}/images/${item.image}`} alt={item.image} />
                </div>
              </div>
              <div className="right-column">
                <div className="prod-name">
                  <h2>{item.name}</h2>
                </div>
                <div className="prod-desc">
                  <p>{item.description}</p>
                </div>
                <div className="prod-price">
                  <p>&#x20b9; {item.price}</p>
                </div>
                {cartItems && cartItems?.[id] ? (
                  <div className="product_item_counter">
                    <img
                      className="add"
                      onClick={() => removecartItems(id)}
                      src={assets.minus}
                      alt="minus"
                    />
                    <p>{cartItems[id]}</p>
                    <img
                      className="minus"
                      onClick={() => addtocart(id)}
                      src={assets.plus}
                      alt="plus"
                    />
                  </div>
                ) : (
                  <img
                    className="add1"
                    onClick={() => addtocart(id)}
                    src={assets.plus}
                    alt="plus"
                  />
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Productdesc;