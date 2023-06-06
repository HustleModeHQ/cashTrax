import TransactionList from "@/app/components/TransactionList";
import React from "react";
import '../app/globals.css'

function Home() {
    return(
        <div className="home-page">
            <div className="widgets">
                <p>assume widgets!!</p>
            </div>
            <div className="transactions">
                <TransactionList/>
            </div>
        </div>
    )
}

export default Home;