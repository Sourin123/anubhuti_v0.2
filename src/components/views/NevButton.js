import React from "react";

const NevButton = () => {
  return (
    <>
      <div className="container m-lg-3 ">
        <div className="d-flex justify-content-lg-evenly">
          <div className=" btn btn-group" style={{
            height : "auto",
            maxHeight : "51px" ,
           
           
          }}>
            <div className=" btn btn-outline-primary"> All </div>
            <div className="btn  btn-outline-primary">Educational </div>
            <div className="btn btn-outline-primary">  Literature</div>
            <div className="btn btn-outline-primary overflow-hidden"> Other Genre</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NevButton;
