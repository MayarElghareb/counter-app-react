import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./ShopStyle.css";
function MyShop() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  return (
    <div className="wrap container justify-content-around mt-5">
      {product && product.length > 0 ? (
        product.map((elem) => {
          return (
            <Link to={`/shop/${elem.id}`} key={elem.id}>
              <div className="card  justify-content-center mt-2">
                <img
                  className="card-img-top w-50 m-auto mt-2"
                  src={elem.image}
                  alt="product"
                />

                <div className="card-body">
                  <h5 className="card-title">{elem.title}</h5>

                  <p className="card-text"> {elem.price}</p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div class="spinner-border" role="status">
          {/* <span class="sr-only">Loading...</span> */}
        </div>
      )}
    </div>
  );
}
export default MyShop;
