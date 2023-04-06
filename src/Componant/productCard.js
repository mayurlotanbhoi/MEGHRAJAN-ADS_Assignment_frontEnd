import React, { useContext } from "react";
import { ContextApi } from "../App";

const ProductCard = () => {
  const { prosuct, setProsuct } = useContext(ContextApi);
  console.log(prosuct);
  return (
    <div className="card-contener d-flex flex-wrap justify-content-center">
      {prosuct.map((items) => {
        return (
          <>
            <div className=" m-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={"http://localhost:5000/" + items.imageLink}
                  className="card-img-top"
                  style={{ height: "250px" }}
                />
                {console.log("http://localhost:5000" + items.imageLink)}
                <div className="card-body">
                  <div>
                    <div className=" d-flex justify-content-between">
                      {" "}
                      <span>
                        {" "}
                        <span className=" pe-1 ">Name</span>
                        {items.ProductName}
                      </span>
                      <span>
                        {" "}
                        <span className=" pe-1">Color</span>
                        {items.ProductColor}{" "}
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            backgroundColor: `${items.ProductColor}`,
                            borderRadius: "50%",
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className=" d-flex justify-content-between">
                      {" "}
                      <span>
                        {" "}
                        <span className=" pe-1">Size </span>
                        {items.ProductSize}
                      </span>
                      <span>
                        <span className=" pe-1">&#8377;</span>
                        <span style={{ color: "green" }}>
                          {items.ProductPrice}
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p> */}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductCard;
