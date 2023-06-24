import TransactionList from "@/app/components/TransactionList";
import React from "react";
import '../app/globals.css'
import '../app/components/FloatingButton'
import FloatingButton from "../app/components/FloatingButton";

function Home() {
    return(
        <div className="home-page">
            <div className="widgets">
                <p>assume widgets!!</p>
            </div>
            <div className="transactions">
                <TransactionList/>
            </div>
            <FloatingButton/>
        </div>
    )
}

export default Home;