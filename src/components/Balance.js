import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="bg-white shadow-1 p-1">
      <h4 className="font-semibold text-base md:text-lg">Your Balance</h4>
      <h1 className="font-bold text-2xl md:text-4xl">${total}</h1>
    </div>
  );
};

export default Balance;
