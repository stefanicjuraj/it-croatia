export default function TableHead() {
    return (
        <thead className="text-lg text-white bg-[#222] border-b border-[#222]">
            <tr>
                <th scope="col" className="py-8 px-7">
                    Community
                </th>
                <th scope="col" className="py-8 px-7">
                    Topics
                </th>
                <th scope="col" className="py-8 px-7">
                    Platform
                </th>
                <th scope="col" className="py-8 px-7">
                    Join
                </th>
            </tr>
        </thead>
    )
}