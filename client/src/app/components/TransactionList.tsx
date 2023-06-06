import React, { useEffect } from "react";
import { useState } from "react";
import { json } from "stream/consumers";

interface Transaction {
    userId: string;
    amount: number;
    timestamp: string;
    category: string;
    subCategory: string;
    label: string;
}

const TrList: React.FC = () => {
    const [TransactionData, setTransactionData] = useState<Transaction[]>([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // const response = await fetch("api_end_point");
            // if(!response.ok) {
            //     throw new Error('Failed to fetch Data');
            // }
            // const jsonData = await response.json();
            const oneTransaction: any[] = ["superUser", 4740, "20230405T090000", "Personal Care", "Health/Wellness", "friends"];
            const jsonData: Transaction[] = [];
            const oneList: Transaction = {
            userId: oneTransaction[0],
            amount: oneTransaction[1],
            timestamp: oneTransaction[2],
            category: oneTransaction[3],
            subCategory: oneTransaction[4],
            label: oneTransaction[5],
            };
            jsonData.push(oneList);
            jsonData.push(oneList);
            jsonData.push(oneList);
            jsonData.push(oneList);
            jsonData.push(oneList);
            setTransactionData(jsonData);
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Assume Transaction List</h1>
            {TransactionData.map((item, index) => (
                <SingleTransaction key={index} data={item}/>
            ))}
        </div>
    );
}

function SingleTransaction({ data }: { data: Transaction }) {
    const { amount = 0, userId = 'bru', timestamp = 'boost', category, subCategory, label } = data;
    
    return (
      <div className="single-transaction">
        <div className="box">{amount}</div>
        <div className="box">{userId}</div>
        <div className="box">{timestamp}</div>
        <div className="box">{category}</div>
        <div className="box">{subCategory}</div>
        <div className="box">{label}</div>
      </div>
    );
  }

export default TrList;