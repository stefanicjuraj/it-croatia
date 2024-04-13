import { useState } from 'react';
// Hooks
import { usePodcast } from '../hooks/usePodcast';
// Components
import Loading from '../components/Loading';
import Header from '../components/Podcast/Header';
import { Search } from '../components/Search';
import TableHead from '../components/Podcast/TableHead';
import { TableBody } from '../components/Podcast/TableBody';
import Footer from '../components/Footer';

export default function Podcasts() {
    const { podcast, loading, error } = usePodcast();
    const [podcastSearch, setPodcastSearch] = useState("");

    const searchPodcast = podcast?.filter((podcast) => {
        const podcastName = podcast?.Podcast?.toLowerCase();
        const search = podcastSearch.toLowerCase();
        return podcastName?.includes(search);
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
                    <section className="relative px-4 mx-auto max-w-screen-xl sm:px-0 animation glow delay-1">
                        <div className="flex flex-wrap items-center mb-8 sm:flex-nowrap">
                            <div className="relative mr-4 text-white sm:w-96 w-80">
                                <Search
                                    onSearchChange={setPodcastSearch}
                                    placeholder="Search podcasts"
                                />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {searchPodcast.length} results
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="mx-auto overflow-x-auto max-w-screen-xl rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead />
                                <TableBody podcasts={searchPodcast} />
                            </table>
                        </div>
                    </section>
                </>
            )}

            <Footer />

        </>
    )
}
