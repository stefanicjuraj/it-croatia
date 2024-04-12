import join from '/assets/icons/apply.svg';

export const TableBody = ({ communities }: { communities: Array<object> }) => {

    return (
        <tbody>
            {communities.map((community, index) => (
                <tr key={index} className="bg-[#222] border-t border-[#555] text-md">
                    <td className="text-lg px-7 py-7 whitespace-nowrap">
                        {(community as { Community: string }).Community}
                    </td>
                    <td className="text-xs text-white px-7 py-7 whitespace-nowrap">
                        {(community as { Topic: Array<string> }).Topic.map((topic, index) => (
                            <span key={index} className="px-3 py-2 mr-1 bg-indigo-500 rounded-full">
                                {topic}
                            </span>
                        ))}
                    </td>
                    <td className="text-md px-7 py-7 whitespace-nowrap">
                        {(community as { Platform: string }).Platform}
                    </td>
                    <td className="px-10 text-lg py-7">
                        <a className="inline-flex items-center hover:shadow hover:ring-indigo-500 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl"
                            href={(community as { Join: string })["Join"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={join} className="w-8 h-8" alt="Join community icon" />
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    )

}
