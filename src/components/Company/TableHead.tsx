import chevron from '/assets/icons/sort.svg';

export default function TableHead({ sortEmployees }: { sortEmployees: () => void }) {
    return (
        <thead className="text-lg text-white bg-[#222] border-b border-[#222]">
            <tr>
                <th scope="col" className="py-8 px-7">
                    Company
                </th>
                <th scope="col" className="py-8 px-5">
                    Industry
                </th>
                <th scope="col" className="py-8 px-7">
                    Location
                </th>
                <th scope="col" className="flex py-8 cursor-pointer px-5" onClick={sortEmployees}>
                    Employees
                    <img src={chevron} className="w-5 h-5 mt-1 ml-2 transition-transform" />
                </th>
                <th scope="col" className="py-8 px-6">
                    LinkedIn
                </th>
                <th scope="col" className="py-8 px-3">
                    Glassdoor
                </th>
                <th scope="col" className="py-8 px-7">
                    Reddit
                </th>
            </tr>
        </thead>
    )
}