import { useState } from 'react';
// Hooks
import { useConference } from '../hooks/useConference';
// Components
import Loading from '../components/Loading';
import { Search } from '../components/Search';
import Header from '../components/Conference/Header';
import TableHead from '../components/Conference/TableHead';
import { TableBody } from '../components/Conference/TableBody';

export default function Conferences() {
    const { conferences, loading, error } = useConference();
    const [conferenceSearch, setConferenceSearch] = useState("");

    const searchConference = conferences.filter((conferences) => {
        const conferenceName = conferences.Conference.toLowerCase();
        const search = conferenceSearch.toLowerCase();
        return conferenceName.includes(search);
    });

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
                    <section className="max-w-screen-xl px-4 mx-auto sm:px-0 relative animation glow delay-1">
                        <div className="flex items-center mb-8 flex-wrap sm:flex-nowrap">
                            <div className="mr-4 relative sm:w-96 w-80 text-white">
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
                        <div className="max-w-screen-xl mx-auto overflow-x-auto rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead />
                                <TableBody conferences={searchConference} />
                            </table>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
