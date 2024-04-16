import { useEffect, useState } from 'react';
// Hooks
import { useCommunity } from '../hooks/useCommunity';
// Components
import Loading from '../components/Loading';
import Header from '../components/Community/Header';
import { Search } from '../components/Search';
import TableHead from '../components/Community/TableHead';
import { TableBody } from '../components/Community/TableBody';
import { Platform } from '../components/Community/Platform';
import Footer from '../components/Footer';

export default function Communities() {
    const { community, loading, error } = useCommunity();
    const [communitySearch, setCommunitySearch] = useState("");
    const [selectPlatforms, setSelectPlatforms] = useState<string[]>([]);
    const [platforms, setPlatforms] = useState<string[]>([]);

    useEffect(() => {
        const platforms = [...new Set(community.map(community => community.Platform))]
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        setPlatforms(platforms);
    }, [community]);

    const searchCommunity = community.filter((community) => {
        const communityName = community.Community.toLowerCase();
        const communityPlatform = selectPlatforms.length === 0 || selectPlatforms.includes(community.Platform);
        const search = communitySearch.toLowerCase();
        return communityName.includes(search) && communityPlatform;
    });

    const handlePlatformCheckboxInput = (location: string) => {
        setSelectPlatforms(prevPlatforms =>
            prevPlatforms.includes(location)
                ? prevPlatforms.filter(l => l !== location)
                : [...prevPlatforms, location]
        );
    };

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
                                    onSearchChange={setCommunitySearch}
                                    placeholder="Search communities"
                                />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {searchCommunity.length} results
                                </p>
                            </div>
                            <Platform
                                platform={platforms}
                                selectPlatforms={selectPlatforms}
                                checkboxInput={handlePlatformCheckboxInput}
                            />
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="mx-auto overflow-x-auto max-w-screen-xl rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead />
                                <TableBody communities={searchCommunity} />
                            </table>
                        </div>
                    </section>
                </>
            )}

            <Footer />
        </>
    )
}
