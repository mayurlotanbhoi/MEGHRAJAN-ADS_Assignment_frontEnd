import React, { useState, useContext } from "react";
import swal from "sweetalert";
import { ContextApi } from "../App";

const AddCartForm = () => {
  const [file, setFile] = useState(null);
  const { setreLoader } = useContext(ContextApi);

  // console.log(Refresher, setRender);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const submit = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("myfile", file);
    formdata.append("ProductName", e.target.Product_Name.value);
    formdata.append("ProductPrice", e.target.Product_Price.value);
    formdata.append("ProductSize", e.target.Product_size.value);
    formdata.append("ProductColor", e.target.Product_color.value);

    fetch("http://localhost:5000/user/addCardDetails", {
      method: "POST",
      body: formdata,
    })
      .then((res) => {
        res.json();
        swal("success", "Cart Added!", "success");
        setreLoader((pre) => !pre);
      })
      .catch((e) => {
        console.log(e);
        swal("error", "Somthing is Wrong!", "error");
      });
  };

  // if (res.status === 201) {
  //   swal(`${reData.masseg}`, "Please Login!", "success");
  // } else {
  //   swal(`${reData.masseg}`, "Try Again!", "error");
  // }

  return (
    <div className=" container mt-5 mb-5">
      <div className="add-procust-heading">
        <h1>ADD PRODUCT</h1>
      </div>
      <form
        className="form-contener d-flex flex-wrap justify-content-between"
        onSubmit={(e) => submit(e)}
        encType="mulTipart/form-data"
        method="POST"
      >
        <div className="form-row col-md-12">
          <div className="form-group ">
            <input
              type="file"
              className="form-control"
              id="inputPassword4"
              placeholder="upload file"
              name="myfile"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>

        <div className="form-group col-md-5 m-3">
          <input
            type="text"
            className="form-control "
            id="inputAddress"
            placeholder="Product Name"
            name="Product_Name"
          />
        </div>
        <div className="form-group col-md-5 m-3">
          <input
            type="number"
            className="form-control "
            id="inputAddress2"
            placeholder="Product Price"
            name="Product_Price"
          />
        </div>

        <div className="form-group col-md-5 m-3">
          <input
            type="text"
            className="form-control "
            id="inputAddress2"
            placeholder="Product color"
            name="Product_color"
          />
        </div>
        <div className="form-group col-md-5 m-3">
          <input
            type="number"
            className="form-control "
            id="inputAddress2"
            placeholder="Product size"
            name="Product_size"
          />
        </div>

        <button type="submit" className="btn btn-primary col-md-12">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddCartForm;
