import React from "react";
import QuizForm from "../components/QuizForm";
import QuizTable from "../components/QuizTable";

const Home = () => {

    const [assertiveMsg, setAssertiveMsg] = React.useState<string>('');
    const [politeMsg, setPoliteMsg] = React.useState<string>('');

    React.useLayoutEffect(() => {
        const assertiveEl = document.querySelector('.assertive-region')
        if (assertiveEl) {
            assertiveEl.textContent = assertiveMsg
        }
    }, [assertiveMsg]);

    React.useLayoutEffect(() => {
        const politeEl = document.querySelector('.polite-region')
        if (politeEl) {
            politeEl.textContent = politeMsg
        }
    }, [politeMsg]);

    const [entries, setEntries] = React.useState<string[]>([]);
    React.useEffect(() => {
        document.title = 'Web Accessibility - Home';
    }, []);

    return (
        <div className="lg:max-w-screen-lg mx-auto mt-8 md:mt-16 text-gray-800">
            <h1 className="sr-only">Home Page</h1>
            <section className="lg:grid lg:grid-cols-2">
                <h2 className="text-2xl md:text-3xl lg:col-span-2 font-serif mb-8">Quiz</h2>
                <QuizForm
                    onSubmit={(entry) => {
                        setEntries((entries) => [...entries, entry])
                        setPoliteMsg(`Entry added`)
                    }}
                />
            </section>
            <section>
                {entries.length > 0 ? (
                    <QuizTable entries={entries} onRemove={(index) => {
                        const entryToRemove = entries[index]
                        setAssertiveMsg(`${entryToRemove} removed`)
                        setEntries((entries) => entries.filter((entry, i) => i !== index))
                    }}/>
                ) : (
                    <p className="mt-4 text-md text-gray-600">Complete the quiz to see the results</p>)
                }
            </section>
        </div>
    );
}

export default Home;
