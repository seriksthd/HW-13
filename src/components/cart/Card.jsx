import React from "react";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export default function Card({ id, name, date, status, total }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/order/${id}`);
  };

  return (
    <div>
        <StyleGlobal/>
      <div className="sc-cHqXqK bUNeJZ">
        <h2 className="sc-jtQUzJ ijFhVc">{name}</h2>
        <div className="sc-cEzcPc bdRSLY">
          <p className="sc-ovuCP ldwAWz">Дата: {date}</p>
          <p
            status={status}
            className={`sc-eOzmre ${
              status === "Жеткирилди"
                ? "fomdYL"
                : status === "Жөнөтүлдү"
                ? "lfVBWO"
                : "lpgKZz"
            }`}

          >
            {status}
          </p>
          <p className="sc-eauhAA bqUGWc">Total: ${total}</p>
          <button
            className="sc-fFoeYl exkjKw"
            onClick={handleNavigate}
          >
            Кененирээк маалымат
          </button>
        </div>
      </div>
    </div>
  );
}


const StyleGlobal = createGlobalStyle`
.kBMSyO {
  background-color: rgb(249, 249, 249);
  color: rgb(51, 51, 51);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bGsUni {
  font-size: 2.5rem;
  font-weight: 600;
  color: rgb(10, 132, 255);
  text-align: center;
  margin-bottom: 30px;
}

.ehDbgD {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

.bUNeJZ {
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  padding: 30px;
  width: 500px;
  transition: 0.3s;
}

.ijFhVc {
  font-size: 2rem;
  font-weight: 600;
  color: rgb(51, 51, 51);
  margin-bottom: 10px;
}

.ldwAWz {
  font-size: 1rem;
  color: rgb(102, 102, 102);
  margin-bottom: 6px;
}

.bqUGWc {
  font-size: 1.1rem;
  font-weight: bold;
  color: rgb(51, 51, 51);
  margin-bottom: 10px;
}

.exkjKw {
  padding: 12px 20px;
  font-size: 1rem;
  color: rgb(0, 122, 255);
  background-color: transparent;
  border: 1px solid rgb(0, 122, 255);
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.fomdYL {
  font-size: 1.5rem;
  font-weight: 500;
  color: green;
  margin-bottom: 6px;
}

.lfVBWO {
  font-size: 1.5rem;
  font-weight: 500;
  color: blue;
  margin-bottom: 6px;
}

.lpgKZz {
  font-size: 1.5rem;
  font-weight: 500;
  color: red;
  margin-bottom: 6px;
}
`;



