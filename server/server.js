const express = require('express')
const cors = require('cors');
// import firebase from 'firebase/app';
// import 'firebase/firestore';
const app = express()
app.use(cors());
const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'firestore.googleapis.com/projects/hustlewallet-34e56/databases/(default)'
});

const db = admin.firestore();

app.get("/api", (req, res) => {
     res.json({"users": ["user1", "user2", "user3"]})
})

app.listen(5001, () => {
    console.log("Server started on port 5000")
})

const TrData = require('./transactions.json');

TrData.sort((a,b) => {
    const stDate = new Date(a.timeStamp)
    const endDate = new Date(b.timeStamp)
    return stDate - endDate
})

app.get("/list", (req, res) => {
    res.json(TrData)
})

app.get("/summary", (req, res) => {
    
    // const stDate = new Date('2023-01-31T16:00:00')
    // const endDate = new Date('2023-05-26T16:00:00')

    const stDate = new Date(req.query.d1)
    const endDate = new Date(req.query.d2)

    const filteredTransactions = TrData.filter((transaction) => {
        const date = new Date(transaction.timeStamp);
        return date >= stDate && date <= endDate;
      });

    const summarized = {
        total: 0,
        cats: {
        },
        labels: {

        }
    }

    for (let i = 0; i < filteredTransactions.length; i++){
        const curVal = filteredTransactions[i].amount;
        const curCat = filteredTransactions[i].category;
        const curSubCat = filteredTransactions[i].subCategory;
        const curLabel = filteredTransactions[i].label;

        summarized.total = summarized.total + curVal
        // Category addition
        if (summarized.cats[curCat]){
            summarized.cats[curCat].sum = summarized.cats[curCat].sum + curVal

            // SubCategory addition
            if(summarized.cats[curCat][curSubCat]){
                summarized.cats[curCat][curSubCat] = summarized.cats[curCat][curSubCat] + curVal
            }
            else{
                summarized.cats[curCat][curSubCat] = curVal
            }
        }
        else{
            summarized.cats[curCat] = {
                sum: curVal,
                [curSubCat]: curVal,
            }
        }

        // Label Addition
        if(summarized.labels[curLabel]){
            summarized.labels[curLabel] = summarized.labels[curLabel] + curVal
        }
        else{
            summarized.labels[curLabel] = curVal
        }


    }

    res.json(summarized)

})

app.get('/get_transactions', (req, res) => {
    const userDocRef = db.doc('example/5YGZj7DBqhQU9JBcFWvo');
    const accountDocRef = userDocRef.collection('accounts').doc('SqKUNrc4R3IcYHM7k4mz');
    const transactionCollection = accountDocRef.collection('transactions');

    let all_transactions = []
    // console.log('Error getting documents1: ', userDocRef);

    transactionCollection.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                all_transactions.push(doc.data())
                // console.log('Error getting documents2: ', doc.data());
            })
            res.status(200).send(JSON.stringify(all_transactions))
        })
        .catch((error) => {
            console.log('Error getting documents: ', error);
            res.status(500).send('Error getting transactions')
        });
})

