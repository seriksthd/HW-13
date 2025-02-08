import React from "react";
import { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router";
export const Header = () => {
  return (
    <>
      <StyleGlobal />
      <div class="sc-blHHSb eKtihO">
        <Link class="sc-gtLWhw jzvWqY" to="/">
          Alma Shop
        </Link>
        <nav class="eoHWss">
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            About
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            My Orders
          </NavLink>
        </nav>
      </div>
    </>
  );
};

const StyleGlobal = createGlobalStyle`
  .eKtihO {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    background-color: rgb(28, 28, 30);
}
.jzvWqY {
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(245, 245, 247);
    text-decoration: none;
    transition: 0.2s;
}
.eoHWss {
    display: flex;
    gap: 24px;
    a{
    font-size: 1rem;
    color: rgb(222, 222, 225);
    text-decoration: none;
    font-weight: 500;
    &:hover{
    font-size: 1rem;
    color: rgb(10, 132, 255);
    font-weight: 500;
    transition: 0.3s;
    }
    }
    .active {
      font-size: 1rem;
    color: rgb(10, 132, 255);
    font-weight: 500;
    transition: 0.3s;
}
  a.inactive {
    font-size: 1rem;
    text-decoration: none;
  }
}
`;
