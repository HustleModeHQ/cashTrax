const express = require('express')
const app = express()

app.get("/api", (req, res) => {
     res.json({"users": ["user1", "user2", "user3"]})
})

app.listen(5000, () => {
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

