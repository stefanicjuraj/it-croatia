// Components
import Header from "../components/Contribute/Header";
import Form from "../components/Contribute/Form";
// Utils
import { useTheme } from "../utils/Theme";

export default function Contribute() {
    const { theme, themeClasses } = useTheme();
    const style = themeClasses(theme);

    return (
        <div className={`${style.backgroundBody} pt-40`}>
            <Header />
            <section className="px-4 mx-auto">
                <div className="mx-auto overflow-x-auto max-w-screen-xl rounded-t-xl rounded-b-xl">
                    <Form />
                </div>
            </section>
        </div>
    )
}
