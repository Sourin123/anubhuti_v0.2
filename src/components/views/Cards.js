import React from "react";
import { useGlobalContext } from "../api/globalContex";

const Cards = () => {
  const { books, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1> Loading ......</h1>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {books.map((curEle) => {
            const { name, img, author, __id, uri } = curEle;
            return (
              // {name}
              <a href={uri}  className="link-offset-2 link-underline link-underline-opacity-0" target=" _blank">
              <div className="col" key={__id}>
    <div className="card" style={{
      maxWidth : "18rem",
    }}>
      <img src={img} class="card-img-top" alt="..."style={{
        height: "27rem"
      }}/>
      <div class="card-body" style={{
        height:"150px"
      }}> 
        <h5 class="card-title">{name}</h5>
        <p class="card-text text-black-50">{author}</p>
      </div>
    </div>
  </div>
  </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
