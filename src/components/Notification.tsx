// Utils
import { useTheme } from "../utils/Theme";
// Icons
import notification from "/assets/icons/notification.svg";

export default function Notification() {
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    return (
        <>
            <button aria-expanded="false" data-dropdown-toggle="notification-dropdown" type="button" className={`relative inline-flex items-center p-2 text-sm font-medium text-center text-white ${style.background} rounded-full sm:mr-7 mr-4`}>
                <img src={notification} className="w-5 h-5" alt="Notification icon" />
                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-1 -end-1">
                    3
                </div>
            </button>
            <div className={`z-50 hidden my-4 sm:w-72 w-64 list-none ${style.background} ${style.text} rounded-xl ${style.shadowHeader}`} id="notification-dropdown">
                <div className={`block px-4 py-3 text-center rounded-t-lg ${style.backgroundFilters}`}>
                    <p className={`text-lg ${style.headingH1}`}> What's new?</p>
                </div>
                <div className="px-4 py-4">
                    <p className="text-sm">
                        • Search remote-friendly companies by applying the remote location filter.
                    </p>
                    <p className={`text-sm p-3 mx-2 my-2 ${style.backgroundFilters} rounded-lg`}>
                        /companies &rarr; Location &rarr; Remote
                    </p>
                </div>
                <div className="px-4">
                    <p className="text-sm">
                        • Toggle between the conferences table and card view modes.
                    </p>
                    <p className={`text-sm p-3 mx-2 my-2 ${style.backgroundFilters} rounded-lg`}>
                        /conferences &rarr; Toggle view
                    </p>
                </div>
                <div className="px-4 py-4">
                    <p className="text-sm">
                        • Filter companies in blockchain services industry.
                    </p>
                    <p className={`text-sm p-3 mx-2 my-2 ${style.backgroundFilters} rounded-xl`}>
                        /companies &rarr; Industry &rarr; Blockchain Services
                    </p>
                </div>
            </div >
        </>
    )
}