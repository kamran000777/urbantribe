import React from "react";
import Loading from "../../loader/Loading";
import Product from "../../Product/Product";
import "./Gaming.css";

function Gaming({products,loading,error}) {
  return (
    <>
      <div className="gaming">
        <h1 className="gaming__title">Game Zone</h1>
        <div className="gaming__products">
          {loading ? (
            <Loading/>
          ) : error ? (
            <h2>{error.message}</h2>
          ) : (
            products
              .filter((product) => product.category === "game")
              .map((filteredProduct) => (
                <Product
                  key={filteredProduct._id}
                  productId={filteredProduct._id}
                  name={filteredProduct.name}
                  price={filteredProduct.price}
                  imageUrl={filteredProduct.imageUrl}
                />
              ))
          )}
        </div>
      </div>
    </>
  );
}

export default Gaming;
