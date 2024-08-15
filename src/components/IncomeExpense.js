import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center">
      <div className="bg-white flex items-center justify-center flex-col shadow-1 p-8]">
        <h4 className="font-bold text-xl">Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div className="bg-white flex items-center justify-center flex-col shadow-1 p-8]">
        <h4 className="font-bold text-xl">Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
