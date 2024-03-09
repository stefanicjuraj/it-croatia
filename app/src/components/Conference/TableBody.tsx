import ticket from '/assets/icons/ticket.svg';

export const TableBody = ({ conferences }: { conferences: Array<object> }) => {

    return (
        <tbody>
            {conferences.map((conference, index) => (
                <tr key={index} className="bg-[#222] border-t border-[#555] text-md">
                    <td className="text-lg px-7 py-7 whitespace-nowrap">
                        {(conference as { Conference: string, Website: string }).Conference}
                        <br />
                        <a href={(conference as { Website: string })["Website"]} className="text-sm text-[#999] hover:underline" target="_blank" rel="noopener noreferrer">
                            {(conference as { Website: string })["Website"]}
                        </a>
                    </td>
                    <td className="text-xs text-white px-7 py-7">
                        {(conference as { Topic: Array<string> }).Topic.map((topic, index) => (
                            <span key={index} className="px-3 py-2 mr-1 bg-indigo-500 rounded-full">
                                {topic}
                            </span>
                        ))}
                    </td>
                    <td className="px-7 py-7 text-md">
                        <a className="underline"
                            href={(conference as { Organizer: string })["Organizer"]}
                        >
                            {(conference as { Organizer: string })["Organizer"]}
                        </a>
                    </td>
                    <td className="px-7 py-7 text-md">
                        {(conference as { Location: string }).Location}
                    </td>
                    <td className="px-7 py-7 text-md">
                        {(conference as { startDate: string, endDate: string }).startDate}
                        <br />
                        {(conference as { endDate: string }).endDate}
                    </td>
                    <td className="px-10 text-lg py-7">
                        <a className="inline-flex items-center hover:shadow hover:ring-indigo-500 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl"
                            href={(conference as { Ticket: string })["Ticket"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={ticket} className="w-8 h-8" alt="Conference ticket icon" />
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    )

}
