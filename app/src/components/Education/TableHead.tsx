export default function TableHead() {
    return (
        <thead className="text-lg text-white bg-[#222] border-b border-[#222]">
            <tr>
                <th scope="col" className="py-8 px-7">
                    Occupation
                </th>
                <th scope="col" className="py-8 px-7">
                    Type
                </th>
                <th scope="col" className="py-8 px-7">
                    Topics
                </th>
                <th scope="col" className="py-8 px-7">
                    Organizer
                </th>
                <th scope="col" className="py-8 px-7">
                    Enroll
                </th>
            </tr>
        </thead>
    )
}