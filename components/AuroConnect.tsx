// components/AuroConnect.js

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountAddress, selectAccountAddress } from '../slice';

function AuroConnect() {
  const dispatch = useDispatch();
  const address = useSelector(selectAccountAddress);
  const [network, setNetwork] = useState('');

  useEffect(() => {
    const storedWalletAddress = sessionStorage.getItem('walletAddress');
    const fetchData = async () => {
      try {
        const fetchedAccounts = await window.mina.getAccounts();
        if (storedWalletAddress && fetchedAccounts.length>0) {
          dispatch(setAccountAddress(storedWalletAddress));
        }
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };
    fetchData();
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
      dispatch(setAccountAddress(newAccounts[0]));
      sessionStorage.setItem('walletAddress', newAccounts[0]);
    }
  };

  const initAccount = async () => {
    if (window.mina) {
      const data = await window.mina.requestAccounts().catch((err: any) => err);
      if (!data.message && Array.isArray(data) && data.length > 0) {
        dispatch(setAccountAddress(data[0]));
        sessionStorage.setItem('walletAddress', data[0]);
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
            {address ? address.slice(0,6) + '...' + address.slice(-6): 'CONNECT WALLET'}
        </button>
    </div>
  );
}

export default AuroConnect;
