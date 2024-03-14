import chevron from '/assets/icons/sort.svg';

export default function TableHead({ sortDates }: { sortDates: () => void }) {
    return (
        <thead className="text-lg text-white bg-[#222] border-b border-[#222]">
            <tr>
                <th scope="col" className="py-8 px-7">
                    Conference
                </th>
                <th scope="col" className="py-8 px-7">
                    Topics
                </th>
                <th scope="col" className="py-8 px-7">
                    Organizer
                </th>
                <th scope="col" className="py-8 px-7">
                    Location
                </th>
                <th scope="col" className="py-8 px-7 flex cursor-pointer" onClick={sortDates}>
                    Dates
                    <img src={chevron} className="h-5 w-5 mt-1 ml-2 transition-transform" />
                </th>
                <th scope="col" className="py-8 px-7">
                    Ticket
                </th>
            </tr>
        </thead>
    )
}