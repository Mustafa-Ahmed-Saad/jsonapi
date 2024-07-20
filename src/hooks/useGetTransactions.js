import axios from "axios";
import { useEffect, useState } from "react";

function useGetTransactions() {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const transactionRes = await axios.get(
      "http://localhost:3001/transactions"
    );

    setTransactions(transactionRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { transactions, setTransactions };
}

export default useGetTransactions;
