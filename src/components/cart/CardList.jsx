import React from "react";
import { orderData } from "../../utils/helpers/general";
import Card from "./Card";

export default function CardList() {
  return (
    <div>
      <div className="sc-keTIit kBMSyO">
        <h1 className="sc-dpBQxM bGsUni">Менин Буйрутмаларым</h1>
        <div className="sc-jwIPbr ehDbgD">
          {orderData.map((order) => (
            <Card key={order.id} {...order} />
          ))}
        </div>
      </div>
    </div>
  );
}