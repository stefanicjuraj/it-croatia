import linkedin from '/assets/icons/linkedin.svg';

export const TableBody = ({ companies }: { companies: Array<object> }) => {

    return (
        <tbody>
            {companies.map((company, index) => (
                <tr key={index} className="bg-[#222] border-t border-[#444]">
                    <td className="text-lg px-7 py-7 whitespace-nowrap">
                        {(company as { Company: string }).Company}
                        <br />
                        <a className="text-sm text-[#999] hover:underline"
                            href={(company as { Website: string })["Website"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            {(company as { Website: string })["Website"]}
                        </a>
                    </td>
                    <td className="text-sm text-white px-7 py-7 whitespace-nowrap">
                        {(company as { Industry: string[] }).Industry.map((industry, index) => (
                            <span className="px-3 py-2 mr-1 bg-indigo-500 rounded-full"
                                key={index}
                            >
                                {industry}
                            </span>
                        ))}
                    </td>
                    <td className="px-7 py-7 text-md">
                        {(company as { Location: string }).Location}
                    </td>
                    <td className="px-8 py-7 text-md">
                        {(company as { Employees: string }).Employees}
                    </td>
                    <td className="px-10 py-7">
                        <a className="inline-flex items-center hover:shadow hover:ring-indigo-500 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl"
                            href={(company as { LinkedIn: string })["LinkedIn"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={linkedin} className="w-10 h-10" alt="LinkedIn icon" />
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

