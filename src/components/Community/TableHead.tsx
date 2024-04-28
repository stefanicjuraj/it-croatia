import { useTheme } from "../../utils/Theme";

export default function TableHead() {
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    return (
        <thead className={`text-lg ${style.textTableHead} ${style.background} ${style.border}`}>
            <tr>
                <th scope="col" className="py-8 px-7">
                    Community
                </th>
                <th scope="col" className="py-8 px-7">
                    Topics
                </th>
                <th scope="col" className="py-8 px-7">
                    Platform
                </th>
                <th scope="col" className="py-8 px-7">
                    Join
                </th>
            </tr>
        </thead>
    )
}