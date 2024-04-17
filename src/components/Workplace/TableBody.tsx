import location from "/assets/icons/location.svg";

export const TableBody = ({ workplaces }: { workplaces: Array<object> }) => {

    return (
        <tbody>
            {workplaces.map((workplace, index) => (
                <tr key={index} className="bg-[#222] border-t border-[#555] text-md">
                    <td className="text-lg px-7 py-7 whitespace-nowrap">
                        {(workplace as { Workplace: string }).Workplace}
                        <br />
                        <a className="text-sm text-[#999] hover:underline"
                            href={(workplace as { Location: string })["Location"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            {(workplace as { Address: string })["Address"]}
                        </a>
                    </td>
                    <td className="text-xs text-white px-7 py-7 whitespace-nowrap">
                        {(workplace as { Amenity: string[] })?.Amenity.map((amenity, index) => (
                            <span key={index} className="px-3 py-2 mr-1 bg-indigo-500 rounded-lg">
                                {amenity}
                            </span>
                        ))}
                    </td>
                    <td className="px-7 py-7 text-md">
                        {(workplace as { City: string })["City"]}
                    </td>
                    <td className="text-md text-white px-7 py-7 whitespace-nowrap">
                        {(workplace as { Area: string[] })?.Area.map((area, index) => (
                            <span key={index}>
                                {area}
                            </span>
                        ))}
                    </td>
                    <td className="px-10 py-7">
                        <a className="inline-flex items-center hover:shadow hover:ring-indigo-500 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-full"
                            href={(workplace as { Location: string })["Location"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={location} className="w-8 h-8" alt="Reddit icon" />
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    )

}
