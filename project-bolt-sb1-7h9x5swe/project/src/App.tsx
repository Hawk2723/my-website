import React from 'react';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center">
      <div className="text-center">
        <Sparkles className="w-12 h-12 mx-auto mb-6 text-purple-400" />
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-tight mb-2">
          ARDA
        </h1>
        <h1 className="text-8xl font-black text-gray-800 tracking-tight">
          DOGAN
        </h1>
      </div>
    </div>
  );
}

export default App;