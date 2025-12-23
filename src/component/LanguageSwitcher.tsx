import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex text-xs border rounded-md overflow-hidden bg-white dark:bg-slate-800 dark:border-slate-600">
            <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 ${
                    language === "es"
                        ? "bg-slate-900 text-white"
                        : "text-slate-900 bg-white dark:bg-slate-800 dark:text-slate-100"
                }`}
            >
                ES
            </button>
            <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 ${
                    language === "en"
                        ? "bg-slate-900 text-white"
                        : "text-slate-900 bg-white dark:bg-slate-800 dark:text-slate-100"
                }`}
            >
                EN
            </button>
        </div>
    );
}