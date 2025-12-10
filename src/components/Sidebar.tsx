import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  Folder, 
  BookMarked, 
  MessageSquare, 
  ClipboardCheck,
  Settings,
  X
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BookOpen, label: 'Parcours & Unités', active: false },
  { icon: Award, label: 'Compétences', active: false },
  { icon: Folder, label: 'Projets & Livrables', active: false },
  { icon: BookMarked, label: 'Carnet de bord', active: false },
  { icon: MessageSquare, label: 'Entretiens', active: false },
  { icon: ClipboardCheck, label: 'Évaluations', active: false },
  { icon: Settings, label: 'Paramètres', active: false },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r border-gray-200 min-h-screen p-4
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button for mobile */}
        <button
          type="button"
          aria-label="Fermer le menu latéral"
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        
        <nav className="space-y-1 mt-12 lg:mt-0">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                onClick={onClose}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  item.active
                    ? 'bg-[#1A73E8] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm md:text-base">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
