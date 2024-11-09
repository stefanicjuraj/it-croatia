// Utils
import { useTheme } from "../../utils/Theme";
// Icons
import company from "/assets/icons/company.svg";

export default function Header() {
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    return (
        <header className={`max-w-screen-xl mx-auto mb-16 sm:p-16 px-8 py-12 ${style.backgroundHeader} rounded-3xl text-left ${style.shadowHeader}`}>
            <div className="flex items-center mb-8">
                <div className={`p-2 rounded-lg ${style.backgroundBody} mr-3`}>
                    <img src={company} className="w-9 w-9" alt="Company icon" />
                </div>
                <h1 className={`text-4xl font-bold ${style.headingH1} sm:text-6xl`}>
                    Companies
                </h1>
            </div>
            <p className={`w-full ${style.text} text-md sm:text-lg sm:w-3/4`}>
                A collection of IT {" "}
                <span className={`${style.backgroundHeaderText} px-1 py-0.3 rounded-lg`}>companies</span>, {" "}
                <span className={`${style.backgroundHeaderText} px-1 py-0.3 rounded-lg`}>agencies</span>,{" "} and {" "}
                <span className={`${style.backgroundHeaderText} px-1 py-0.3 rounded-lg`}>consultancies</span> {" "}
                conducting business operations, providing services, or offering consultancy in Croatia.
            </p>
        </header>
    )
}
