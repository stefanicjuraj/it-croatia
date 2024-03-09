// Hooks
import { useCompany } from '../hooks/useCompany';
// Components
import Loading from '../components/Loading';
import Header from '../components/Company/Header';
import { Search } from '../components/Search';
import { Filter } from '../components/Company/Filter';
import TableHead from '../components/Company/TableHead';
import { TableBody } from '../components/Company/TableBody';

export default function Companies() {
    const { companies, loading, error, searchInput, search, toggleDropdown, industryTags, dropdown, checkboxInput, tags, mapTags } = useCompany();

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
                            <div className="mr-4 relative w-96 text-white">
                                <Search
                                    search={search}
                                    searchInput={searchInput}
                                    placeholder="Search by company"
                                />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {companies.length} results
                                </p>
                            </div>
                            <Filter
                                toggleDropdown={toggleDropdown}
                                dropdown={dropdown}
                                industryTags={industryTags}
                                tags={tags}
                                mapTags={mapTags}
                                checkboxInput={checkboxInput}
                            />
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="max-w-screen-xl mx-auto overflow-x-auto rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead />
                                <TableBody companies={companies} />
                            </table>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
