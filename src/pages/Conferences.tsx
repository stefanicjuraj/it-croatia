import { useEffect, useMemo, useState } from 'react';
// Hooks
import { useConference } from '../hooks/useConference';
// Components
import Loading from '../components/Loading';
import Header from '../components/Conference/Header';
import { Search } from '../components/Search';
import { FilterLocation } from '../components/Conference/FilterLocation';
import TableHead from '../components/Conference/TableHead';
import { TableBody } from '../components/Conference/TableBody';
import Footer from '../components/Footer';
import { ScrollToTopComponent } from '../components/ScrollToTop';
// Utils
import { useTheme } from '../utils/Theme';

export default function Conferences() {
    const { conferences, loading, error, countdown } = useConference();
    const [conferenceSearch, setConferenceSearch] = useState("");
    const [selectLocations, setselectLocations] = useState<string[]>([]);
    const [locations, setLocations] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState('');
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    useEffect(() => {
        const locations = [...new Set(conferences.map(conferences => conferences.Location))]
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        setLocations(locations);
    }, [conferences]);

    const searchConference = conferences.filter((conferences) => {
        const conferenceName = conferences.Conference.toLowerCase();
        const conferenceLocation = selectLocations.length === 0 || selectLocations.includes(conferences.Location);
        const search = conferenceSearch.toLowerCase();
        return conferenceName.includes(search) && conferenceLocation;
    });

    const toggleSortDates = () => {
        setSortOrder(prevSortOrder => prevSortOrder === 'asc' ? 'desc' : 'asc');
    };

    const getDaysLeft = (startDate: string) => {
        const result = countdown(startDate);
        const daysMatch = result.match(/\d+/);
        return daysMatch ? parseInt(daysMatch[0], 10) : 0;
    };

    const sortConferences = useMemo(() => {
        return conferences
            .filter(conference => {
                const conferenceName = conference.Conference.toLowerCase();
                const conferenceLocation = selectLocations.length === 0 || selectLocations.includes(conference.Location);
                const search = conferenceSearch.toLowerCase();
                return conferenceName.includes(search) && conferenceLocation;
            })
            .sort((a, b) => {
                const daysLeftA = getDaysLeft(a.startDate);
                const daysLeftB = getDaysLeft(b.startDate);
                if (sortOrder === 'asc') {
                    return daysLeftA - daysLeftB;
                } else if (sortOrder === 'desc') {
                    return daysLeftB - daysLeftA;
                }
                return 0;
            });
    }, [conferences, conferenceSearch, sortOrder, selectLocations]);

    const handleLocationCheckboxInput = (location: string) => {
        setselectLocations(prevLocations =>
            prevLocations.includes(location)
                ? prevLocations.filter(l => l !== location)
                : [...prevLocations, location]
        );
    };

    if (error) {
        return <div>Error</div>;
    }

    return (
        <div className={`${style.backgroundBody}`}>
            <div className="pt-40">
                <Header />
            </div>
            {loading ? (
                <Loading />
            ) : (
                <div className={`${style.backgroundBody}`}>
                    <section className="relative px-4 mx-auto max-w-screen-xl sm:px-0 animation glow delay-1">
                        <div className="flex flex-wrap items-center mb-8 sm:flex-nowrap">
                            <div className={`relative mr-4 ${style.text} sm:w-96 w-80`}>
                                <Search
                                    onSearchChange={setConferenceSearch}
                                    placeholder="Search conferences" />
                                <p className={`absolute right-2 bottom-2 ${style.backgroundFilters} rounded-full px-5 py-2`}>
                                    {searchConference.length} results
                                </p>
                            </div>
                            <FilterLocation
                                locations={locations}
                                selectLocations={selectLocations}
                                checkboxInput={handleLocationCheckboxInput}
                            />
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="mx-auto overflow-x-auto max-w-screen-xl rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead sortDates={toggleSortDates} />
                                <TableBody conferences={sortConferences} />
                            </table>
                        </div>
                    </section>
                </div>
            )}
            <Footer />
            <ScrollToTopComponent />
        </div>
    )
}
