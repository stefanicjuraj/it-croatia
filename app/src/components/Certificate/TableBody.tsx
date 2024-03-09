export const TableBody = ({ certificate }: { certificate: Array<object> }) => {

    return (
        <tbody>
            {certificate.map((certificate, index) => (
                <tr key={index} className="bg-[#222] border-t border-[#555] text-md">
                    <td className="text-lg px-7 py-7 whitespace-nowrap">
                        {(certificate as { Certificate: string }).Certificate}
                        <br />
                        <a className="text-sm text-[#999] hover:underline"
                            href={(certificate as { Website: string })["Website"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            {(certificate as { Website: string })["Website"]}
                        </a>
                    </td>
                    <td className="text-sm text-white px-7 py-7">
                        {(certificate as { Topic: string[] }).Topic.map((topic, index) => (
                            <span key={index} className="px-3 py-2 mr-1 bg-indigo-500 rounded-full">
                                {topic}
                            </span>
                        ))}
                    </td>
                    <td className="px-7 py-7 text-md">
                        <a className="underline"
                            href={(certificate as { Organizer: string })["Organizer"]}
                        >
                            {(certificate as { Organizer: string })["Organizer"]}
                        </a>
                    </td>
                    <td className="px-10 text-lg py-7">
                        <a href={(certificate as { Enroll: string })["Enroll"]} className="inline-flex items-center hover:shadow hover:ring-indigo-500 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl" target="_blank" rel="noopener noreferrer">
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    )

}
