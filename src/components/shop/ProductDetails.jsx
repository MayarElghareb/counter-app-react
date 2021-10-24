import { useEffect, useState } from "react";

const ShopDetails = ({ match }) => {
  const [productDetail, setProductDetail] = useState(null);
  useEffect(() => {
    fetchProductDetails();
  }, []);
  const fetchProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setProductDetail(json));
  };

  return (
    <div className="wrap justify-content-center mt-5 d-flex align-items-center gap-2  ">
      {productDetail && Object.keys(productDetail).length > 0 ? (
        <>
          <div className="card  justify-content-center mt-2 p-5">
            <img
              className="card-img-top w-100 m-auto mt-2 "
              src={productDetail.image}
              alt="product"
            />
          </div>
          <div className="card-content">
            <h5 className="card-title">{productDetail.title}</h5>

            <p className="card-text"> {productDetail.price}</p>
          </div>
        </>
      ) : (
        <div class="spinner-border" role="status"></div>
      )}
    </div>
  );
};
export default ShopDetails;
