import React from "react";
import { createGlobalStyle } from "styled-components";
import CartList from "../components/cart/CartList";

export default function Products() {
  return (
    <div className="continer">
      <StyleGlobal/>
      <h1 className="Productsh1">Сатыктагы товарлар</h1>
      <CartList/>
    </div>
  );
}
const StyleGlobal = createGlobalStyle`

.Productsh1{
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: rgb(10, 132, 255);
}
.continer{
  color: rgb(28, 28, 30);
  background-color: rgb(245, 245, 247);
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
}
  `;
