"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, BarChart3, Lock, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(true);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("authUser");
    if (session) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!identifier.trim() || !password.trim()) {
      setError("Merci de renseigner l'identifiant et le mot de passe.");
      return;
    }

    setIsSubmitting(true);

    const isValid = identifier === "admin" && password === "12345";
    if (!isValid) {
      setError("Identifiant ou mot de passe invalide.");
      setIsSubmitting(false);
      return;
    }

    localStorage.setItem(
      "authUser",
      JSON.stringify({ login: "admin", remember: rememberMe })
    );

    // Laisse le spinner visible pour confirmer la prise en compte, puis redirige
    setTimeout(() => router.replace("/dashboard"), 600);
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-full"
        style={{ maxWidth: "1100px" }}
      >
        <h1 className="text-center text-2xl font-semibold text-[#0B315E] mb-6">
          <span role="img" aria-label="Acces securise">
            🔒
          </span>LGC - livret - connexion{" "}
          
        </h1>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1A73E8] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm md:text-base">LGC</span>
            </div>
            <div>
              <p className="text-[#0B315E] text-xl">Livret electronique</p>
              <p className="text-gray-600 text-sm">Acces securise au dashboard</p>
            </div>
          </div>

          <Link href="/" className="hidden sm:block text-[#1A73E8] text-sm">
            <span className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour au dashboard
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-[#F5F6F8] rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <Lock className="w-5 h-5 text-[#1A73E8]" />
              </div>
              <div>
                <h3 className="text-[#0B315E]">Connexion securisee</h3>
                <p className="text-gray-600 text-sm">
                  Accedez au suivi, aux livrables et aux evenements.
                </p>
              </div>
            </div>

            <div className="space-y-3 md:space-y-3">
              <div className="bg-white p-3 rounded-xl flex items-start gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <ShieldCheck className="w-5 h-5 text-[#1A73E8]" />
                <div>
                  <p className="text-[#0B315E]">Suivi individualise</p>
                  <p className="text-gray-600 text-sm">KPI, assiduite et parcours a jour.</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl flex items-start gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <BarChart3 className="w-5 h-5 text-[#1A73E8]" />
                <div>
                  <p className="text-[#0B315E]">Projets et livrables</p>
                  <p className="text-gray-600 text-sm">Depose rapide et suivi des validations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="text-[#0B315E]">
                  Identifiant
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Nom d'utilisateur"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full mt-3 px-3 py-3 rounded-xl bg-[#F5F6F8]"
                  style={{ border: "1px solid #E5E7EB" }}
                />
              </div>

              <div>
                <label htmlFor="password" className="text-[#0B315E]">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-3 px-3 py-3 rounded-xl bg-[#F5F6F8]"
                  style={{ border: "1px solid #E5E7EB" }}
                />
              </div>

              {error ? (
                <p className="text-red-600 text-sm -mb-1">{error}</p>
              ) : null}

              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center text-gray-600 text-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-2"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  Se souvenir de moi
                </label>

                <button type="button" className="text-[#1A73E8] text-sm">
                  Mot de passe oublie ?
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#1A73E8] text-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-colors"
                style={{
                  opacity: isSubmitting ? 0.85 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span className="spinner spinner-light" aria-hidden="true" />
                      <span>Connexion...</span>
                    </>
                  ) : (
                    <span>Se connecter</span>
                  )}
                </span>
              </button>

              <p className="text-center text-gray-600 text-sm">
                Nouveau sur la plateforme ?{" "}
                <Link href="#" className="text-[#1A73E8]">
                  Demander un acces
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
