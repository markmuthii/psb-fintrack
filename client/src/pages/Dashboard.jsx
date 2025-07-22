const Dashboard = () => {
  return (
    <>
      <section className="analytics flex justify-between gap-12">
        <div className="card border-orange-500">
          <div id="balance" className="amount">
            0
          </div>
          <div>Balance</div>
        </div>
        <div className="card border-green-500">
          <div id="income" className="amount">
            0
          </div>
          <div>Income</div>
        </div>
        <div className="card border-red-500">
          <div id="expenses" className="amount">
            0
          </div>
          <div>Expenses</div>
        </div>
      </section>
      <section className="form">
        <form className="flex flex-col max-w-[500px] mx-auto gap-4">
          <input
            type="text"
            placeholder="Enter amount"
            className="form-element"
          />
          <select name="" id="" className="form-element">
            <option value={0}>Select Transaction Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <textarea
            name=""
            id=""
            placeholder="Description"
            rows={5}
            className="form-element"
            defaultValue={""}
          />
          <input
            type="submit"
            className="form-element bg-green-500 cursor-pointer"
            defaultValue="Add Record"
          />
        </form>
      </section>
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
            <tbody id="transactions-table-body" />
          </table>
        </div>
      </section>
    </>
  );
};

export { Dashboard };

// export default Dashboard;
