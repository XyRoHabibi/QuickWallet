// src/components/BalanceDetail.js
import React from 'react';
import BalanceDetail from './components/BalanceDetail';

const BalanceDetail = ({ balance }) => (
   <div className="p-4 bg-white">
      <h2 className="text-xl font-bold">Saldo Tersedia</h2>
      <p className="text-2xl font-semibold text-green-600">Rp {balance.toLocaleString()}</p>
      <div className="mt-4">
         <h3 className="text-lg font-semibold">Detail Cashback dan Points</h3>
         <p>Cashback: Rp 25,000</p>
         <p>Points: 1,240</p>
      </div>
   </div>
);

export default BalanceDetail;
