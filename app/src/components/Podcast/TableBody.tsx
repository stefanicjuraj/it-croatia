import listen from '/assets/icons/headphones.svg';

export const TableBody = ({ podcasts }: { podcasts: Array<object> }) => {

    return (
        <tbody>
            {podcasts.map((podcast, index) => (
                <tr key={index} className="bg-[#222] border-t border-[#555] text-md">
                    <td className="text-lg px-7 py-7 whitespace-nowrap">
                        {(podcast as { Podcast: string }).Podcast}
                        <br />
                    </td>
                    <td className="text-xs text-white px-7 py-7">
                        {(podcast as { Topic: Array<string> }).Topic.map((topic, index) => (
                            <span key={index} className="px-3 py-2 mr-1 bg-indigo-500 rounded-full">
                                {topic}
                            </span>
                        ))}
                    </td>
                    <td className="px-7 py-7 text-md">
                        <a className="underline"
                            href={(podcast as { Organizer: string })["Organizer"]}
                        >
                            {(podcast as { Organizer: string })["Organizer"]}
                        </a>
                    </td>
                    <td className="px-9 text-lg py-7">
                        <a className="inline-flex items-center hover:shadow hover:ring-indigo-500 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl"
                            href={(podcast as { Listen: string })["Listen"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={listen} className="w-8 h-8" alt="Listen podcast icon" />
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    )

}
