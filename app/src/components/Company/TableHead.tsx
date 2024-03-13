import chevron from '/assets/icons/sort.svg';

export default function TableHead({ sortEmployees }: { sortEmployees: () => void }) {
    return (
        <thead className="text-lg text-white bg-[#222] border-b border-[#222]">
            <tr>
                <th scope="col" className="py-8 px-7">
                    Company
                </th>
                <th scope="col" className="py-8 px-7">
                    Industry
                </th>
                <th scope="col" className="py-8 px-7">
                    Location
                </th>
                <th scope="col" className="py-8 px-7 flex cursor-pointer" onClick={sortEmployees}>
                    Employees
                    <img src={chevron} className="h-5 w-5 mt-1 ml-2 transition-transform" />
                </th>
                <th scope="col" className="py-8 px-7">
                    LinkedIn
                </th>
            </tr>
        </thead>
    )
}