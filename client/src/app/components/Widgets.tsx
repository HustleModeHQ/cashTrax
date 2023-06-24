// import React from "react";
// import { useState, useEffect } from "react";

// interface ExpenseData {
//     total: number;
//     cats: {
//       [category: string]: {
//         sum: number;
//         [subcategory: string]: number;
//       };
//     };
//     labels: {
//       [label: string]: number;
//     };
//   }
  


// const Summary: React.FC = () => {
//     const [SummaryData, setSummaryData] = useState<ExpenseData>();

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch("https://localhost:5000/summary/");
//             if(!response.ok) {
//                 throw new Error('Failed to fetch Data');
//             }
//             const jsonData = await response.json(); 
//             setSummaryData(jsonData);

//         }
//         catch(error) {
//             console.log(error);
//         }
//     }


//     return(
//         <div>
//             <PerCategory data = {SummaryData} />
//         </div>
//     );
// }

// function PerCategory({data}: {data: ExpenseData}) {
//     const {}
//     return (
//         <div>

//         </div>
//     )
// }

// export default Summary;