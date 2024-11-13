import React, { useState } from 'react';
import logo from'./logomo.png';
import { 
  Home, 
  Clock, 
  User, 
  Plus, 
  CreditCard,
  Search,
  Send,
  QrCode,
  ChevronRight,
  Bell 
} from 'lucide-react';

const QuickWallet = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  
  const transactions = [
    { id: 1, type: 'send', amount: -50000, to: 'Budi Santoso', date: '13 Nov 2024', status: 'success' },
    { id: 2, type: 'receive', amount: 750000, from: 'PT Maju Jaya', date: '12 Nov 2024', status: 'success' },
    { id: 3, type: 'payment', amount: -125000, to: 'PLN', date: '11 Nov 2024', status: 'success' }
  ];

  const quickActions = [
    { id: 1, icon: <Send className="w-6 h-6" />, label: 'Kirim' },
    { id: 2, icon: <Plus className="w-6 h-6" />, label: 'Top Up' },
    { id: 3, icon: <QrCode className="w-6 h-6" />, label: 'Scan' },
    { id: 4, icon: <CreditCard className="w-6 h-6" />, label: 'Bayar' }
  ];

  const services = [
    { id: 1, name: 'Pulsa', icon: '📱' },
    { id: 2, name: 'Listrik', icon: '⚡' },
    { id: 3, name: 'Internet', icon: '🌐' },
    { id: 4, name: 'BPJS', icon: '🏥' },
    { id: 5, name: 'Air', icon: '💧' },
    { id: 6, name: 'Games', icon: '🎮' },
    { id: 7, name: 'Voucher', icon: '🎫' },
    { id: 8, name: 'Lainnya', icon: '➕' }
  ];

  const renderHomeScreen = () => (
    <div className="flex flex-col h-full bg-gray-50 max-w-[450px] mx-auto">
      <div className="bg-blue-600 p-4 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <img src="src/logomo.png" alt="logo" className="rounded-full" />
            <div>
              <h1 className="text-white font-bold">QuickWallet</h1>
              <p className="text-blue-100 text-sm">Hi, Johan!</p>
            </div>
          </div>
          <Bell className="text-white w-6 h-6" />
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 text-sm">Saldo Anda</span>
            <span className="text-blue-600 text-sm font-medium">Lihat Detail</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Rp 2.458.000</h2>
          <div className="flex space-x-2">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
              Points: 1,240
            </span>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
              Cashback: Rp 25,000
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 p-4 bg-white mt-4 mx-4 rounded-xl shadow-sm">
        {quickActions.map(action => (
          <button key={action.id} className="flex flex-col items-center">
            <div className="bg-blue-50 p-3 rounded-full mb-2">
              {action.icon}
            </div>
            <span className="text-xs text-gray-600">{action.label}</span>
          </button>
        ))}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Layanan</h3>
        <div className="grid grid-cols-4 gap-4">
          {services.map(service => (
            <button key={service.id} className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl shadow-sm mb-2 w-12 h-12 flex items-center justify-center">
                <span className="text-xl">{service.icon}</span>
              </div>
              <span className="text-xs text-gray-600">{service.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white mt-4 p-4 rounded-t-3xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Transaksi Terakhir</h3>
          <button className="text-blue-600 text-sm">Lihat Semua</button>
        </div>
        <div className="space-y-4">
          {transactions.map(tx => (
            <div key={tx.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  tx.type === 'send' ? 'bg-red-100' : 
                  tx.type === 'receive' ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <Send className={`w-5 h-5 ${
                    tx.type === 'send' ? 'text-red-600' :
                    tx.type === 'receive' ? 'text-green-600' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <p className="font-medium">{tx.to || tx.from}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>
              <span className={`font-semibold ${
                tx.amount < 0 ? 'text-red-600' : 'text-green-600'
              }`}>
                Rp {Math.abs(tx.amount).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border-t flex justify-between p-4">
        {['home', 'history', 'payment', 'profile'].map((screen) => (
          <button
            key={screen}
            onClick={() => setActiveScreen(screen)}
            className={`flex flex-col items-center ${
              activeScreen === screen ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            {screen === 'home' && <Home className="w-6 h-6" />}
            {screen === 'history' && <Clock className="w-6 h-6" />}
            {screen === 'payment' && <QrCode className="w-6 h-6" />}
            {screen === 'profile' && <User className="w-6 h-6" />}
            <span className="text-xs mt-1">{screen.charAt(0).toUpperCase() + screen.slice(1)}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gray-50">
      {activeScreen === 'home' && renderHomeScreen()}
    </div>
  );
};

export default QuickWallet;
