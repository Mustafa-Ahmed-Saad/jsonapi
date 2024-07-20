import { useState } from "react";

function CustomerTable({ customers, transactions, setSelectedCustomer }) {
  const [filterName, setFilterName] = useState("");
  const [filterAmount, setFilterAmount] = useState("");

  function getDataToShow() {
    return customers.filter((customer) => {
      return customer.name.toLowerCase().includes(filterName.toLowerCase());
    });
  }

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.amount.toString().includes(filterAmount)
  );

  const getTransactionsForCustomer = (customerId) =>
    filteredTransactions.filter(
      (transaction) => transaction.customer_id.toString() === customerId
    );

  return (
    <div className="container mx-auto">
      {/* start filter */}
      <div className="w-full bg-green-50 my-5 py-3">
        <input
          className="mx-5 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Filter by name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Filter by amount"
          value={filterAmount}
          onChange={(e) => setFilterAmount(e.target.value)}
        />
      </div>
      {/* end filter */}

      <table className="w-full border-2 border-red-500">
        <thead>
          <tr>
            <th>Name</th>
            <th>Transactions</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {getDataToShow()?.map((customer) => (
            <tr
              key={customer.id}
              onClick={() => setSelectedCustomer(customer)}
              className="border-b border-red-500"
            >
              <td>{customer.name}</td>
              <td>
                {getTransactionsForCustomer(customer.id).map((transaction) => (
                  <div key={transaction.id}>${transaction.amount}</div>
                ))}
              </td>
              <td>
                {getTransactionsForCustomer(customer.id).map((transaction) => (
                  <div key={transaction.id}>{transaction.date}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
