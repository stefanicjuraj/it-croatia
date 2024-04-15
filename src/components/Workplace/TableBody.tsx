export const TableBody = ({ workplaces }: { workplaces: Array<object> }) => {

    return (
        <tbody>
            {workplaces.map((workplace, index) => (
                <tr key={index} className="bg-[#222] border-t border-[#555] text-md">
                    <td className="text-lg px-7 py-7 whitespace-nowrap">
                        {(workplace as { Workplace: string }).Workplace}
                        <br />
                        <a className="text-sm text-[#999] hover:underline"
                            href={(workplace as { Website: string })["Website"]}
                            target="_blank" rel="noopener noreferrer"
                        >
                            {(workplace as { Website: string })["Website"]}
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
                        {(workplace as { Neighbourhood: string[] })?.Neighbourhood.map((neighbourhood, index) => (
                            <span key={index}>
                                {neighbourhood}
                            </span>
                        ))}
                    </td>
                </tr>
            ))}
        </tbody>
    )

}
