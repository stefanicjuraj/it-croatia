import { useState } from 'react';
import chevron from '/assets/icons/chevron.svg';

export const Filter = ({ industryTags, tags, mapTags, checkboxInput }: {
    industryTags: string[];
    tags: string[];
    mapTags: Record<string, string>;
    checkboxInput: (tag: string) => void;
}) => {

    const [dropdownOpen, isDropdownOpen] = useState(false);
    const toggle = () => isDropdownOpen(!dropdownOpen);

    return (
        <>
            <div className="relative mt-4 sm:mt-0">
                <button className="w-full flex items-center justify-center py-4 px-5 text-white bg-[#222] border border-[#333] rounded-xl"
                    type="button"
                    onClick={toggle}
                >
                    Industry
                    <span className="ml-2 text-sm text-white rounded-full bg-[#333] px-2.5 py-1">
                        {tags.length}
                    </span>
                    <img src={chevron} className={`h-5 w-5 ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                    <div id="checkbox" className="absolute z-10 w-56 bg-[#222] border border-[#333] divide-y divide-gray-100 rounded-lg shadow mt-2">
                        <ul className="p-3 space-y-1 text-md text-white"
                            aria-labelledby="checkbox"
                        >
                            {industryTags.map((tag, index) => (
                                <li key={index}>
                                    <div className="flex items-center p-2 rounded-lg hover:bg-[#333]">
                                        <input className="w-5 h-5 text-indigo-500 rounded border-indigo-300 focus:ring-indigo-500 focus:ring-1"
                                            type="checkbox"
                                            id={`filter-checkbox-${index}`}
                                            value={tag} checked={tags.includes(tag)}
                                            onChange={() => checkboxInput(tag)}
                                        />
                                        <label className="ml-2 text-sm text-white rounded"
                                            htmlFor={`filter-checkbox-${index}`}>
                                            {mapTags[tag] || tag}
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