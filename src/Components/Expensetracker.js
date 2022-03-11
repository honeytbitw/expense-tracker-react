import React, {useContext, useEffect, useState} from 'react'
import { numberWithCommas } from '../utils/format';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transactions';
export const Expensetracker = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const { transaction, getTransaction } = useContext(GlobalContext);
  useEffect(() => {
    // getTransaction();  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      category,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  // const { transactions } = useContext(GlobalContext);

  // const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
    
    return (
      <div style={{backgroundColor:'#100C08', color:'grey', height:'60px', paddingTop:'2px'}}>
      <h2 style={{textAlign:'center'}}>
        Expense Tracker
      </h2>
      <h4>Your Balance</h4>
    <h1>₹{numberWithCommas(total)}</h1>
    <div>
          <h4>Income</h4>
  <p className="money plus">₹{numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">₹{numberWithCommas(expense)}</p>
        </div>

        <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category..." />
        </div>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
    
  )
}
