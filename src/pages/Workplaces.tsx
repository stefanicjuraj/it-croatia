import { useEffect, useState } from 'react';
// Hooks
import { useWorkplace } from '../hooks/useWorkplace';
// Components
import Loading from '../components/Loading';
import Header from '../components/Workplace/Header';
import { Search } from '../components/Search';
import TableHead from '../components/Workplace/TableHead';
import { TableBody } from '../components/Workplace/TableBody';
import { Location } from '../components/Company/Location';
import Footer from '../components/Footer';
import { ScrollToTopComponent } from '../components/ScrollToTop';

export default function Workplaces() {
    const { workplace, loading, error } = useWorkplace();
    const [workplaceSearch, setWorkplaceSearch] = useState("");
    const [selectLocations, setselectLocations] = useState<string[]>([]);
    const [locations, setLocations] = useState<string[]>([]);

    useEffect(() => {
        const locations = [...new Set(workplace.map(workplace => workplace.City))]
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        setLocations(locations);
    }, [locations]);

    const searchPodcast = workplace.filter((workplace) => {
        const workplaceName = workplace.Workplace.toLowerCase();
        const workplaceLocation = selectLocations.length === 0 || selectLocations.includes(workplace.City);
        const search = workplaceSearch.toLowerCase();
        return workplaceName.includes(search) && workplaceLocation;
    });

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
                                    onSearchChange={setWorkplaceSearch}
                                    placeholder="Search places to work"
                                />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {searchPodcast.length} results
                                </p>
                            </div>
                            <Location
                                locations={locations}
                                selectLocations={selectLocations}
                                checkboxInput={handleLocationCheckboxInput}
                            />
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="mx-auto overflow-x-auto max-w-screen-xl rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead />
                                <TableBody workplaces={searchPodcast} />
                            </table>
                        </div>
                    </section>
                </>
            )}

            <Footer />

            <ScrollToTopComponent />

        </>
    )
}
