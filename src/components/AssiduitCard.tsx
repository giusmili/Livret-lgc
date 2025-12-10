import { LineChart, Line, ResponsiveContainer } from 'recharts';

export function AssiduitCard() {
  const data = [
    { value: 88 },
    { value: 90 },
    { value: 85 },
    { value: 95 },
    { value: 92 },
    { value: 89 },
    { value: 92 },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <h3 className="text-[#0B315E] mb-4 md:mb-6">Assiduité</h3>
      
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="text-center">
          <p className="text-gray-600 mb-2 text-sm md:text-base">Présence</p>
          <p className="text-[#1A73E8] text-2xl md:text-3xl">92%</p>
        </div>
        
        <div className="h-12 md:h-16">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#1A73E8" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}