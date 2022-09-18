import { useState } from "react";
import App from "../App";

function Card({ listTransactions }) {
  return (
    <ul>
      <li>
        <div>
          <p>{listTransactions}</p>
          <p>{listTransactions}</p>
        </div>
        <div>
          <p>{listTransactions}</p>
        </div>
      </li>
    </ul>
  );
}

export default Card;
