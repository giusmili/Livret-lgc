export function CompetencesCard() {
  const acquired = 12;
  const total = 20;
  const percentage = (acquired / total) * 100;

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <h3 className="text-[#0B315E] mb-4 md:mb-6">Compétences acquises</h3>
      
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex items-center justify-center">
          <div className="bg-[#1A73E8] text-white px-4 py-2 md:px-6 md:py-3 rounded-xl">
            <span className="text-xl md:text-2xl">{acquired}/{total}</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-gray-600 mb-2 text-sm md:text-base">
            <span>Progression</span>
            <span>{percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#1A73E8] h-2 rounded-full transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}