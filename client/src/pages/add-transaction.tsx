import React, { useState } from 'react';
import '../app/globals.css'
import BottomNavBar from '@/app/components/BottomNavBar';
import Link from 'next/link';


interface Transaction {
    userId: string;
    amount: number;
    timestamp: string;
    category: string;
    subCategory: string;
    label: string;
}

interface TransactionFormProps {
  onSubmit: (transaction: Transaction) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);
  const [timestamp, setTimestamp] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [label, setLabel] = useState('');

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleTimestampChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimestamp(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleSubCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubCategory(event.target.value);
  };

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const transaction: Transaction = {
      userId,
      amount,
      timestamp,
      category,
      subCategory,
      label,
    };

    onSubmit(transaction);
  };

  return (
    <div className='transaction-page'>
        <div className='transaction-form'>
            <form onSubmit={handleSubmit} >
            <div className='transaction-box'>
                <label htmlFor="userId">User ID:</label>
                <input type="text" id="userId" value={userId} onChange={handleUserIdChange} />
            </div>
            <div className='transaction-box'>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
            </div>
            <div className='transaction-box'>
                <label htmlFor="timestamp">Timestamp:</label>
                <input type="datetime-local" id="timestamp" value={timestamp} onChange={handleTimestampChange} />
            </div>
            <div className='transaction-box'>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" value={category} onChange={handleCategoryChange} />
            </div>
            <div className='transaction-box'>
                <label htmlFor="subCategory">Subcategory:</label>
                <input type="text" id="subCategory" value={subCategory} onChange={handleSubCategoryChange} />
            </div>
            <div className='transaction-box'>
                <label htmlFor="label">Label:</label>
                <input type="text" id="label" value={label} onChange={handleLabelChange} />
            </div>
            <Link href="/home">
                <button type="submit" className='transaction-submit-button'>Submit</button>
            </Link>
            </form>
        </div>
        <BottomNavBar/>
    </div>
  );
};

export default TransactionForm;
