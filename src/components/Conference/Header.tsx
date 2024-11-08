// Utils
import { useTheme } from "../../utils/Theme";
// Icons
import conference from "/assets/icons/conference.svg";

export default function Header() {
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    return (
        <header className={`max-w-screen-xl mx-auto mb-16 sm:p-16 px-8 py-12 ${style.backgroundHeader} rounded-3xl text-left ${style.shadowHeader}`}>
            <div className="flex items-center mb-8">
                <div className={`p-2 rounded-lg ${style.backgroundBody} mr-3`}>
                    <img src={conference} className="w-9 w-9" alt="Conference icon" />
                </div>
                <h1 className={`text-4xl font-bold ${style.headingH1} sm:text-6xl`}>
                    Conferences
                </h1>
            </div>
            <p className={`w-full ${style.text} text-md sm:text-lg sm:w-3/4`}>
                A collection of IT <span className={`${style.backgroundHeaderText} px-1 py-0.3 rounded-lg`}>conferences</span> in Croatia. Attend conferences and presentations with industry knowledge professionals and enthusiasts.
            </p>
        </header>
    )
}