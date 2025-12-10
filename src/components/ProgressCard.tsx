export function ProgressCard() {
  const percentage = 75;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <h3 className="text-[#0B315E] mb-4 md:mb-6">Progression générale</h3>
      
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <svg className="transform -rotate-90 w-24 h-24 md:w-32 md:h-32">
            <circle
              cx="48"
              cy="48"
              r="35"
              stroke="#F5F6F8"
              strokeWidth="6"
              fill="none"
              className="md:hidden"
            />
            <circle
              cx="48"
              cy="48"
              r="35"
              stroke="#1A73E8"
              strokeWidth="6"
              fill="none"
              strokeDasharray={2 * Math.PI * 35}
              strokeDashoffset={2 * Math.PI * 35 - (percentage / 100) * 2 * Math.PI * 35}
              strokeLinecap="round"
              className="md:hidden"
            />
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="#F5F6F8"
              strokeWidth="8"
              fill="none"
              className="hidden md:block"
            />
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="#1A73E8"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="hidden md:block"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#0B315E] text-xl md:text-2xl">{percentage}%</span>
          </div>
        </div>
        
        <p className="text-gray-600 mt-3 md:mt-4 text-sm md:text-base">Parcours complété</p>
      </div>
    </div>
  );
}