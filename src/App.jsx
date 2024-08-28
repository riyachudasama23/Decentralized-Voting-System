import React, { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setuserBalance] = useState(null);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setErrorMessage("You have Metamask intalled!!");
          accountChanged([result[0]]);
        });
    } else {
      setErrorMessage("Install Metamask!!");
    }

    const accountChanged = (accountName) => {
      setDefaultAccount(accountName);
    };

    // const getUserBalance = (accountAddress) => {
    //   window.ethereum.request({
    //     method: "eth_getBalance",
    //     params: [String(accountAddress)],
    //   });
    // };
  };
  return (
    <div className="app-container">
      <h1>Metamask Connection</h1>
      <button onClick={connectWallet}> Connect Wallet</button>
      <br />
      <h3>Address : {defaultAccount}</h3>
      {/* <h3>Balance : $</h3> */}
    </div>
  );
}

export default App;
