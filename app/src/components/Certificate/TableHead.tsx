export default function TableHead() {
    return (
        <thead className="text-lg text-white bg-[#222] border-b border-[#222]">
            <tr>
                <th scope="col" className="py-8 px-7">
                    Certificate
                </th>
                <th scope="col" className="py-8 px-7">
                    Topics
                </th>
                <th scope="col" className="py-8 px-7">
                    Organizer
                </th>
                <th scope="col" className="py-8 px-7">
                    Ticket
                </th>
            </tr>
        </thead>
    )
}