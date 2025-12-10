export function DeliverablesCard() {
  const deliverables = [
    { 
      name: 'LGC', 
      project: 'Projet Web', 
      status: 'Validé', 
      date: '25/01',
      statusColor: '#10B981'
    },
    { 
      name: 'API Express', 
      project: 'Backend', 
      status: 'En révision', 
      date: '22/01',
      statusColor: '#F59E0B'
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <h3 className="text-[#0B315E] mb-4 md:mb-6">Derniers livrables déposés</h3>
      
      {/* Desktop table view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-600">Nom du livrable</th>
              <th className="text-left py-3 px-4 text-gray-600">Projet</th>
              <th className="text-left py-3 px-4 text-gray-600">Statut</th>
              <th className="text-left py-3 px-4 text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {deliverables.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-[#F5F6F8] transition-colors">
                <td className="py-4 px-4 text-[#0B315E]">{item.name}</td>
                <td className="py-4 px-4 text-gray-600">{item.project}</td>
                <td className="py-4 px-4">
                  <span 
                    className="px-3 py-1 rounded-lg text-white text-sm"
                    style={{ backgroundColor: item.statusColor }}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile card view */}
      <div className="md:hidden space-y-3">
        {deliverables.map((item, index) => (
          <div key={index} className="p-4 bg-[#F5F6F8] rounded-xl space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-[#0B315E]">{item.name}</h4>
              <span 
                className="px-2 py-1 rounded-lg text-white text-xs whitespace-nowrap"
                style={{ backgroundColor: item.statusColor }}
              >
                {item.status}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{item.project}</span>
              <span className="text-gray-600">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}