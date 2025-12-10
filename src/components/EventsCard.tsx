import { Calendar } from 'lucide-react';

export function EventsCard() {
  const events = [
    { date: '30 Jan', title: 'Soutenance de projet' },
    { date: '02 Fév', title: 'Entretien pédagogique' },
    { date: '10 Fév', title: 'Examen blanc' },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <h3 className="text-[#0B315E] mb-4 md:mb-6">Événements à venir</h3>
      
      <div className="space-y-2 md:space-y-3">
        {events.map((event, index) => (
          <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#F5F6F8] rounded-xl hover:bg-gray-200 transition-colors">
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#1A73E8] rounded-xl flex-shrink-0">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-500 text-xs md:text-sm">{event.date}</p>
              <p className="text-[#0B315E] text-sm md:text-base">{event.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}