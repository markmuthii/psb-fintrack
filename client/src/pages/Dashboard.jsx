import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import Flatpickr CSS for styling

const Dashboard = () => {
  const dateRef = useRef(null); // Reference to the date input field for Flatpickr

  // State to manage cash flow data (balance, income, and expenses)
  const [cashFlow, setCashFlow] = useState({
    balance: null,
    income: null,
    expense: null,
  });

  // State variables for form inputs
  const [amount, setAmount] = useState(""); // Amount input field
  const [trxType, setTrxType] = useState(""); // Transaction type (income or expense)
  const [description, setDescription] = useState(""); // Description of the transaction

  // State to store the list of transactions
  const [transactions, setTransactions] = useState([]);

  // Function to handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    let newCashflow = cashFlow; // Create a copy of the current cash flow state

    // Update cash flow based on transaction type
    if (trxType === "income") {
      newCashflow.balance = cashFlow.balance + amount; // Add amount to balance
      newCashflow.income = cashFlow.income + amount; // Add amount to income
    } else {
      newCashflow.balance = cashFlow.balance - amount; // Subtract amount from balance
      newCashflow.expense = cashFlow.expense + amount; // Add amount to expenses
    }

    setCashFlow(newCashflow); // Update the cash flow state

    // Create a new transaction object
    const transaction = {
      date: new Date().toLocaleDateString(), // Current date
      amount, // Transaction amount
      trxType: trxType[0].toUpperCase() + trxType.slice(1), // Capitalize transaction type
      description, // Transaction description
    };

    // Add the new transaction to the list of transactions
    setTransactions((prevTransactions) => {
      return [...prevTransactions, transaction];
    });

    // Reset form fields
    setAmount("");
    setTrxType("");
    setDescription("");
  };

  // Effect to save transactions and cash flow to localStorage whenever they change
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions)); // Save transactions to localStorage
    }

    if (cashFlow.balance) {
      localStorage.setItem("cashFlow", JSON.stringify(cashFlow)); // Save cash flow to localStorage
    }
  }, [transactions, cashFlow]);

  // Effect to initialize Flatpickr and load data from localStorage on component mount
  useEffect(() => {
    // Initialize Flatpickr for date range selection
    if (dateRef.current) {
      flatpickr(dateRef.current, {
        mode: "range", // Enable range selection mode
      });
    }

    // Load transactions from localStorage
    const transactionsInLocalStorage = JSON.parse(
      localStorage.getItem("transactions") || JSON.stringify([])
    );
    setTransactions(transactionsInLocalStorage);

    // Load cash flow data from localStorage
    const cashFLowInLocalStorage = JSON.parse(
      localStorage.getItem("cashFlow") ||
        JSON.stringify({
          balance: null,
          income: null,
          expense: null,
        })
    );
    setCashFlow(cashFLowInLocalStorage);
  }, []);

  return (
    <>
      {/* Section to display analytics (balance, income, expenses) */}
      <section className="analytics flex justify-between gap-12">
        <div className="card border-orange-500">
          <div id="balance" className="amount">
            {cashFlow.balance ?? 0} {/* Display balance or 0 if null */}
          </div>
          <div>Balance</div>
        </div>
        <div className="card border-green-500">
          <div id="income" className="amount">
            {cashFlow.income ?? 0} {/* Display income or 0 if null */}
          </div>
          <div>Income</div>
        </div>
        <div className="card border-red-500">
          <div id="expenses" className="amount">
            {cashFlow.expense ?? 0} {/* Display expenses or 0 if null */}
          </div>
          <div>Expenses</div>
        </div>
      </section>

      {/* Form to add a new transaction */}
      <section className="form">
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col max-w-[500px] mx-auto gap-4"
        >
          <input
            type="text"
            placeholder="Enter amount"
            className="form-element"
            value={amount}
            onChange={(e) => {
              setAmount(parseInt(e.target.value)); // Update amount state
            }}
          />
          <select
            className="form-element"
            value={trxType}
            onChange={(e) => {
              setTrxType(e.target.value); // Update transaction type state
            }}
          >
            <option value={0}>Select Transaction Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <textarea
            placeholder="Description"
            rows={5}
            className="form-element"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value); // Update description state
            }}
          />
          <input
            type="submit"
            className="form-element bg-green-500 cursor-pointer"
            defaultValue="Add Record"
          />
        </form>
      </section>

      {/* Section to display and filter transactions */}
      <section className="transactions space-y-2">
        <div className="table-top">
          <form className="flex gap-4">
            <select name="" id="filter-type" className="form-element">
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input
              type="text"
              placeholder="Search by description"
              className="form-element"
              id="filter-description"
            />
            <input
              type="text"
              className="input max-w-fit form-element"
              placeholder="YYYY-MM-DD to YYYY-MM-DD"
              id="flatpickr-range"
              ref={dateRef} // Attach Flatpickr to this input
            />
            <button
              type="submit"
              className="form-element bg-green-500 cursor-pointer"
            >
              Export
            </button>
          </form>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Trx Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody id="transactions-table-body">
              {transactions.length > 0 ? (
                transactions.map((transaction, i) => (
                  <tr key={i}>
                    <td scope="col" className="px-6 py-3">
                      {i + 1} {/* Transaction index */}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      {transaction.amount} {/* Transaction amount */}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      {transaction.date} {/* Transaction date */}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      {transaction.trxType} {/* Transaction type */}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      {transaction.description} {/* Transaction description */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No transactions found</td>{" "}
                  {/* Message when no transactions exist */}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export { Dashboard };
