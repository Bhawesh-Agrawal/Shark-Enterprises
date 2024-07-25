import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [productDetail, setProductDetail] = useState([]);
  const [cartItems, setCartItems] = useState({});
  //const url = "https://shark-enterprise-backend.onrender.com";
  const url = "http://localhost:4000"

  const addtocart = async (itemId) => {
    
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url + "/api/cart/addtocart", { itemId }, { headers: { token } });
    }
  };

  const removecartItems = async (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const { [itemId]: removedItem, ...newState } = prev;
        return newState;
      }
    });
    if (token) {
      await axios.post(url + "/api/cart/removefromcart", { itemId }, { headers: { token } });
    }
  };

  const getTotalCartAmount = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productDetail.find((product) => product._id === item);
        totalamount += itemInfo.price * cartItems[item];
      }
    }
    return totalamount;
  };

  const loadData = async (token) => {
    const response = await axios.get(url + "/api/cart/getcart",{ headers: {token}});
    setCartItems(response.data.cartData);
  };  

  //console.log(cartItems)

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`${url}/api/product/list`);
        setProductDetail(response.data.data);
      } catch (error) {
        console.error(error);
      }
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadData(localStorage.getItem("token"));
      }
    };
    fetchList();
  }, [token]);

  const contextValue = {
    productDetail,
    addtocart,
    cartItems,
    removecartItems,
    setCartItems,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
