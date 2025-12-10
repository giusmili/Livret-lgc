"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AssiduitCard } from "../../components/AssiduitCard";
import { CompetencesCard } from "../../components/CompetencesCard";
import { DeliverablesCard } from "../../components/DeliverablesCard";
import { EventsCard } from "../../components/EventsCard";
import { Header } from "../../components/Header";
import { ProgressCard } from "../../components/ProgressCard";
import { ProjectsCard } from "../../components/ProjectsCard";
import { Sidebar } from "../../components/Sidebar";

export default function DashboardPage() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("authUser");
    if (session) {
      setHasAccess(true);
    } else {
      router.replace("/login");
    }
    setCheckedAuth(true);
  }, [router]);

  if (!checkedAuth) {
    return (
      <div className="min-h-screen bg-[#F5F6F8] flex items-center justify-center">
        <p className="text-gray-600">Chargement...</p>
      </div>
    );
  }

  if (!hasAccess) return null;

  const studentName = "Giuseppe Militello";
  const profileImage = "/assets/profile-pic.png";

  return (
    <div className="min-h-screen bg-[#F5F6F8]">
      <Header
        studentName={studentName}
        profileImage={profileImage}
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <ProgressCard />
            <CompetencesCard />
            <ProjectsCard />
            <AssiduitCard />
          </div>

          <div className="mb-6 md:mb-8">
            <EventsCard />
          </div>

          <div className="mb-6 md:mb-8">
            <DeliverablesCard />
          </div>

          <footer className="text-center text-gray-500 py-4 md:py-6 text-xs md:text-sm">
            2025 - Livret electronique etudiant - LGC - Tous droits reserves.
          </footer>
        </main>
      </div>
    </div>
  );
}
