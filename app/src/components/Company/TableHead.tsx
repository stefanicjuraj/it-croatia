export default function TableHead() {
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
                    LinkedIn
                </th>
                <th scope="col" className="py-8 px-7">
                    Employees
                </th>
                <th scope="col" className="py-8 px-7">
                    Location
                </th>
            </tr>
        </thead>
    )
}