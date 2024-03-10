import Header from "../components/Contribute/Header";
import Form from "../components/Contribute/Form";

export default function Contribute() {
    return (
        <>
            <Header />
            <section className="px-4 mx-auto mb-40">
                <div className="max-w-screen-xl mx-auto overflow-x-auto rounded-t-xl rounded-b-xl">
                    <Form />
                </div>
            </section>
        </>
    )
}
