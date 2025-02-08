import React from "react";
import { createGlobalStyle } from "styled-components";

export default function Main() {
  return (
    <div>
      <StyleGlobal />
      <div class="fhKeeF">
        <div>
          <h1>Alma Shop'ко кош келдиңиз!</h1>
          <p>
            Биздин дүкөндөн эң мыкты продукттарды таап алыңыз жана жаңы дүйнөнү
            ачыңыз.
          </p>
        </div>
        <img src="https://alma-shop.vercel.app/apple-products.png" alt="aple" />
      </div>
    </div>
  );
}
const StyleGlobal = createGlobalStyle`
.fhKeeF {
  color: rgb(28, 28, 30);
  background-color: rgb(245, 245, 247);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 70px;
}
`;
