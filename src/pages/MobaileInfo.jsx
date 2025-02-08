import React from "react";
import { createGlobalStyle } from "styled-components";
import { products } from "../utils/helpers/general";
import { useNavigate, useParams } from "react-router-dom";

export default function MobaileInfo() {
  const { blogId } = useParams();
  const phoneInfo = products.find((item) => item.id === Number(blogId));
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="cart">
      <StyleGlobal />
      <div className="cart-product">
        <img className="cart-image" src={phoneInfo.image} alt="" />
        <div style={{ padding: "0 16px 0 16px" }}>
          <h3 className="name">{phoneInfo.name}</h3>
          <p className="desc">{phoneInfo.description}</p>
          <p className="price">${phoneInfo.price}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="btn-cart" onClick={() => handleNavigate(id)}>
              Подробнее
            </button>
            <button className="btn-cart-2">Заказать</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const StyleGlobal = createGlobalStyle`
  .cart{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

  .btn-cart{
  padding: 8px 12px;
    font-size: 1rem;
    color: rgb(0, 122, 255);
    background-color: transparent;
    border: 2px solid rgb(0, 122, 255);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
}
.btn-cart-2{
  padding: 8px 12px;
    font-size: 1rem;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 122, 255);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
}
.price{
  font-size: 1.2rem;
    font-weight: bold;
    color: rgb(0, 122, 255);
    margin-bottom: 12px;
}
.desc{
  font-size: 1rem;
    color: rgb(102, 102, 102);
    height: 60px;
    overflow: hidden;
}
.name{
  font-size: 1.2rem;
    color: rgb(51, 51, 51);
    margin-bottom: 8px;
}
.cart-product{
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  transition: 0.3s;
  width: 300px;
  height: 400px;
}
.cart-image{
  width: 100%;
  height: 200px;
  object-fit: contain;
}

`;
