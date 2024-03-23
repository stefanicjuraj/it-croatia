import Header from "../components/Contribute/Header";
import Form from "../components/Contribute/Form";

export default function Contribute() {
    return (
        <>
            <Header />
            <section className="px-4 mx-auto mb-40">
                <div className="mx-auto overflow-x-auto max-w-screen-xl rounded-t-xl rounded-b-xl">
                    <Form />
                </div>
            </section>
        </>
    )
}
