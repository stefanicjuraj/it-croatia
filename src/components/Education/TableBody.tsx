import apply from '/assets/icons/apply.svg';

export const TableBody = ({ education }: { education: Array<object> }) => {

    return (
        <tbody>
            {education.map((education, index) => (
                <tr key={index} className="bg-[#222] border-t border-[#555] text-md">
                    <td className="text-lg px-7 py-7 whitespace-nowrap">
                        {(education as { Course: string })?.Course}
                    </td>
                    <td className="text-sm text-white px-7 py-7 whitespace-nowrap">
                        {(education as { Topic: string[] })?.Topic.map((topic, index) => (
                            <span key={index} className="px-3 py-2 mr-1 bg-indigo-500 rounded-full">
                                {topic}
                            </span>
                        ))}
                    </td>
                    <td className="px-7 py-7 text-md">
                        <a className="hover:underline"
                            href={(education as { Organizer: string })?.Organizer}
                            target="_blank" rel="noopener noreferrer"
                        >
                            {(education as { Organizer: string })?.Organizer}
                        </a>
                    </td>
                    <td className="px-7 py-7 text-md">
                        {(education as { Type: string })?.Type}
                    </td>
                    <td className="px-10 py-7">
                        <a className="inline-flex items-center hover:shadow hover:ring-indigo-500 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl"
                            href={(education as { Enroll: string })?.Enroll}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={apply} className="w-8 h-8" alt="Apply for education icon" />
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    )

}
