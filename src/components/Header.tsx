import { Bell, Settings, Menu } from 'lucide-react';

interface HeaderProps {
  studentName: string;
  profileImage: string;
  onMenuClick: () => void;
}

export function Header({ studentName, profileImage, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            type="button"
            aria-label="Ouvrir le menu latéral"
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors mr-2"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1A73E8] rounded-lg flex items-center justify-center">
            <span className="text-white text-sm md:text-base">LE</span>
          </div>
          <span className="text-[#0B315E] text-sm md:text-base hidden sm:block">Livret Électronique</span>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
          <button
            type="button"
            aria-label="Paramètres"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block"
          >
            <Settings className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-gray-200">
            <span className="text-gray-700 text-sm md:text-base hidden md:block">{studentName}</span>
            <img 
              src={profileImage} 
              alt={studentName}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
