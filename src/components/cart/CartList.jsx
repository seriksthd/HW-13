import React from "react";

import { createGlobalStyle } from "styled-components";
import { products } from "../../utils/helpers/general";
import Cart from "./Cart";

export default function CartList() {
  return (
    <div >
      <StyleGlobal />
      <div className="cart">
        {products.map((item) => (
          <Cart key={item.id} {...item} />
        ))}
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

`;
