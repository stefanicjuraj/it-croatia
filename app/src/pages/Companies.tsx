import React from 'react';
import { useEffect, useState } from 'react';
// Hooks
import { useCompany } from '../hooks/useCompany';
// Components
import Loading from '../components/Loading';
import Header from '../components/Company/Header';
import { Search } from '../components/Search';
import { Filter } from '../components/Company/Filter';
import TableHead from '../components/Company/TableHead';
import { TableBody } from '../components/Company/TableBody';
import { Location } from '../components/Company/Location';

export default function Companies() {
    const { companies, loading, error, industryTags, checkboxInput, tags, mapTags } = useCompany();
    const [companySearch, setCompanySearch] = useState("");
    const [selectLocations, setselectLocations] = useState<string[]>([]);
    const [locations, setLocations] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const locations = [...new Set(companies.map(company => company.Location))]
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        setLocations(locations);
    }, [companies]);

    const searchCompany = companies.filter((company) => {
        const companyName = company.Company.toLowerCase();
        const companyIndustry = company.Industry.some((industry) => tags.includes(industry));
        const companyLocation = selectLocations.length === 0 || selectLocations.includes(company.Location);
        const search = companySearch.toLowerCase();
        return companyName.includes(search) && (tags.length === 0 || companyIndustry) && companyLocation;
    });

    const sortEmployees = React.useMemo(() => {
        return searchCompany.slice().sort((a, b) => {
            if (sortOrder === 'asc') {
                return Number(a.Employees) - Number(b.Employees);
            } else if (sortOrder === 'desc') {
                return Number(b.Employees) - Number(a.Employees);
            }
            return 0;
        });
    }, [searchCompany, sortOrder]);

    const toggleSortEmployees = () => {
        setSortOrder(prevSortOrder => prevSortOrder === 'asc' ? 'desc' : 'asc');
    };

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
                    <section className="max-w-screen-xl px-4 mx-auto sm:px-0 relative animation glow delay-1">
                        <div className="flex items-center mb-8 flex-wrap sm:flex-nowrap">
                            <div className="mr-4 relative sm:w-96 w-80 text-white">
                                <Search
                                    onSearchChange={setCompanySearch}
                                    placeholder="Search companies"
                                />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {searchCompany.length} results
                                </p>
                            </div>
                            <Filter
                                industryTags={industryTags}
                                tags={tags}
                                mapTags={mapTags}
                                checkboxInput={checkboxInput}
                            />
                            <Location
                                locations={locations}
                                selectLocations={selectLocations}
                                checkboxInput={handleLocationCheckboxInput}
                            />
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="max-w-screen-xl mx-auto overflow-x-auto rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead sortEmployees={toggleSortEmployees} />
                                <TableBody companies={sortEmployees} />
                            </table>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
