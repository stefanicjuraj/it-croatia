// Hooks
import { useConference } from '../../hooks/useConference';
// Utils
import { useTheme } from '../../utils/Theme';
// Icons
import conferencesImage from '/assets/icons/conference.svg';
import community from '/assets/icons/community.svg';
import location from '/assets/icons/location.svg';
import calendar from '/assets/icons/calendar.svg';

export const TableBodyCard = ({ conferences }: { conferences: Array<object> }) => {
    const { countdown } = useConference();
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    return (
        <section className="max-w-screen-xl px-4 py-4 mx-auto space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0" >
            {conferences.map((conference, index) => (
                <div key={index} className={`${style.background} sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300`}>
                    <a href={(conference as { Ticket: string })["Ticket"]}
                        target="_blank" rel="noopener noreferrer"
                    >
                        <div className={`flex justify-center items-center mb-4 w-16 h-16 rounded-full ${style.backgroundBody}`}>
                            <img src={conferencesImage} alt="Conference ticket icon" className="w-8 h-8" />
                        </div>
                        <h1 className={`mb-4 text-2xl font-bold ${style.text}`}>
                            {(conference as { Conference: string, Website: string }).Conference}
                        </h1>
                        <p className={`${style.text} mb-8`}>
                            {(conference as { Topic: Array<string> }).Topic.map((topic, index) => (
                                <span key={index} className={`px-3 py-2 text-xs whitespace-nowrap mr-1 ${style.backgroundIndustry} ${style.industryText} rounded-lg`}>
                                    {topic}
                                </span>
                            ))}
                        </p>
                        <p className={`${style.text} mb-4 flex text-lg`}>
                            <img src={community} className="h-7 w-7" />
                            <span className={`${style.backgroundFilters} text-sm ml-2 px-2 py-1 rounded-lg`}>
                                {(conference as { Organizer: string })["Organizer"]}
                            </span>
                            <img src={location} className="ml-3 h-7 w-7" />
                            <span className={`${style.backgroundFilters} text-sm ml-1 px-2 py-1 rounded-lg`}>{(conference as { Location: string }).Location}</span>
                        </p>
                        <p className={`${style.text} mb-4 flex text-lg`}>
                            <img src={calendar} className="h-7 w-7" />
                            <span className={`${style.backgroundFilters} text-sm ml-2 px-2 py-1 rounded-lg`}>
                                {(conference as { startDate: string, endDate: string }).startDate}
                            </span>
                            <span className="mx-1">-</span>
                            <span className={`${style.backgroundFilters} text-sm px-2 py-1 rounded-lg`}>
                                {(conference as { endDate: string }).endDate}
                            </span>
                        </p>
                        <p className={`mx-auto mb-2 ${style.text} text-sm text-center inline-flex ${style.backgroundFilters} px-5 py-2 rounded-lg`}>
                            <span className="flex items-center mx-auto">
                                <span className="flex w-2 h-2 mr-2 bg-indigo-300 rounded-lg animate-pulse"></span>
                            </span>
                            {countdown((conference as { startDate: string }).startDate)}
                        </p>
                    </a>
                </div>
            ))
            }
        </section >
    )
}
