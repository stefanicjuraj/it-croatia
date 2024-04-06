import { useEffect, useState } from 'react';
// Hooks
import { useEducation } from '../hooks/useEducation';
// Components
import Loading from '../components/Loading';
import Header from '../components/Education/Header';
import { Search } from '../components/Search';
import TableHead from '../components/Education/TableHead';
import { TableBody } from '../components/Education/TableBody';
import { Organizer } from '../components/Education/Organizer';

export default function Education() {
    const { education, loading, error } = useEducation();
    const [educationSearch, setEducationSearch] = useState("");
    const [selectOrganizer, setselectOrganizer] = useState<string[]>([]);
    const [organizer, setOrganizer] = useState<string[]>([]);

    useEffect(() => {
        const organizer = [...new Set(education.map(education => education.Organizer))]
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        setOrganizer(organizer);
    }, [education]);

    const searchEducation = education.filter((education) => {
        const educationName = education.Course.toLowerCase();
        const educationOrganizer = selectOrganizer.length === 0 || selectOrganizer.includes(education.Organizer);
        const search = educationSearch.toLowerCase();
        return educationName.includes(search) && educationOrganizer;
    });

    const handleOrganizerCheckboxInput = (organizer: string) => {
        setselectOrganizer(prevOrganizer =>
            prevOrganizer.includes(organizer)
                ? prevOrganizer.filter(l => l !== organizer)
                : [...prevOrganizer, organizer]
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
                                    onSearchChange={setEducationSearch}
                                    placeholder="Search education"
                                />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {searchEducation.length} results
                                </p>
                            </div>
                            <Organizer
                                organizer={organizer}
                                selectOrganizer={selectOrganizer}
                                checkboxInput={handleOrganizerCheckboxInput}
                            />
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="mx-auto overflow-x-auto max-w-screen-xl rounded-t-xl rounded-b-xl">
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
