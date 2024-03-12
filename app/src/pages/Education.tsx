import { useState } from 'react';
// Hooks
import { useEducation } from '../hooks/useEducation';
// Components
import Loading from '../components/Loading';
import Header from '../components/Education/Header';
import { Search } from '../components/Search';
import TableHead from '../components/Education/TableHead';
import { TableBody } from '../components/Education/TableBody';

export default function Education() {
    const { education, loading, error } = useEducation();
    const [educationSearch, setEducationSearch] = useState("");

    const searchEducation = education.filter((education) => {
        const educationName = education.Course.toLowerCase();
        const search = educationSearch.toLowerCase();
        return educationName.includes(search);
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
                                    onSearchChange={setEducationSearch}
                                    placeholder="Search education"
                                />
                                <p id="searchResults" className="text-black absolute right-2 bottom-2 bg-[#eee] focus:ring-4 focus:outline-none rounded-xl text-base px-5 py-2">
                                    {searchEducation.length} results
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="max-w-screen-xl mx-auto overflow-x-auto rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead />
                                <TableBody education={searchEducation} />
                            </table>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
