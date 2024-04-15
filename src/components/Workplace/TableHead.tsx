export default function TableHead() {
    return (
        <thead className="text-lg text-white bg-[#222] border-b border-[#222]">
            <tr>
                <th scope="col" className="py-8 px-7">
                    Workplace
                </th>
                <th scope="col" className="py-8 px-7">
                    Amenities
                </th>
                <th scope="col" className="py-8 px-7">
                    Location
                </th>
                <th scope="col" className="py-8 px-7">
                    Neighbourhood
                </th>
            </tr>
        </thead>
    )
}