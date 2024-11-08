// Utils
import { useTheme } from "../../utils/Theme";
// Icons
import placesToWork from "/assets/icons/places-to-work.svg";

export default function Header() {
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    return (
        <header className={`max-w-screen-xl mx-auto mb-16 sm:p-16 px-8 py-12 ${style.backgroundHeader} rounded-3xl text-left ${style.shadowHeader}`}>
            <div className="flex items-center mb-8">
            <div className={`p-2 rounded-lg ${style.backgroundBody} mr-3`}>
                <img src={placesToWork} className="w-9 w-9" alt="Places to work icon" />
            </div>
                <h1 className={`text-4xl font-bold ${style.headingH1} sm:text-6xl`}>
                    Places to Work
                </h1>
            </div>
            <p className={`w-full ${style.text} text-md sm:text-lg sm:w-3/4`}>
                A collection of <span className={`${style.backgroundHeaderText} px-1 py-0.3 rounded-lg`}>places to work</span> {" "} in Croatia. Explore, visit and work in the best coffee shops, bars, and co-working places in Croatia.
            </p>
        </header>
    )
}