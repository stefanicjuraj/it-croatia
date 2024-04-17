import { useEffect, useState } from 'react';
// Hooks
import { useWorkplace } from '../hooks/useWorkplace';
// Components
import Loading from '../components/Loading';
import Header from '../components/Workplace/Header';
import { Search } from '../components/Search';
import { FilterCity } from '../components/Workplace/FilterCity';
import { FilterArea } from '../components/Workplace/FilterArea';
import TableHead from '../components/Workplace/TableHead';
import { TableBody } from '../components/Workplace/TableBody';
import Footer from '../components/Footer';
import { ScrollToTopComponent } from '../components/ScrollToTop';
// Icons
import location from '/assets/icons/location.svg';

export default function Workplaces() {
    const { workplace, loading, error } = useWorkplace();
    const [workplaceSearch, setWorkplaceSearch] = useState("");
    const [selectLocations, setselectLocations] = useState<string[]>([]);
    const [selectArea, setSelectArea] = useState<string[]>([]);
    const [locations, setLocations] = useState<string[]>([]);
    const [area, setArea] = useState<string[]>([]);

    useEffect(() => {
        const uniqueLocations = [...new Set(workplace.map(w => w.City))]
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        setLocations(uniqueLocations);

        const uniqueNeighbourhoods = [...new Set(workplace.flatMap(w => w.Area))]
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        setArea(uniqueNeighbourhoods);
    }, [workplace]);

    const searchPodcast = workplace.filter((workplace) => {
        const workplaceName = workplace.Workplace.toLowerCase();
        const matchesLocation = selectLocations.length === 0 || selectLocations.includes(workplace.City);
        const matchesNeighbourhood = selectArea.length === 0 ||
            selectArea.some(n => (workplace.Area || []).includes(n));
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
        setSelectArea(prevNeighbourhood =>
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
                                    placeholder="Search work places"
                                />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {searchPodcast.length} results
                                </p>
                            </div>
                            <FilterCity
                                locations={locations}
                                selectLocations={selectLocations}
                                checkboxInput={handleLocationCheckboxInput}
                            />
                            <FilterArea
                                area={area}
                                selectArea={selectArea}
                                checkboxInput={handleNeighbourhoodCheckboxInput}
                            />
                            <a href="#map" className="mt-4 sm:mt-0 sm:ml-3 ml-0 flex items-center justify-center py-4 px-5 text-white bg-[#222] border border-[#333] rounded-xl hover:border-indigo-400"
                            >
                                <img src={location} className="mr-1"></img>
                                View on Map
                            </a>
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-32">
                        <div className="mx-auto overflow-x-auto max-w-screen-xl rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead />
                                <TableBody workplaces={searchPodcast} />
                            </table>
                        </div>
                    </section>


                    <iframe id="map" className="mx-auto mb-40 p-4 sm:w-1/2 h-screen w-screen" src="https://www.google.com/maps/d/embed?mid=1PW03rTtZLnVjmuEoMqnctLVU3TrYZpQ&hl=en&ehbc=2E312F" width="720" height="560"></iframe>

                </>
            )}

            <Footer />

            <ScrollToTopComponent />

        </>
    )
}
