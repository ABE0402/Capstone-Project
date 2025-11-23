import React from 'react';
import { AppView } from '../types';
import HomeIcon from './icons/HomeIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import ChatBubbleIcon from './icons/ChatBubbleIcon';
import BookIcon from './icons/BookIcon';

interface NavbarProps {
  activeView: AppView;
  setActiveView: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'timetable', label: '홈', icon: HomeIcon },
    { id: 'major', label: '전공', icon: ChartBarIcon },
    { id: 'liberal', label: '교양', icon: BookIcon },
    { id: 'chatbot', label: 'AI 채팅', icon: ChatBubbleIcon },
  ] as const;

  return (
    <>
      {/* Top Header for mobile app feel */}
      <header className="bg-gray-50 dark:bg-gray-900 fixed top-0 left-0 right-0 z-40 px-4 py-4 flex justify-center items-center">
         <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100">Uni-Planner</h1>
      </header>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pb-safe z-50">
        <div className="flex justify-around items-center h-16 max-w-3xl mx-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                activeView === item.id
                  ? 'text-blue-500 dark:text-blue-400'
                  : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <item.icon 
                className={`h-6 w-6 transition-transform duration-200 ${
                    activeView === item.id ? 'scale-110' : ''
                }`} 
                strokeWidth={activeView === item.id ? 2.5 : 2}
              />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;