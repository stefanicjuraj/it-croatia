import { useTheme } from "../../utils/Theme";

export default function TableHead() {
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    return (
        <thead className={`text-lg ${style.textTableHead} ${style.background} ${style.border}`}>
            <tr>
                <th scope="col" className="py-8 px-7">
                    Internship
                </th>
                <th scope="col" className="py-8 px-7">
                    Department
                </th>
                <th scope="col" className="py-8 px-7">
                    Company
                </th>
                <th scope="col" className="py-8 px-7">
                    Apply
                </th>
            </tr>
        </thead>
    )
}