export function ProjectsCard() {
  const projects = [
    { name: 'Projet Web', status: 'En cours', color: '#1A73E8' },
    { name: 'API Node', status: 'À rendre', color: '#F59E0B' },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <h3 className="text-[#0B315E] mb-4 md:mb-6">Projets actifs</h3>
      
      <div className="space-y-2 md:space-y-3">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center justify-between p-2 md:p-3 bg-[#F5F6F8] rounded-xl">
            <span className="text-gray-700 text-sm md:text-base">{project.name}</span>
            <span 
              className="px-2 py-1 md:px-3 md:py-1 rounded-lg text-white text-xs md:text-sm whitespace-nowrap"
              style={{ backgroundColor: project.color }}
            >
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}