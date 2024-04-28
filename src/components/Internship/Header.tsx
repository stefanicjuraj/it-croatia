// Utils
import { useTheme } from "../../utils/Theme";
// Icons
import internship from "/assets/icons/internship.svg";

export default function Header() {
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    return (
        <header className={`max-w-screen-xl mx-auto mb-16 sm:p-16 px-8 py-12 ${style.backgroundHeader} rounded-3xl text-left ${style.shadowHeader}`}>
            <div className="flex items-center mb-8">
                <img src={internship} className="mr-3 sm:w-12 w-9" alt="Internship icon" />
                <h1 className={`text-4xl font-bold ${style.headingH1} sm:text-6xl`}>
                    Internships
                </h1>
            </div>
            <p className={`w-full ${style.text} text-md sm:text-lg sm:w-3/4`}>
                A collection of IT <span className={`${style.backgroundHeaderText} px-1 py-0.3 rounded-lg`}>internships</span> {" "} and {" "}
                <span className={`${style.backgroundHeaderText} px-1 py-0.3 rounded-lg`}>career opportunities</span>. {" "} Start your career and enhance your professional knowledge by applying to internship programs.
            </p>
        </header>
    )
}
