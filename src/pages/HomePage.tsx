import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const { user, logout } = useAuth();
    const { t } = useLanguage();
    const navigate = useNavigate();

    const name = user?.name ?? "Usuario";

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="space-y-6">
            {/* Sección de Bienvenida */}
            <section className="space-y-2">
                <h2 className="text-2xl font-semibold">
                    {t("homeWelcome")} <span className="font-bold">{name}</span>
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                    {t("homeDescription")}
                </p>
            </section>

            <section className="grid gap-4 md:grid-cols-3 text-sm">
                <article
                    className="p-4 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-600">
                    <h3 className="font-semibold mb-1">Listado de alumnos</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                        Consulta y gestiona la información básica de tus alumnos.
                    </p>
                    <button
                        className="px-3 py-1 rounded-md bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-700">
                        Ir al listado
                    </button>
                </article>

                <article
                    className="p-4 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-600">
                    <h3 className="font-semibold mb-1">Asistencia</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                        Marca la asistencia diaria de los grupos.
                    </p>
                    <button className="px-3 py-1 rounded-md bg-sky-600 text-white text-xs font-medium hover:bg-sky-700">
                        Abrir asistencia
                    </button>
                </article>

                <article
                    className="p-4 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-600">
                    <h3 className="font-semibold mb-1">Configuración</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                        Ajusta opciones de idioma, tema y perfil.
                    </p>
                    <button
                        className="px-3 py-1 rounded-md bg-slate-700 text-white text-xs font-medium hover:bg-slate-800">
                        Ver configuración
                    </button>
                </article>
            </section>

            <section className="flex justify-end">
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700"
                >
                    {t("logoutButton")}
                </button>
            </section>
        </div>
    );
}