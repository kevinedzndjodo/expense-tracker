import "./App.css";
import "./index.css";
import AddNewTransaction from "./components/AddNewTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionHistory from "./components/TransactionHistory";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />{" "}
        <div className="inc-exp-container">
          <IncomeExpense />
        </div>
      </div>
      <TransactionHistory />
      <AddNewTransaction />
    </GlobalProvider>
  );
}

export default App;
