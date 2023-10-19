// components/AuroConnect.js

import { useState, useEffect } from 'react';

function AuroConnect() {
  const [account, setAccount] = useState('');
  const [network, setNetwork] = useState('');

  useEffect(() => {
    if (window.mina) {
      window.mina.on('accountsChanged', handleNewAccounts);
      window.mina.on('chainChanged', handleChainChange);
    }
  }, []);

  const handleChainChange = (newChain: any) => {
    setNetwork(newChain);
  };

  const handleNewAccounts = (newAccounts: any) => {
    if (Array.isArray(newAccounts) && newAccounts.length > 0) {
      setAccount(newAccounts[0]);
    }
  };

  const initAccount = async () => {
    if (window.mina) {
      const data = await window.mina.requestAccounts().catch(err => err);
      if (!data.message && Array.isArray(data) && data.length > 0) {
        setAccount(data[0]);
      }
    }
  };

  const connectAuroWallet = async () => {
    if (!window.mina) {
      alert("No provider was found. Please install Auro Wallet.");
    } else {
      await initAccount();
    }
  };

  return (
    <div className="mr-6">
        <button 
          onClick={connectAuroWallet} 
          className="text-xs text-gray-200 border p-2 rounded-3xl border-custom-purple font-good-times"
        >
            {account ? account.slice(0,6) + '...' + account.slice(-6): 'CONNECT WALLET'}
        </button>
    </div>
  );
}

export default AuroConnect;
