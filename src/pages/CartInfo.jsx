import React from "react";
import { createGlobalStyle } from "styled-components";
import {  useParams } from "react-router-dom";
import { orderData } from "../utils/helpers/general"; 

export default function CartInfo() {
  const { orderId } = useParams();
  const order = orderData.find((item) => item.id === Number(orderId));
  return (
    <div className="dbbcqa">
      <StyleGlobal />
      <h1 className=" ckIyQh">Буюртманын детальдары</h1>
      <div className="jtbxeL">
        <div className=" ZDOnE">
          <span className=" edyjZy">Аталышы:</span> {order.name}
        </div>
        <div className=" ZDOnE">
          <span className=" edyjZy">Сүрөттөмө:</span> {order.description}
        </div>
        <div className=" ZDOnE">
          <span className=" edyjZy">Буюртма берилген датасы:</span> {order.date}
        </div>
        <div className=" ZDOnE">
          <span className=" edyjZy">Статус:</span> {order.status}
        </div>
        <div className=" ZDOnE">
          <p className=" jeoAVw">
            {order.status === "Жөнөтүлдү"
              ? "Буюрмаңыз жөнөтүлдү. Жакынкы арада жеткирилип берилет, күтө туруңуз."
              : "Буюртмаңыз иштетилүүдө."}
          </p>
        </div>
        <div className=" ZDOnE">
          <span className=" edyjZy">Жалпы суммасы:</span> ${order.total}
        </div>
      </div>
    </div>
  );
}

const StyleGlobal = createGlobalStyle`
  .dbbcqa {
    background-color: rgb(249, 249, 249);
    padding: 40px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ckIyQh {
    font-size: 2.5rem;
    font-weight: bold;
    color: rgb(10, 132, 255);
    margin-bottom: 30px;
    text-align: center;
  }
  .jtbxeL {
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    padding: 24px;
    width: 100%;
    max-width: 500px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .ZDOnE {
    font-size: 1.2rem;
    color: rgb(51, 51, 51);
    margin: 12px 0px;
    line-height: 1.6;
  }
  .edyjZy {
    font-weight: bold;
    color: rgb(85, 85, 85);
  }
`;

