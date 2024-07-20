import { useState } from "react";
import "./App.css";
import CustomerTable from "./components/customerTable/CustomerTable";
import TransactionGraph from "./components/transactionGraph/TransactionGraph";
import useGetCustomers from "./hooks/useGetCustomers";
import useGetTransactions from "./hooks/useGetTransactions";

function App() {
  const { customers } = useGetCustomers();
  const { transactions } = useGetTransactions();

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="App">
      <CustomerTable
        customers={customers}
        transactions={transactions}
        setSelectedCustomer={setSelectedCustomer}
      />
      {selectedCustomer && (
        <TransactionGraph
          transactions={transactions.filter(
            (t) => t.customer_id.toString() === selectedCustomer.id
          )}
        />
      )}
    </div>
  );
}

export default App;
