import axios from "axios";
import { useEffect, useState } from "react";

function useGetCustomers() {
  const [customers, setCustomers] = useState([]);

  const fetchData = async () => {
    const customerRes = await axios.get("http://localhost:3001/customers");

    setCustomers(customerRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { customers, setCustomers };
}

export default useGetCustomers;
