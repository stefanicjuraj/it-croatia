import { useEffect, useState } from 'react';
// Hooks
import { useWorkplace } from '../hooks/useWorkplace';
// Components
import Loading from '../components/Loading';
import Header from '../components/Workplace/Header';
import { Search } from '../components/Search';
import TableHead from '../components/Workplace/TableHead';
import { TableBody } from '../components/Workplace/TableBody';
import { City } from '../components/Workplace/City';
import { Neighbourhood } from '../components/Workplace/Neighbourhood';
import Footer from '../components/Footer';
import { ScrollToTopComponent } from '../components/ScrollToTop';

export default function Workplaces() {
    const { workplace, loading, error } = useWorkplace();
    const [workplaceSearch, setWorkplaceSearch] = useState("");
    const [selectLocations, setselectLocations] = useState<string[]>([]);
    const [selectNeighbourhood, setSelectNeighbourhood] = useState<string[]>([]);
    const [locations, setLocations] = useState<string[]>([]);
    const [neighbourhood, setNeighbourhood] = useState<string[]>([]);

    useEffect(() => {
        const uniqueLocations = [...new Set(workplace.map(w => w.City))]
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        setLocations(uniqueLocations);

        const uniqueNeighbourhoods = [...new Set(workplace.flatMap(w => w.Neighbourhood))]
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            setNeighbourhood(uniqueNeighbourhoods);
    }, [workplace]);

    const searchPodcast = workplace.filter((workplace) => {
        const workplaceName = workplace.Workplace.toLowerCase();
        const matchesLocation = selectLocations.length === 0 || selectLocations.includes(workplace.City);
        const matchesNeighbourhood = selectNeighbourhood.length === 0 ||
            selectNeighbourhood.some(n => (workplace.Neighbourhood || []).includes(n));
        const matchesSearch = workplaceName.includes(workplaceSearch.toLowerCase());
        return matchesLocation && matchesNeighbourhood && matchesSearch;
    });

    const handleLocationCheckboxInput = (location: any) => {
        setselectLocations(prevLocations =>
            prevLocations.includes(location)
                ? prevLocations.filter(l => l !== location)
                : [...prevLocations, location]
        );
    };

    const handleNeighbourhoodCheckboxInput = (neighbourhood: string) => {
        setSelectNeighbourhood(prevNeighbourhood =>
            prevNeighbourhood.includes(neighbourhood)
                ? prevNeighbourhood.filter(n => n !== neighbourhood)
                : [...prevNeighbourhood, neighbourhood]
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
                            <City
                                locations={locations}
                                selectLocations={selectLocations}
                                checkboxInput={handleLocationCheckboxInput}
                            />
                            <Neighbourhood
                                neighbourhood={neighbourhood}
                                selectNeighbourhood={selectNeighbourhood}
                                checkboxInput={handleNeighbourhoodCheckboxInput}
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
