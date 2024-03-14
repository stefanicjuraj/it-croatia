import { useState } from 'react';
// Hooks
import { useCommunity } from '../hooks/useCommunity';
// Components
import Loading from '../components/Loading';
import Header from '../components/Community/Header';
import { Search } from '../components/Search';
import TableHead from '../components/Community/TableHead';
import { TableBody } from '../components/Community/TableBody';

export default function Communities() {
    const { community, loading, error } = useCommunity();
    const [communitySearch, setCommunitySearch] = useState("");

    const searchCommunity = community.filter((community) => {
        const communityName = community.Community.toLowerCase();
        const search = communitySearch.toLowerCase();
        return communityName.includes(search);
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
                                    onSearchChange={setCommunitySearch}
                                    placeholder="Search communities"
                                />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {searchCommunity.length} results
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="max-w-screen-xl mx-auto overflow-x-auto rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead />
                                <TableBody communities={searchCommunity} />
                            </table>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
