import apply from '/assets/icons/apply.svg';

export const TableBody = ({ internships }: { internships: Array<object> }) => {

    return (
        <tbody>
            {internships.map((internship, index) => (
                <tr key={index} className="bg-[#222] border-t border-[#555] text-md">
                    <td className="text-lg px-7 py-7 whitespace-nowrap">
                        {(internship as { Internship: string }).Internship}
                        <br />
                    </td>
                    <td className="px-7 py-7 text-md">
                        <a href={(internship as { Company: string })?.Company} className="underline">
                            {(internship as { Company: string })?.Company}
                        </a>
                    </td>
                    <td className="text-sm text-white px-7 py-7">
                        {(internship as { Department: string[] }).Department.map((topic, index) => (
                            <span key={index} className="px-3 py-2 mr-1 bg-indigo-500 rounded-full">
                                {topic}
                            </span>
                        ))}
                    </td>
                    <td className="px-10 text-lg py-7">
                        <a className="inline-flex items-center hover:shadow hover:ring-indigo-500 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl"
                            href={(internship as { Apply: string })["Apply"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={apply} className="w-8 h-8" alt="Apply for internship icon" />
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    )

}

