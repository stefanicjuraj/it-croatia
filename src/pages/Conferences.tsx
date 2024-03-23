import { useMemo, useState } from 'react';
// Hooks
import { useConference } from '../hooks/useConference';
// Components
import Loading from '../components/Loading';
import { Search } from '../components/Search';
import Header from '../components/Conference/Header';
import TableHead from '../components/Conference/TableHead';
import { TableBody } from '../components/Conference/TableBody';

export default function Conferences() {
    const { conferences, loading, error, countdown } = useConference();
    const [conferenceSearch, setConferenceSearch] = useState("");
    const [sortOrder, setSortOrder] = useState('');

    const searchConference = conferences.filter((conferences) => {
        const conferenceName = conferences.Conference.toLowerCase();
        const search = conferenceSearch.toLowerCase();
        return conferenceName.includes(search);
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
        return conferences.filter(conference => {
            const conferenceName = conference.Conference.toLowerCase();
            const search = conferenceSearch.toLowerCase();
            return conferenceName.includes(search);
        }).sort((a, b) => {
            const daysLeftA = getDaysLeft(a.startDate);
            const daysLeftB = getDaysLeft(b.startDate);
            if (sortOrder === 'asc') {
                return daysLeftA - daysLeftB;
            } else if (sortOrder === 'desc') {
                return daysLeftB - daysLeftA;
            }
            return 0;
        });
    }, [conferences, conferenceSearch, sortOrder]); // eslint-disable-line

    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            <Header />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <section className="relative px-4 mx-auto max-w-screen-xl sm:px-0 animation glow delay-1">
                        <div className="flex flex-wrap items-center mb-8 sm:flex-nowrap">
                            <div className="relative mr-4 text-white sm:w-96 w-80">
                                <Search
                                    onSearchChange={setConferenceSearch}
                                    placeholder="Search conferences" />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {searchConference.length} results
                                </p>
                            </div>
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
                </>
            )}
        </>
    )
}
