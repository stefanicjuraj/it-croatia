import { useState } from 'react';
import chevron from '/assets/icons/chevron.svg';

export const FilterLocation = ({ locations, selectLocations, checkboxInput }: {
    locations: string[];
    selectLocations: string[];
    checkboxInput: (location: string) => void;
}) => {

    const [dropdownOpen, isDropdownOpen] = useState(false);
    const toggle = () => isDropdownOpen(!dropdownOpen);

    return (
        <>
            <div className="relative mt-4 ml-4 sm:mt-0">
                <button className="w-full flex items-center justify-center py-4 px-5 text-white bg-[#222] border border-[#333] rounded-xl hover:border-indigo-400"
                    type="button"
                    onClick={toggle}
                >
                    Location
                    <span className="ml-2 text-sm text-white rounded-full bg-[#333] px-2.5 py-1">
                        {selectLocations.length}
                    </span>
                    <img src={chevron} className={`h-5 w-5 ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                    <div id="checkbox" className="absolute z-10 w-42 bg-[#222] border border-[#333] divide-y divide-gray-100 rounded-lg shadow mt-2 overflow-y-auto max-h-80">
                        <ul className="p-3 text-white space-y-1 text-md"
                            aria-labelledby="checkbox"
                        >
                            {locations.map((location, index) => (
                                <li key={index}>
                                    <div className="flex items-center p-3 rounded-lg hover:bg-[#333]">
                                        <input className="w-5 h-5 text-indigo-500 border-indigo-300 bg-[#111] rounded focus:ring-indigo-500 focus:ring-1"
                                            type="checkbox"
                                            id={`location-checkbox-${index}`}
                                            value={location} checked={selectLocations.includes(location)}
                                            onChange={() => checkboxInput(location)}
                                        />
                                        <label className="ml-3 text-sm text-white rounded"
                                            htmlFor={`filter-checkbox-${index}`}>
                                            {location}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )

}